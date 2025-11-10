"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook for GSAP reveal animations with ScrollTrigger
 * Replaces WOW.js animations with GSAP-based scroll-triggered animations
 * 
 * @param {Object} options - Animation configuration
 * @param {string} options.animation - Animation type: 'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'
 * @param {number} options.delay - Animation delay in seconds (default: 0)
 * @param {number} options.duration - Animation duration in seconds (default: 0.8)
 * @param {string} options.trigger - ScrollTrigger start position (default: "top 80%")
 * @param {boolean} options.once - Whether animation should happen only once (default: true)
 * @param {number} options.stagger - Stagger delay for multiple elements (default: 0)
 * 
 * @returns {Object} - React ref to attach to the element(s) to animate
 * 
 * @example
 * const ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.2 });
 * return <div ref={ref}>Animated content</div>
 */
export const useGsapReveal = ({
  animation = "fadeIn",
  delay = 0,
  duration = 0.8,
  trigger = "top 80%",
  once = true,
  stagger = 0,
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || !ref.current) return;

    const element = ref.current;
    
    // Get all elements if it's a container with children to animate
    const elements = element.hasAttribute('data-gsap-children') 
      ? element.children 
      : [element];

    // Define animation variants
    const animations = {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      fadeInUp: {
        from: { opacity: 0, y: 60 },
        to: { opacity: 1, y: 0 },
      },
      fadeInDown: {
        from: { opacity: 0, y: -60 },
        to: { opacity: 1, y: 0 },
      },
      fadeInLeft: {
        from: { opacity: 0, x: -60 },
        to: { opacity: 1, x: 0 },
      },
      fadeInRight: {
        from: { opacity: 0, x: 60 },
        to: { opacity: 1, x: 0 },
      },
    };

    const selectedAnimation = animations[animation] || animations.fadeIn;

    // Set initial state
    gsap.set(elements, selectedAnimation.from);

    // Create the animation
    const ctx = gsap.to(elements, {
      ...selectedAnimation.to,
      duration,
      delay,
      stagger: stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: trigger,
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });

    // Cleanup
    return () => {
      ctx.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, duration, trigger, once, stagger]);

  return ref;
};

/**
 * Utility function to create multiple GSAP reveal animations
 * Useful for animating multiple independent elements with different animations
 * 
 * @param {Array} configs - Array of animation configurations
 * @returns {Array} - Array of refs for each animation
 * 
 * @example
 * const [ref1, ref2, ref3] = useMultipleGsapReveals([
 *   { animation: 'fadeInUp', delay: 0 },
 *   { animation: 'fadeInUp', delay: 0.2 },
 *   { animation: 'fadeInUp', delay: 0.4 },
 * ]);
 */
export const useMultipleGsapReveals = (configs) => {
  return configs.map((config) => useGsapReveal(config));
};

// Backwards-compatible alias used during WOW.js to GSAP migration batches
export const useGsapMultiple = (countOrConfigs, maybeConfigs) => {
  if (Array.isArray(countOrConfigs)) {
    return useMultipleGsapReveals(countOrConfigs);
  }

  if (Array.isArray(maybeConfigs)) {
    return useMultipleGsapReveals(maybeConfigs);
  }

  const total = typeof countOrConfigs === "number" ? countOrConfigs : 0;
  return useMultipleGsapReveals(Array.from({ length: total }, () => ({})));
};

/**
 * Hook for animating a section/container with a single animation
 * 
 * @param {Object} options - Animation configuration
 * @returns {Object} - React ref to attach to the section
 * 
 * @example
 * const sectionRef = useGsapSection({ animation: 'fadeInUp' });
 * return <section ref={sectionRef}>...</section>
 */
export const useGsapSection = (options = {}) => {
  return useGsapReveal({
    animation: options.animation || "fadeInUp",
    delay: options.delay || 0,
    duration: options.duration || 0.8,
    trigger: options.trigger || "top 80%",
    once: options.once !== undefined ? options.once : true,
  });
};

export default useGsapReveal;
