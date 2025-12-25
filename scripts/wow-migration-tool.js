/**
 * WOW.js to GSAP Migration Utility
 * 
 * This utility helps identify and migrate all WOW.js animations to GSAP.
 * Run this script to get a report of all components that need migration.
 */

const fs = require('fs');
const path = require('path');

// WOW.js patterns to detect
const WOW_PATTERNS = [
  /className="[^"]*\bwow\b[^"]*"/g,
  /className='[^']*\bwow\b[^']*'/g,
  /data-wow-delay/g,
  /data-wow-duration/g,
  /data-wow-offset/g,
  /fadeIn(?:Up|Down|Left|Right)?/g,
  /slideIn(?:Up|Down|Left|Right)?/g,
  /zoomIn/g,
  /bounceIn/g,
  /animate__(?:fast|faster|slow|slower)/g
];

// Animation type mapping
const ANIMATION_MAPPING = {
  'fadeIn': 'fadeIn',
  'fadeInUp': 'fadeInUp',
  'fadeInDown': 'fadeInDown',
  'fadeInLeft': 'fadeInLeft',
  'fadeInRight': 'fadeInRight',
  'slideInUp': 'fadeInUp',
  'slideInDown': 'fadeInDown',
  'slideInLeft': 'fadeInLeft',
  'slideInRight': 'fadeInRight',
  'zoomIn': 'fadeIn',
  'bounceIn': 'fadeInUp'
};

// Speed class mapping
const SPEED_MAPPING = {
  'animate__faster': 0.6,
  'animate__fast': 0.8,
  'animate__slow': 1.5,
  'animate__slower': 2
};

function scanDirectory(dir, results = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and .next directories
      if (!file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath, results);
      }
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const matches = [];

      WOW_PATTERNS.forEach(pattern => {
        const found = content.match(pattern);
        if (found) {
          matches.push(...found);
        }
      });

      if (matches.length > 0) {
        results.push({
          file: filePath.replace(process.cwd(), ''),
          matches: [...new Set(matches)],
          content: content
        });
      }
    }
  });

  return results;
}

function generateMigrationCode(className, delay = '0', duration = null) {
  // Extract animation type
  let animationType = 'fadeIn';
  let speedDuration = 1;

  // Check for animation classes
  Object.keys(ANIMATION_MAPPING).forEach(key => {
    if (className.includes(key)) {
      animationType = ANIMATION_MAPPING[key];
    }
  });

  // Check for speed classes
  Object.keys(SPEED_MAPPING).forEach(key => {
    if (className.includes(key)) {
      speedDuration = SPEED_MAPPING[key];
    }
  });

  // Override with explicit duration if provided
  if (duration) {
    speedDuration = parseFloat(duration);
  }

  // Parse delay
  const delaySeconds = parseFloat(delay.replace(/s$/, '')) || 0;

  return {
    hookCall: `const ref = useGsapReveal({ animation: '${animationType}', delay: ${delaySeconds}, duration: ${speedDuration} });`,
    refAttr: `ref={ref}`,
    animation: animationType,
    delay: delaySeconds,
    duration: speedDuration
  };
}

function analyzeMigration(componentPath) {
  const content = fs.readFileSync(componentPath, 'utf8');
  const analysis = {
    imports: [],
    animations: [],
    recommendations: []
  };

  // Check for existing imports
  const hasUseGsapImport = content.includes("import useGsapReveal") || content.includes("from '@/hooks/useGsapReveal'");

  if (!hasUseGsapImport) {
    analysis.imports.push("import useGsapReveal from '@/hooks/useGsapReveal';");
  }

  // Find all WOW animations
  const wowRegex = /className=["']([^"']*\bwow\b[^"']*)["']/g;

  let match;
  let elementIndex = 0;

  while ((match = wowRegex.exec(content)) !== null) {
    const className = match[1];
    const position = match.index;
    
    // Find the surrounding context
    const beforeContext = content.substring(Math.max(0, position - 200), position);
    const afterContext = content.substring(position, Math.min(content.length, position + 300));
    
    // Try to find delay attribute nearby
    let delay = '0';
    const delayMatch = afterContext.match(/data-wow-delay=["']([^"']*)["']/);
    if (delayMatch) {
      delay = delayMatch[1];
    }

    // Try to find duration attribute nearby
    let duration = null;
    const durationMatch = afterContext.match(/data-wow-duration=["']([^"']*)["']/);
    if (durationMatch) {
      duration = durationMatch[1];
    }

    const migration = generateMigrationCode(className, delay, duration);
    
    analysis.animations.push({
      index: elementIndex++,
      originalClass: className,
      delay,
      duration,
      ...migration,
      context: beforeContext.split('\n').slice(-3).join('\n') + '\n' + 
               match[0] + '\n' +
               afterContext.split('\n').slice(0, 3).join('\n')
    });
  }

  // Generate recommendations
  if (analysis.animations.length > 0) {
    analysis.recommendations.push(`Found ${analysis.animations.length} WOW.js animation(s) to migrate`);
    
    // Check if multiple elements use the same animation
    const animationTypes = analysis.animations.map(a => `${a.animation}-${a.delay}-${a.duration}`);
    const unique = [...new Set(animationTypes)];
    
    if (unique.length < animationTypes.length) {
      analysis.recommendations.push('Consider using useGsapMultiple() for multiple similar animations');
    }
    
    if (analysis.animations.length > 3) {
      analysis.recommendations.push('Consider using utility functions from gsapAnimations.js');
    }
  }

  return analysis;
}

function generateMigrationReport() {
  const componentsDir = path.join(process.cwd(), 'src', 'components');
  const results = scanDirectory(componentsDir);

  console.warn('\n========================================');
  console.warn('WOW.js to GSAP Migration Report');
  console.warn('========================================\n');

  console.warn(`Found ${results.length} file(s) with WOW.js usage:\n`);

  results.forEach((result, index) => {
    console.warn(`${index + 1}. ${result.file}`);
    console.warn(`   Patterns found: ${result.matches.join(', ')}`);
    console.warn('');
  });

  console.warn('\n========================================');
  console.warn('Detailed Migration Guide');
  console.warn('========================================\n');

  // Show detailed analysis for first 5 files
  const detailedAnalysis = results.slice(0, 5);
  
  detailedAnalysis.forEach((result) => {
    const fullPath = path.join(process.cwd(), result.file);
    const analysis = analyzeMigration(fullPath);

    console.warn(`\n\n📄 ${result.file}`);
    console.warn('─'.repeat(60));
    
    if (analysis.imports.length > 0) {
      console.warn('\n📦 Required Imports:');
      analysis.imports.forEach(imp => console.warn(`   ${imp}`));
    }

    if (analysis.animations.length > 0) {
      console.warn('\n🎨 Animations to Migrate:');
      analysis.animations.forEach((anim, i) => {
        console.warn(`\n   Animation ${i + 1}:`);
        console.warn(`   Original: className="${anim.originalClass}"`);
        if (anim.delay !== '0') console.warn(`   Delay: ${anim.delay}s`);
        console.warn(`   Migration: ${anim.hookCall}`);
        console.warn(`   Add to element: ${anim.refAttr}`);
      });
    }

    if (analysis.recommendations.length > 0) {
      console.warn('\n💡 Recommendations:');
      analysis.recommendations.forEach(rec => console.warn(`   • ${rec}`));
    }
  });

  console.warn('\n\n========================================');
  console.warn('Next Steps');
  console.warn('========================================\n');
  console.warn('1. Review the files listed above');
  console.warn('2. Use the migration patterns to convert each component');
  console.warn('3. Test animations after migration');
  console.warn('4. Remove WOW.js classes and data attributes');
  console.warn('5. Run the project to ensure no errors\n');

  // Save detailed report to file
  const reportPath = path.join(process.cwd(), 'WOW_MIGRATION_REPORT.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    summary: {
      totalFiles: results.length,
      timestamp: new Date().toISOString()
    },
    files: results.map(r => ({
      path: r.file,
      patterns: r.matches,
      analysis: analyzeMigration(path.join(process.cwd(), r.file))
    }))
  }, null, 2));

  console.warn(`📊 Detailed report saved to: ${reportPath}\n`);
}

// Run the migration report
if (require.main === module) {
  generateMigrationReport();
}

module.exports = {
  scanDirectory,
  analyzeMigration,
  generateMigrationCode,
  generateMigrationReport
};
