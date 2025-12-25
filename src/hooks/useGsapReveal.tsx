"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationType = 
  | 'fadeIn' 
  | 'fadeInUp' 
  | 'fadeInDown' 
  | 'fadeInLeft' 
  | 'fadeInRight'
  | 'fadeInUpBig'
  | 'fadeInDownBig'
  | 'fadeInLeftBig'
  | 'fadeInRightBig'
  | 'zoomIn'
  | 'fadeInTopRight';

interface UseGsapRevealOptions {
  animation?: AnimationType;
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
export const useGsapReveal = <T extends HTMLElement = HTMLDivElement>({
  animation = "fadeIn",
  delay = 0,
  duration = 0.8,
  trigger = "top 80%",
  once = true,
  stagger = 0,
}: UseGsapRevealOptions = {}) => {
  const ref = useRef<T | null>(null);

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
      fadeInUpBig: {
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
      },
      fadeInDownBig: {
        from: { opacity: 0, y: -100 },
        to: { opacity: 1, y: 0 },
      },
      fadeInLeftBig: {
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
      },
      fadeInRightBig: {
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0 },
      },
      zoomIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
      fadeInTopRight: {
        from: { opacity: 0, x: 60, y: -60 },
        to: { opacity: 1, x: 0, y: 0 },
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
export const useMultipleGsapReveals = <T extends HTMLElement = HTMLDivElement>(configs: UseGsapRevealOptions[]) => {
  // Create all refs upfront - hooks must be called unconditionally
  const refsArray: React.RefObject<T | null>[] = [];
  for (let i = 0; i < configs.length; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    refsArray.push(useRef<T>(null));
  }

  useEffect(() => {
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
      fadeInUpBig: {
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
      },
      fadeInDownBig: {
        from: { opacity: 0, y: -100 },
        to: { opacity: 1, y: 0 },
      },
      fadeInLeftBig: {
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
      },
      fadeInRightBig: {
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0 },
      },
    };

    refsArray.forEach((ref, index) => {
      if (ref.current) {
        const config = configs[index] || {};
        const animation = config.animation || 'fadeInUp';
        const delay = config.delay || 0;
        const duration = config.duration || 0.8;
        const animationConfig = animations[animation] || animations.fadeInUp;

        gsap.fromTo(
          ref.current,
          animationConfig.from,
          {
            ...animationConfig.to,
            duration,
            delay,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return refsArray;
};

// Backwards-compatible alias used during WOW.js to GSAP migration batches
export const useGsapMultiple = <T extends HTMLElement = HTMLDivElement>(
  countOrConfigs: number | UseGsapRevealOptions[], 
  maybeConfigs?: UseGsapRevealOptions[]
) => {
  // Determine the final configs array before calling hook
  const finalConfigs: UseGsapRevealOptions[] = Array.isArray(countOrConfigs)
    ? countOrConfigs
    : Array.isArray(maybeConfigs)
    ? maybeConfigs
    : Array.from({ length: countOrConfigs }, () => ({}));

  return useMultipleGsapReveals<T>(finalConfigs);
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
export const useGsapSection = (options: UseGsapRevealOptions = {}) => {
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
