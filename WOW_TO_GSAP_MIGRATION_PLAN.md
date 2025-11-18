# WOW.js to GSAP Migration Plan

## Project Status
- **Total Files Found:** 119 component files analyzed  
- **Files Still Using WOW.js:** 82 files
- **Files Already Migrated:** 37 files
- **Overall Progress:** 31% Complete
- **Estimated Total Animations:** 800+

## Migration Strategy

### Phase 1: Critical Components (High Visibility) - PRIORITY 1
**Target:** 31 files | **Est. Time:** 2-3 hours

#### 1.1 Hero Banners (13 files) - Entry Points
- [ ] HeroBannerOne.js
- [ ] HeroBannerTwo.js
- [x] HeroBannerFour.js (Partially done - needs completion)
- [ ] HeroBannerThree.js
- [ ] HeroPos.js
- [ ] HeroHRM.js
- [ ] HeroCloud.js
- [ ] HeroBilling.js
- [ ] HeroPrototype.js
- [ ] AppLandingHero.js
- [ ] PricingOneHero.js
- [ ] HelpCenterHero.js
- [ ] ContactHero.js

#### 1.2 Footer Components (9 files) - Every Page
- [ ] FooterApp.js
- [ ] FooterPayment.js
- [ ] FooterThree.js
- [ ] ServiceFooter.js
- [ ] FooterPos.js
- [ ] FooterPrototype.js
- [ ] FooterHRM.js
- [ ] FooterBilling.js
- [ ] CloudFooter.js

#### 1.3 FAQ Components (9 files) - High User Interaction
- [ ] FaqHRM.js
- [ ] FaqPrototype.js
- [ ] FaqTwo.js
- [ ] FaqsSecondary.js
- [ ] FaqOne.js
- [ ] FaqPos.js
- [ ] FaqTab.js
- [ ] FaqsMain.js
- [ ] FaqHelp.js

### Phase 2: Feature Components (Medium Priority) - PRIORITY 2
**Target:** 26 files | **Est. Time:** 2 hours

#### 2.1 Features (10 files)
- [ ] FeatureHRM.js
- [ ] ProtoFeature.js
- [ ] ProtoFeatureTwo.js
- [ ] PosFeatureGroup.js
- [ ] OutstandingFeatures.js
- [ ] FeatureFour.js
- [ ] BillingModel.js
- [ ] AutomateBilling.js
- [ ] CloudFeature.js
- [ ] AppFeature.js

#### 2.2 CTA Components (9 files)
- [ ] All CTA components

#### 2.3 Clients Components (6 files)
- [ ] ProtoClient.js
- [ ] ServiceClient.js
- [ ] PosClient.js
- [ ] CloudClient.js
- [ ] ClientBilling.js
- [ ] AppClient.js

#### 2.4 FeatureWithImg (2 files)
- [ ] FeatureWithImgOne.js
- [ ] FeaturePos.js

### Phase 3: Content Components (Lower Priority) - PRIORITY 3
**Target:** 25 files | **Est. Time:** 1.5 hours

#### 3.1 Career Components (8 files)
- [ ] All career-related components

#### 3.2 About Components (5 files)
- [ ] All about components

#### 3.3 Blog/BlogGrid Components (4 files)
- [ ] Blog components

#### 3.4 Jobs Components (2 files)
- [ ] JobList.js
- [ ] Other job components

#### 3.5 Integrations (3 files)
- [ ] ProtoIntegration.js
- [ ] CloudIntegration.js
- [ ] IntegrationHRM.js

#### 3.6 Tab Sections (2 files)
- [ ] ProtoFeatureTab.js
- [ ] DealTab.js

#### 3.7 Layout Components (1 file)
- [ ] ElementsLayout.js

## Migration Pattern

### Standard Migration Steps:
```javascript
// 1. Add import at top
import { useGsapReveal } from "@/hooks/useGsapReveal";

// 2. Create refs in component
const ref1 = useGsapReveal({ animation: 'fadeInUp', delay: 0.2 });

// 3. Replace className
// BEFORE:
<div className="wow fadeInUp" data-wow-delay="0.2s">

// AFTER:
<div ref={ref1}>

// 4. Remove wow class and data-wow-delay
```

### Animation Type Mapping:
- `wow fadeInUp` → `{ animation: 'fadeInUp' }`
- `wow fadeInDown` → `{ animation: 'fadeInDown' }`
- `wow fadeInLeft` → `{ animation: 'fadeInLeft' }`
- `wow fadeInRight` → `{ animation: 'fadeInRight' }`
- `wow zoomIn` → `{ animation: 'fadeIn' }` (use fadeIn for zoom)
- `wow slideInRight` → `{ animation: 'fadeInRight' }`
- `wow fadeIn` → `{ animation: 'fadeIn' }`

### Delay Conversion:
- `data-wow-delay="0.2s"` → `delay: 0.2`
- `data-wow-delay="0.3s"` → `delay: 0.3`

## Automated Batch Migration

For efficiency, components can be migrated in batches:

### Batch 1: Footers (All similar structure)
All footer components follow the same pattern - can be migrated together.

### Batch 2: Hero Banners (Similar structure)
Most hero banners have similar animation patterns.

### Batch 3: FAQs (Highly repetitive)
FAQ components are very repetitive - perfect for batch processing.

## Quality Assurance

After each batch migration:
1. ✅ Run `npm run build` to check for errors
2. ✅ Test in dev mode (`npm start`)
3. ✅ Visual inspection of animations
4. ✅ Check console for errors

## Progress Tracking

- Phase 1 Complete: [ ] 0/31 files
- Phase 2 Complete: [ ] 0/26 files
- Phase 3 Complete: [ ] 0/25 files

**Total Progress: 37/119 (31%)**

## Notes

- Some files like `HeroBannerFour.js` are partially migrated
- Tab components have minimal WOW usage (just data-wow-delay attributes)
- The `useGsapReveal` hook is already created and tested
- All migrated components should maintain the same visual behavior

## Expected Benefits After Migration

1. **Performance:** GSAP is more performant than WOW.js
2. **Bundle Size:** Removal of WOW.js dependency
3. **Maintainability:** Consistent animation system
4. **Flexibility:** Easier to customize animations
5. **Modern:** Using React hooks instead of jQuery-based library
