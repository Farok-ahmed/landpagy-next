# WOW.js to GSAP + ScrollTrigger Migration Guide

## Overview

This project has been successfully migrated from WOW.js to GSAP (GreenSock Animation Platform) with ScrollTrigger for scroll-based reveal animations. GSAP provides better performance, more control, and is SSR-safe for Next.js applications.

## What Changed

### ✅ Completed Migration Steps

1. **Removed WOW.js dependency** from `package.json`
2. **Created custom `useGsapReveal` hook** at `src/hooks/useGsapReveal.js`
3. **Removed WOW.js initialization** from `src/utils/index.js` and `src/components/Layout/Layout.js`
4. **Migrated components** to use GSAP instead of WOW.js classes

### 🔧 Key Components Migrated

- ✅ `WhyChooseOne.js` - fadeInUp animations with staggered delays
- ✅ `HowItWorks.js` - fadeInDown, fadeInLeft, fadeInRight animations

## How to Use GSAP Animations

### Basic Usage

```javascript
"use client";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function MyComponent() {
  const ref = useGsapReveal({ 
    animation: 'fadeInUp',
    delay: 0.2 
  });

  return (
    <div ref={ref}>
      This content will fade in from bottom when scrolled into view
    </div>
  );
}
```

### Multiple Elements

```javascript
"use client";
import { useMultipleGsapReveals } from "@/hooks/useGsapReveal";

export default function MyComponent() {
  const [ref1, ref2, ref3] = useMultipleGsapReveals([
    { animation: 'fadeInUp', delay: 0 },
    { animation: 'fadeInUp', delay: 0.2 },
    { animation: 'fadeInUp', delay: 0.4 },
  ]);

  return (
    <>
      <div ref={ref1}>First element</div>
      <div ref={ref2}>Second element</div>
      <div ref={ref3}>Third element</div>
    </>
  );
}
```

### Section-Level Animation

```javascript
"use client";
import { useGsapSection } from "@/hooks/useGsapReveal";

export default function MyComponent() {
  const sectionRef = useGsapSection({ 
    animation: 'fadeIn',
    duration: 1 
  });

  return (
    <section ref={sectionRef}>
      {/* Entire section animates as one unit */}
    </section>
  );
}
```

## Available Animations

The `useGsapReveal` hook supports the following animation types:

| Animation | Description | WOW.js Equivalent |
|-----------|-------------|-------------------|
| `fadeIn` | Fade in | `wow fadeIn` |
| `fadeInUp` | Fade in from bottom | `wow fadeInUp` |
| `fadeInDown` | Fade in from top | `wow fadeInDown` |
| `fadeInLeft` | Fade in from left | `wow fadeInLeft` |
| `fadeInRight` | Fade in from right | `wow fadeInRight` |

## Configuration Options

```javascript
useGsapReveal({
  animation: 'fadeInUp',     // Animation type (default: 'fadeIn')
  delay: 0.2,                // Delay in seconds (default: 0)
  duration: 0.8,             // Animation duration (default: 0.8)
  trigger: "top 80%",        // When to trigger (default: "top 80%")
  once: true,                // Animate only once (default: true)
  stagger: 0.1,              // Stagger delay for multiple children (default: 0)
})
```

## Migration Patterns

### Pattern 1: Simple WOW Class
**Before (WOW.js):**
```jsx
<div className="wow fadeInUp">
  Content
</div>
```

**After (GSAP):**
```jsx
"use client";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function Component() {
  const ref = useGsapReveal({ animation: 'fadeInUp' });
  
  return (
    <div ref={ref}>
      Content
    </div>
  );
}
```

### Pattern 2: WOW with Delay
**Before (WOW.js):**
```jsx
<div className="wow fadeInDown" data-wow-delay="0.2s">
  Content
</div>
```

**After (GSAP):**
```jsx
"use client";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function Component() {
  const ref = useGsapReveal({ 
    animation: 'fadeInDown', 
    delay: 0.2 
  });
  
  return (
    <div ref={ref}>
      Content
    </div>
  );
}
```

### Pattern 3: Multiple Elements with Different Animations
**Before (WOW.js):**
```jsx
<div className="wow fadeInLeft" data-wow-delay="0.2s">Item 1</div>
<div className="wow fadeInDown" data-wow-delay="0.2s">Item 2</div>
<div className="wow fadeInRight" data-wow-delay="0.2s">Item 3</div>
```

**After (GSAP):**
```jsx
"use client";
import { useMultipleGsapReveals } from "@/hooks/useGsapReveal";

export default function Component() {
  const [ref1, ref2, ref3] = useMultipleGsapReveals([
    { animation: 'fadeInLeft', delay: 0.2 },
    { animation: 'fadeInDown', delay: 0.2 },
    { animation: 'fadeInRight', delay: 0.2 },
  ]);
  
  return (
    <>
      <div ref={ref1}>Item 1</div>
      <div ref={ref2}>Item 2</div>
      <div ref={ref3}>Item 3</div>
    </>
  );
}
```

### Pattern 4: WOW Speed Classes
**Before (WOW.js):**
```jsx
<div className="wow fadeInUp animate__faster">Fast</div>
<div className="wow fadeInUp animate__fast">Medium</div>
<div className="wow fadeInUp">Normal</div>
```

**After (GSAP):**
```jsx
"use client";
import { useMultipleGsapReveals } from "@/hooks/useGsapReveal";

export default function Component() {
  const [ref1, ref2, ref3] = useMultipleGsapReveals([
    { animation: 'fadeInUp', duration: 0.6 },   // faster
    { animation: 'fadeInUp', duration: 0.8 },   // fast
    { animation: 'fadeInUp', duration: 1 },     // normal
  ]);
  
  return (
    <>
      <div ref={ref1}>Fast</div>
      <div ref={ref2}>Medium</div>
      <div ref={ref3}>Normal</div>
    </>
  );
}
```

## Important Notes

### 1. Client-Side Only
Always add `"use client"` directive at the top of components using GSAP animations:

```javascript
"use client";
import { useGsapReveal } from "@/hooks/useGsapReveal";
```

### 2. No Document Queries
GSAP animations use React refs instead of document queries, making them more React-friendly and performant:

❌ **Don't do this:**
```javascript
useEffect(() => {
  gsap.to(document.querySelector('.my-element'), { opacity: 1 });
}, []);
```

✅ **Do this:**
```javascript
const ref = useGsapReveal({ animation: 'fadeIn' });
return <div ref={ref}>...</div>;
```

### 3. SSR-Safe
The hook automatically checks for `window` object and only runs animations on the client side, making it safe for Next.js SSR.

### 4. Automatic Cleanup
The hook handles cleanup automatically when components unmount, preventing memory leaks.

## Components Still Using WOW.js

The following components still need to be migrated. Search for these files and apply the patterns above:

```bash
# Find all remaining WOW.js usage
grep -r "className.*wow" src/components/
```

Common files that may still need migration:
- `src/components/Workflow/WorkFlow.js`
- `src/components/Workflow/WorkFlowTwo.js`
- `src/components/Workflow/WorkFlowThree.js`
- `src/components/Testimonial/*` (multiple files)
- `src/components/Videos/*`
- `src/components/Service/*`
- And others...

## Migration Checklist for Each Component

For each component you migrate:

- [ ] Add `"use client"` directive at the top
- [ ] Import `useGsapReveal` or `useMultipleGsapReveals`
- [ ] Create refs for animated elements
- [ ] Remove `wow`, `fadeIn*`, `animate__*` classes from JSX
- [ ] Remove `data-wow-delay` attributes
- [ ] Attach refs to elements that should animate
- [ ] Test the animation in the browser

## Testing

After migration, test:

1. **Initial Load**: Elements should be invisible until scrolled into view
2. **Scroll Trigger**: Animation should trigger at the correct scroll position
3. **Delay Timing**: Delays should match the original WOW.js timing
4. **Multiple Animations**: All animated elements should work correctly
5. **Page Navigation**: Animations should work after navigating between pages

## Performance Benefits

GSAP + ScrollTrigger provides:

- ✅ Better performance with hardware acceleration
- ✅ More precise timing and control
- ✅ Smaller bundle size (WOW.js removed)
- ✅ Better Next.js compatibility
- ✅ No jQuery dependency
- ✅ More animation options and flexibility

## Support

For questions or issues with GSAP animations:

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- Check `src/hooks/useGsapReveal.js` for hook implementation

## Examples from This Project

### Example 1: WhyChooseOne.js

This component demonstrates staggered fadeInUp animations with different durations:

```javascript
"use client";
import { useMultipleGsapReveals } from "@/hooks/useGsapReveal";

const [ref1, ref2, ref3] = useMultipleGsapReveals([
  { animation: 'fadeInUp', delay: 0, duration: 0.6 },
  { animation: 'fadeInUp', delay: 0.15, duration: 0.8 },
  { animation: 'fadeInUp', delay: 0.3, duration: 1 },
]);

// Attach refs to column divs
<div className="col-md-4" ref={ref1}>...</div>
<div className="col-md-4" ref={ref2}>...</div>
<div className="col-md-4" ref={ref3}>...</div>
```

### Example 2: HowItWorks.js

This component shows different animation directions (left, down, right):

```javascript
"use client";
import { useMultipleGsapReveals } from "@/hooks/useGsapReveal";

const [titleRef, item1Ref, item2Ref, item3Ref] = useMultipleGsapReveals([
  { animation: 'fadeInDown', delay: 0.2 },
  { animation: 'fadeInLeft', delay: 0.2 },
  { animation: 'fadeInDown', delay: 0.2 },
  { animation: 'fadeInRight', delay: 0.2 },
]);

// Attach to title and service items
<h2 ref={titleRef}>...</h2>
<div ref={item1Ref}>...</div>
<div ref={item2Ref}>...</div>
<div ref={item3Ref}>...</div>
```

---

**Migration Status**: 2 components completed, ~30+ components remaining

**Last Updated**: November 10, 2025
