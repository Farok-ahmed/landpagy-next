# Migration Scripts

This directory contains utility scripts to help migrate from WOW.js to GSAP.

## Available Scripts

### 1. `wow-migration-tool.js`
**Purpose**: Automated scanning and reporting of WOW.js usage

**Usage**:
```bash
node scripts/wow-migration-tool.js
```

**Features**:
- Scans all components for WOW.js usage
- Generates detailed migration report
- Provides code suggestions for each component
- Saves JSON report to `WOW_MIGRATION_REPORT.json`

**Output**:
- Console report with file locations and patterns
- Detailed migration guide for first 5 files
- JSON file with complete analysis

---

### 2. `migration-assistant.js`
**Purpose**: Interactive migration helper

**Usage**:
```bash
node scripts/migration-assistant.js
```

**Features**:
- Interactive mode: Migrate a single file step-by-step
- Batch mode: Scan all files for WOW.js usage
- Generates ready-to-use code snippets
- Color-coded terminal output

**Modes**:

#### Mode 1: Interactive Migration
- Enter a file path
- See all WOW animations found
- Get generated GSAP code
- Choose between single refs or array pattern

#### Mode 2: Batch Analysis
- Scans entire project
- Lists all files with WOW.js
- Shows count of animations per file

---

## Quick Start Guide

### Step 1: Run Batch Analysis
```bash
node scripts/migration-assistant.js
# Choose option 2
```

This shows you all files that need migration.

### Step 2: Migrate Files One by One
```bash
node scripts/migration-assistant.js
# Choose option 1
# Enter file path: src/components/YourComponent.js
```

Follow the generated code suggestions.

### Step 3: Verify Migration
```bash
node scripts/wow-migration-tool.js
```

Check the report to see remaining files.

---

## Migration Workflow

```
┌─────────────────────────────────────┐
│  1. Run batch analysis              │
│     (migration-assistant.js)        │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  2. Pick a component to migrate     │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  3. Run interactive migration       │
│     (migration-assistant.js)        │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  4. Copy generated code             │
│  5. Update your component           │
│  6. Remove WOW.js classes           │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  7. Test in browser                 │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  8. Repeat for next component       │
└─────────────────────────────────────┘
```

---

## Example Usage

### Finding WOW.js Files

```bash
$ node scripts/migration-assistant.js

Choose mode:
  1) Interactive migration (single file)
  2) Batch analysis (scan all files)
  3) Exit

Enter choice (1-3): 2

🔍 Scanning project for WOW.js usage...

═════════════════════════════════════════════
  Found 65 file(s) with WOW.js
═════════════════════════════════════════════

1. /src/components/Service/CloudService.js
   2 animation(s)
2. /src/components/WhyChoose/WhyChooseHRM.js
   2 animation(s)
...
```

### Migrating a Specific File

```bash
$ node scripts/migration-assistant.js

Choose mode:
  1) Interactive migration (single file)
  2) Batch analysis (scan all files)
  3) Exit

Enter choice (1-3): 1

╔═══════════════════════════════════════════╗
║  WOW.js → GSAP Migration Assistant       ║
╚═══════════════════════════════════════════╝

Enter the component file path: src/components/Service/CloudService.js

🔍 Analyzing file...

📊 Found 2 animated element(s)

─────────────────────────────────────
Element 1:
  Animation: fadeInLeft
  Delay: 0.3s
  Duration: 1s
  Original class: "accordion-images wow fadeInLeft"

─────────────────────────────────────
Element 2:
  Animation: fadeInRight
  Delay: 0.3s
  Duration: 1s
  Original class: "accordion wow fadeInRight"

─────────────────────────────────────

Migration mode? (1) Single refs, (2) Multiple ref array: 1

📝 Generated Migration Code:

═════════════════════════════════════

// 1. Add import:
import useGsapReveal from '@/hooks/useGsapReveal';

// 2. Add hook calls:
const ref = useGsapReveal({ animation: 'fadeInLeft', delay: 0.3 });
const ref2 = useGsapReveal({ animation: 'fadeInRight', delay: 0.3 });

// 3. Apply refs to elements:
// Element 1: ref={ref}
// Element 2: ref={ref2}

═════════════════════════════════════

🧹 Cleanup Instructions:
  1. Remove "wow" from className
  2. Remove animation classes (fadeInUp, etc.)
  3. Remove speed classes (animate__fast, etc.)
  4. Remove data-wow-* attributes

✨ Migration code generated successfully!
```

---

## Tips & Tricks

### 1. Use Multiple Refs Pattern for Similar Elements
If you have 3+ elements with similar animations:

```bash
Migration mode? (1) Single refs, (2) Multiple ref array: 2
```

This generates cleaner code using `useGsapMultiple()`.

### 2. Save Reports for Reference
The `wow-migration-tool.js` saves a JSON report:

```bash
node scripts/wow-migration-tool.js
# Creates: WOW_MIGRATION_REPORT.json
```

You can review this file to plan your migration strategy.

### 3. Migrate by Priority
Focus on frequently used components first:
1. Layout components (Header, Footer)
2. Home page components
3. Feature sections
4. Less critical pages

### 4. Test After Each Migration
Always test animations after migrating a component:
```bash
npm run dev
# Open the page with your component
# Scroll to trigger animations
```

---

## Troubleshooting

### Script won't run
**Solution**: Ensure you're in the project root directory:
```bash
cd /path/to/landpagy-next
node scripts/migration-assistant.js
```

### File not found error
**Solution**: Use relative path from project root:
```bash
# ✅ Correct
src/components/Service/CloudService.js

# ❌ Wrong
/Users/you/project/src/components/Service/CloudService.js
```

### No WOW.js found but it's there
**Solution**: Script only detects className patterns. If you have dynamic classNames, you'll need to migrate manually.

---

## Advanced Usage

### Custom Report Format
Modify `wow-migration-tool.js` to change report format:

```javascript
// Around line 200
const reportPath = path.join(process.cwd(), 'MY_CUSTOM_REPORT.json');
```

### Filter by Component Type
Scan specific directories only:

```javascript
// In migration-assistant.js, line ~250
const componentsDir = path.join(process.cwd(), 'src', 'components', 'Service');
// Only scans Service components
```

---

## Related Documentation

- [Complete Migration Guide](../MIGRATION_COMPLETE_GUIDE.md)
- [Migration Status Tracker](../WOW_TO_GSAP_MIGRATION_STATUS.md)
- [GSAP Migration Guide](../GSAP_MIGRATION_GUIDE.md)

---

## Support

If you encounter issues:

1. Check the documentation files
2. Review example migrations in:
   - `src/components/Workflow/WorkFlowTwo.js`
   - `src/components/WhyChoose/WhyChooseOne.js`
   - `src/components/Service/ServiceOne.js`
3. Test with a simple component first
4. Verify GSAP is properly installed

---

Last Updated: ${new Date().toLocaleDateString()}
