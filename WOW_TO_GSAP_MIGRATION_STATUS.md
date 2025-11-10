# WOW.js to GSAP Migration - Complete Guide

## ✅ COMPLETED MIGRATIONS

### 1. Workflow Components

#### `src/components/Workflow/WorkFlowTwo.js`
- **Before**: `className="wow fadeInUp animate__fast"`
- **After**: `useGsapReveal({ animation: 'fadeInUp', duration: 0.8 })`
- **Status**: ✅ Migrated

#### `src/components/Workflow/WorkFlowThree.js`
- **Migrations**:
  - Heading: `fadeInUp` (no delay)
  - Paragraph: `fadeInUp` with 0.2s delay
- **Status**: ✅ Migrated

#### `src/components/Workflow/WorkFlow.js`
- **Migrations**:
  - Section: `fadeInUp animate__fast` → duration: 0.8
  - Nav: `fadeInUp` (no delay)
- **Status**: ✅ Migrated

#### `src/components/Workflow/HowItWorks.js`
- **Migrations**:
  - Title: `fadeInDown` with 0.2s delay
  - Left item: `fadeInLeft` with 0.2s delay
  - Center item: `fadeInDown` with 0.2s delay
  - Right item: `fadeInRight` with 0.2s delay
- **Status**: ✅ Migrated (previously completed)

### 2. WhyChoose Components

#### `src/components/WhyChoose/WhyChooseOne.js`
- **Migrations**: 3 cards with staggered `fadeInUp` animations
  - Card 1: duration 0.6 (faster)
  - Card 2: duration 0.8, delay 0.15 (fast)
  - Card 3: duration 1, delay 0.3 (normal)
- **Status**: ✅ Migrated (previously completed)

### 3. Service Components

#### `src/components/Service/ServiceOne.js`
- **Migrations**: 
  - Heading: `fadeInUp`
  - Paragraph: `fadeInUp` with 0.2s delay
  - 6 component cards with staggered delays (0.1s - 0.3s pattern repeated)
- **Status**: ✅ Migrated
- **Note**: Uses `useGsapMultiple()` for efficiency

---

## 🔄 COMPONENTS STILL NEEDING MIGRATION

### High Priority (Heavily Used)

#### 1. `src/components/WhyChoose/WhyChooseHRM.js`
```jsx
// Current WOW usage:
<h2 className="wow fadeInUp">Why they choose us</h2>
<p className="wow fadeInUp" data-wow-delay="0.2s">...</p>
```
**Migration needed**:
```jsx
const headingRef = useGsapReveal({ animation: 'fadeInUp' });
const paragraphRef = useGsapReveal({ animation: 'fadeInUp', delay: 0.2 });
```

#### 2. `src/components/Service/CloudService.js`
```jsx
// Current WOW usage:
className="accordion-images wow fadeInLeft"
data-wow-delay="0.3s"

className="accordion accordion-flush cloud-accordion wow fadeInRight"
data-wow-delay="0.3s"
```
**Migration needed**:
```jsx
const leftImageRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.3 });
const rightAccordionRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.3 });
```

#### 3. `src/components/TabSection/DealTab.js`
```jsx
// Current WOW usage:
<h2 className="wow fadeInUp">Make more deals faster</h2>
<p className="wow fadeInUp" data-wow-delay="0.2s">...</p>
<div className="main-img" data-wow-delay="0.1s">
```
**Migration needed**: Similar pattern as above

#### 4. `src/components/Videos/AboutVideo.js`
```jsx
// Current WOW usage:
<div className="row-item wow fadeInUp">
<div className="client-image wow fadeInRight" data-wow-delay="0.1s">
<div className="client-image wow fadeInRight" data-wow-delay="0.3s">
// ... multiple client images with different delays
```
**Migration needed**: Use `useGsapMultiple()` for the client images array

#### 5. `src/components/Testimonial/AppTestimonial.js`
```jsx
// Current WOW usage:
className="section-title cloud-heading-2 wow fadeInDown mb-55"
data-wow-delay="0.2s"
```
**Migration needed**:
```jsx
const titleRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.2 });
```

---

## 📋 MIGRATION PATTERNS

### Pattern 1: Simple Single Element
```jsx
// Before
<div className="wow fadeInUp">Content</div>

// After
const ref = useGsapReveal({ animation: 'fadeInUp' });
return <div ref={ref}>Content</div>
```

### Pattern 2: Element with Delay
```jsx
// Before
<div className="wow fadeInDown" data-wow-delay="0.2s">Content</div>

// After
const ref = useGsapReveal({ animation: 'fadeInDown', delay: 0.2 });
return <div ref={ref}>Content</div>
```

### Pattern 3: Multiple Elements with Same Animation
```jsx
// Before
<div className="wow fadeInUp">Item 1</div>
<div className="wow fadeInUp" data-wow-delay="0.2s">Item 2</div>
<div className="wow fadeInUp" data-wow-delay="0.4s">Item 3</div>

// After
const refs = useGsapMultiple(3, [
  { animation: 'fadeInUp', delay: 0 },
  { animation: 'fadeInUp', delay: 0.2 },
  { animation: 'fadeInUp', delay: 0.4 },
]);

return (
  <>
    <div ref={refs[0]}>Item 1</div>
    <div ref={refs[1]}>Item 2</div>
    <div ref={refs[2]}>Item 3</div>
  </>
);
```

### Pattern 4: Speed Classes
```jsx
// Before
<div className="wow fadeInUp animate__fast">Content</div>

// After
const ref = useGsapReveal({ animation: 'fadeInUp', duration: 0.8 });
return <div ref={ref}>Content</div>

// Speed mapping:
// animate__faster → duration: 0.6
// animate__fast → duration: 0.8
// normal (default) → duration: 1
// animate__slow → duration: 1.5
// animate__slower → duration: 2
```

---

## 🛠️ TOOLS PROVIDED

### 1. Migration Utility Script
**File**: `scripts/wow-migration-tool.js`

**Usage**:
```bash
node scripts/wow-migration-tool.js
```

**Features**:
- Scans all components for WOW.js usage
- Generates detailed migration report
- Provides code suggestions for each component
- Saves JSON report with all findings

### 2. GSAP Utilities
**File**: `src/utils/gsapAnimations.js`

**Exports**:
- `ANIMATION_PRESETS` - Pre-configured animation objects
- `ANIMATION_SPEEDS` - Speed constants
- `createAnimationSequence()` - Helper for sequential animations
- `createMixedSequence()` - Helper for mixed animation patterns
- `wowToGsap()` - Convert WOW.js config to GSAP config

### 3. Custom Hooks
**File**: `src/hooks/useGsapReveal.js`

**Exports**:
- `useGsapReveal()` - Single element animation hook
- `useGsapMultiple()` - Multiple elements animation hook
- `useGsapSection()` - Section-based animation hook

---

## 📊 MIGRATION STATUS

### Components by Category

| Category | Total | Migrated | Remaining |
|----------|-------|----------|-----------|
| Workflow | 4 | 4 | 0 |
| WhyChoose | 2 | 1 | 1 |
| Service | 3+ | 1 | 2+ |
| Testimonial | 10+ | 1 | 9+ |
| Features | 15+ | 0 | 15+ |
| Tab Sections | 5+ | 0 | 5+ |
| Videos | 2+ | 0 | 2+ |
| Hero Banners | 15+ | 0 | 15+ |
| **TOTAL** | **~75** | **~10** | **~65** |

---

## 🚀 RECOMMENDED MIGRATION ORDER

### Phase 1 (Critical - Do First) ✅ COMPLETED
- [x] Core utility setup (hooks, helpers)
- [x] Workflow components
- [x] WhyChooseOne

### Phase 2 (High Priority) - IN PROGRESS
- [x] ServiceOne
- [ ] WhyChooseHRM
- [ ] CloudService
- [ ] DealTab
- [ ] AboutVideo
- [ ] Main testimonial components

### Phase 3 (Medium Priority)
- [ ] Remaining Service components
- [ ] Feature components (FeatureOne, FeatureTwo, etc.)
- [ ] Tab section components
- [ ] Process components

### Phase 4 (Lower Priority)
- [ ] Hero banners (mostly static, fewer animations)
- [ ] Footer components
- [ ] Client/Brand components
- [ ] Blog components

---

## 🔧 QUICK MIGRATION CHECKLIST

For each component:

1. **Import the hook**
   ```jsx
   import useGsapReveal from '@/hooks/useGsapReveal';
   ```

2. **Create refs for animated elements**
   ```jsx
   const ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.2 });
   ```

3. **Apply refs to JSX elements**
   ```jsx
   <div ref={ref} className="...">
   ```

4. **Remove WOW.js classes**
   - Remove `wow` from className
   - Remove animation classes (`fadeInUp`, etc.)
   - Remove speed classes (`animate__fast`, etc.)
   - Remove `data-wow-*` attributes

5. **Test the animation**
   - Check ScrollTrigger behavior
   - Verify timing and delays
   - Ensure animation looks correct

---

## 📝 NOTES

### Important Considerations
1. **SSR Safety**: All animations only run on client-side
2. **Performance**: GSAP is more performant than WOW.js
3. **Bundle Size**: Removed WOW.js dependency reduces bundle
4. **Flexibility**: GSAP provides more control and customization
5. **Maintenance**: Centralized animation logic in hooks

### Common Issues & Solutions

**Issue**: Animation doesn't trigger
- **Solution**: Check if ScrollTrigger is registered in useEffect

**Issue**: Multiple animations conflict
- **Solution**: Use `useGsapMultiple()` or add unique keys

**Issue**: Animation timing feels off
- **Solution**: Adjust `delay` and `duration` parameters

**Issue**: Element jumps before animation
- **Solution**: Ensure initial opacity is set in GSAP config

---

## 🎯 TESTING CHECKLIST

After migration:
- [ ] No console errors related to animations
- [ ] Animations trigger when scrolling into view
- [ ] Timing matches original WOW.js behavior
- [ ] No layout shifts or flashing
- [ ] Works on mobile devices
- [ ] Works with slow connections (SSR)
- [ ] No WOW.js references in code
- [ ] Bundle size reduced

---

## 📚 REFERENCES

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Documentation](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Migration Guide](./GSAP_MIGRATION_GUIDE.md)
- [Migration Tool](./scripts/wow-migration-tool.js)

---

Last Updated: ${new Date().toLocaleDateString()}
