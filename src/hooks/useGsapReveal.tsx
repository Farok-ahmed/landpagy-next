"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapRevealOptions {
  animation?: string;
  delay?: number;
  duration?: number;
  trigger?: string;
  once?: boolean;
  stagger?: number;
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
}: GsapRevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || !ref.current) return;

    const element = ref.current as HTMLElement;
    
    // Check if element is a valid DOM element
    if (!(element instanceof Element)) return;
    
    // Get all elements if it's a container with children to animate
    const elements = element.hasAttribute('data-gsap-children') 
      ? Array.from(element.children) 
      : [element];

    // Define animation variants
    const animations: Record<string, { from: object; to: object }> = {
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
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === element) {
          st.kill();
        }
      });
    };
  }, [animation, delay, duration, trigger, once, stagger]);

  return ref;
};

/**
 * Utility function to create multiple GSAP reveal animations
 * Uses individual hook calls at the top level to satisfy React hooks rules
 * 
 * @param {Array} configs - Array of animation configurations
 * @returns {Array} - Array of refs for each animation
 */
export const useMultipleGsapReveals = (configs: GsapRevealOptions[]) => {
  // Create refs for all possible configurations (max 20)
  const ref0 = useGsapReveal(configs[0] || {});
  const ref1 = useGsapReveal(configs[1] || {});
  const ref2 = useGsapReveal(configs[2] || {});
  const ref3 = useGsapReveal(configs[3] || {});
  const ref4 = useGsapReveal(configs[4] || {});
  const ref5 = useGsapReveal(configs[5] || {});
  const ref6 = useGsapReveal(configs[6] || {});
  const ref7 = useGsapReveal(configs[7] || {});
  const ref8 = useGsapReveal(configs[8] || {});
  const ref9 = useGsapReveal(configs[9] || {});
  const ref10 = useGsapReveal(configs[10] || {});
  const ref11 = useGsapReveal(configs[11] || {});
  const ref12 = useGsapReveal(configs[12] || {});
  const ref13 = useGsapReveal(configs[13] || {});
  const ref14 = useGsapReveal(configs[14] || {});
  const ref15 = useGsapReveal(configs[15] || {});
  const ref16 = useGsapReveal(configs[16] || {});
  const ref17 = useGsapReveal(configs[17] || {});
  const ref18 = useGsapReveal(configs[18] || {});
  const ref19 = useGsapReveal(configs[19] || {});
  
  const allRefs = [ref0, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9,
                   ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19];
  
  return allRefs.slice(0, configs.length);
};

// Backwards-compatible alias used during WOW.js to GSAP migration batches
export const useGsapMultiple = (countOrConfigs: number | GsapRevealOptions[], maybeConfigs?: GsapRevealOptions[]) => {
  // Determine configs array
  let configs: GsapRevealOptions[];
  if (Array.isArray(countOrConfigs)) {
    configs = countOrConfigs;
  } else if (Array.isArray(maybeConfigs)) {
    configs = maybeConfigs;
  } else {
    const total = typeof countOrConfigs === "number" ? countOrConfigs : 0;
    configs = Array.from({ length: total }, () => ({}));
  }
  
  // Pad to 20 elements for consistent hook calls
  const paddedConfigs = [...configs];
  while (paddedConfigs.length < 20) {
    paddedConfigs.push({});
  }
  
  return useMultipleGsapReveals(paddedConfigs).slice(0, configs.length);
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
export const useGsapSection = (options: GsapRevealOptions = {}) => {
  return useGsapReveal({
    animation: options.animation || "fadeInUp",
    delay: options.delay || 0,
    duration: options.duration || 0.8,
    trigger: options.trigger || "top 80%",
    once: options.once !== undefined ? options.once : true,
  });
};

const gsapReveal = { useGsapReveal, useMultipleGsapReveals, useGsapMultiple, useGsapSection };
export default gsapReveal;
