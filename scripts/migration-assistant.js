#!/usr/bin/env node

/**
 * Interactive WOW.js to GSAP Migration Assistant
 * 
 * This script helps you migrate WOW.js components to GSAP interactively.
 * It provides suggestions and can even generate migration code snippets.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Color codes for terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.warn(colors[color] + message + colors.reset);
}

// Animation mappings
const ANIMATIONS = {
  'fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } },
  'fadeInUp': { from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 } },
  'fadeInDown': { from: { opacity: 0, y: -30 }, to: { opacity: 1, y: 0 } },
  'fadeInLeft': { from: { opacity: 0, x: -30 }, to: { opacity: 1, x: 0 } },
  'fadeInRight': { from: { opacity: 0, x: 30 }, to: { opacity: 1, x: 0 } }
};

const SPEEDS = {
  'animate__faster': 0.6,
  'animate__fast': 0.8,
  'default': 1,
  'animate__slow': 1.5,
  'animate__slower': 2
};

function parseWowClass(classString) {
  const animations = [];
  
  // Extract animation types
  Object.keys(ANIMATIONS).forEach(anim => {
    if (classString.includes(anim)) {
      animations.push(anim);
    }
  });
  
  // Extract speed
  let duration = 1;
  Object.keys(SPEEDS).forEach(speed => {
    if (classString.includes(speed)) {
      duration = SPEEDS[speed];
    }
  });
  
  return {
    animation: animations[0] || 'fadeIn',
    duration
  };
}

function generateMigrationCode(elementInfo) {
  const { animation, delay = 0, duration = 1, varName = 'ref' } = elementInfo;
  
  const hookCall = `const ${varName} = useGsapReveal({ animation: '${animation}'${delay > 0 ? `, delay: ${delay}` : ''}${duration !== 1 ? `, duration: ${duration}` : ''} });`;
  
  return {
    import: "import useGsapReveal from '@/hooks/useGsapReveal';",
    hookCall,
    refAttribute: `ref={${varName}}`
  };
}

function generateMultipleElementsCode(elements) {
  const configs = elements.map(el => {
    const parts = [`animation: '${el.animation}'`];
    if (el.delay > 0) parts.push(`delay: ${el.delay}`);
    if (el.duration !== 1) parts.push(`duration: ${el.duration}`);
    return `{ ${parts.join(', ')} }`;
  });
  
  return {
    import: "import { useGsapMultiple } from '@/hooks/useGsapReveal';",
    hookCall: `const refs = useGsapMultiple(${elements.length}, [\n  ${configs.join(',\n  ')}\n]);`,
    refAttributes: elements.map((_, i) => `ref={refs[${i}]}`)
  };
}

async function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const wowElements = [];
  
  // Find all WOW elements
  const wowRegex = /className=["']([^"']*\bwow\b[^"']*)["']/g;
  let match;
  let index = 0;
  
  while ((match = wowRegex.exec(content)) !== null) {
    const className = match[1];
    const startPos = match.index;
    
    // Look for delay attribute
    const afterMatch = content.substring(startPos, startPos + 300);
    const delayMatch = afterMatch.match(/data-wow-delay=["']([^"']*)["']/);
    const delay = delayMatch ? parseFloat(delayMatch[1].replace('s', '')) : 0;
    
    const parsed = parseWowClass(className);
    
    wowElements.push({
      index,
      className,
      delay,
      ...parsed,
      context: content.substring(Math.max(0, startPos - 100), Math.min(content.length, startPos + 200))
    });
    
    index++;
  }
  
  return wowElements;
}

async function interactiveMigration() {
  log('\n╔═══════════════════════════════════════════╗', 'cyan');
  log('║  WOW.js → GSAP Migration Assistant       ║', 'cyan');
  log('╚═══════════════════════════════════════════╝\n', 'cyan');
  
  // Step 1: Get file path
  const filePath = await question('Enter the component file path (relative to project root): ');
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    log(`\n❌ File not found: ${fullPath}`, 'red');
    rl.close();
    return;
  }
  
  log('\n🔍 Analyzing file...', 'blue');
  const elements = await analyzeFile(fullPath);
  
  if (elements.length === 0) {
    log('\n✅ No WOW.js animations found in this file!', 'green');
    rl.close();
    return;
  }
  
  log(`\n📊 Found ${elements.length} animated element(s)\n`, 'yellow');
  
  // Step 2: Show found elements
  elements.forEach((el, i) => {
    log(`\n─────────────────────────────────────`, 'cyan');
    log(`Element ${i + 1}:`, 'bright');
    log(`  Animation: ${el.animation}`, 'blue');
    log(`  Delay: ${el.delay}s`, 'blue');
    log(`  Duration: ${el.duration}s`, 'blue');
    log(`  Original class: "${el.className}"`, 'yellow');
  });
  
  log(`\n─────────────────────────────────────\n`, 'cyan');
  
  // Step 3: Generate migration code
  const mode = await question('Migration mode? (1) Single refs, (2) Multiple ref array: ');
  
  log('\n📝 Generated Migration Code:\n', 'green');
  log('═════════════════════════════════════', 'cyan');
  
  if (mode === '2' && elements.length > 1) {
    const code = generateMultipleElementsCode(elements);
    
    log('\n// 1. Add import:', 'bright');
    log(code.import, 'yellow');
    
    log('\n// 2. Add hook call in component:', 'bright');
    log(code.hookCall, 'yellow');
    
    log('\n// 3. Apply refs to elements:', 'bright');
    code.refAttributes.forEach((ref, i) => {
      log(`// Element ${i + 1}: ${ref}`, 'yellow');
    });
  } else {
    // Single refs
    log('\n// 1. Add import:', 'bright');
    log("import useGsapReveal from '@/hooks/useGsapReveal';", 'yellow');
    
    log('\n// 2. Add hook calls:', 'bright');
    elements.forEach((el, i) => {
      const code = generateMigrationCode({
        ...el,
        varName: `ref${i > 0 ? i + 1 : ''}`
      });
      log(code.hookCall, 'yellow');
    });
    
    log('\n// 3. Apply refs to elements:', 'bright');
    elements.forEach((el, i) => {
      const varName = `ref${i > 0 ? i + 1 : ''}`;
      log(`// Element ${i + 1}: ref={${varName}}`, 'yellow');
    });
  }
  
  log('\n═════════════════════════════════════', 'cyan');
  
  // Step 4: Cleanup instructions
  log('\n🧹 Cleanup Instructions:', 'green');
  log('  1. Remove "wow" from className', 'blue');
  log('  2. Remove animation classes (fadeInUp, etc.)', 'blue');
  log('  3. Remove speed classes (animate__fast, etc.)', 'blue');
  log('  4. Remove data-wow-* attributes', 'blue');
  
  log('\n✨ Migration code generated successfully!\n', 'green');
  
  rl.close();
}

async function batchAnalysis() {
  log('\n🔍 Scanning project for WOW.js usage...\n', 'blue');
  
  const componentsDir = path.join(process.cwd(), 'src', 'components');
  const results = [];
  
  function scanDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDir(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('wow')) {
          const elements = analyzeFileSync(filePath);
          if (elements.length > 0) {
            results.push({
              path: filePath.replace(process.cwd(), ''),
              count: elements.length,
              elements
            });
          }
        }
      }
    });
  }
  
  function analyzeFileSync(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const wowElements = [];
    const wowRegex = /className=["']([^"']*\bwow\b[^"']*)["']/g;
    let match;
    
    while ((match = wowRegex.exec(content)) !== null) {
      wowElements.push({ className: match[1] });
    }
    
    return wowElements;
  }
  
  scanDir(componentsDir);
  
  log('═════════════════════════════════════════════', 'cyan');
  log(`  Found ${results.length} file(s) with WOW.js`, 'bright');
  log('═════════════════════════════════════════════\n', 'cyan');
  
  results.forEach((result, i) => {
    log(`${i + 1}. ${result.path}`, 'yellow');
    log(`   ${result.count} animation(s)`, 'blue');
  });
  
  log('');
  rl.close();
}

async function main() {
  const mode = await question(`
Choose mode:
  1) Interactive migration (single file)
  2) Batch analysis (scan all files)
  3) Exit

Enter choice (1-3): `);
  
  if (mode === '1') {
    await interactiveMigration();
  } else if (mode === '2') {
    await batchAnalysis();
  } else {
    log('\n👋 Goodbye!\n', 'cyan');
    rl.close();
  }
}

// Run the assistant
main().catch(err => {
  log(`\n❌ Error: ${err.message}\n`, 'red');
  rl.close();
  process.exit(1);
});
