/**
 * Common GSAP animation configurations
 * Use these preset configs with useGsapReveal hook to maintain consistency
 */

// Speed presets matching WOW.js animate.css classes
export const ANIMATION_SPEEDS = {
  faster: 0.6,
  fast: 0.8,
  normal: 1,
  slow: 1.2,
  slower: 1.5,
};

// Delay presets for staggered animations
export const ANIMATION_DELAYS = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.3,
  extraLong: 0.4,
};

// Common trigger positions
export const TRIGGER_POSITIONS = {
  early: "top 90%",      // Trigger earlier
  default: "top 80%",    // Standard trigger point
  center: "center center", // When element reaches center
  late: "top 60%",       // Trigger later (more scrolled)
};

// Preset animation configurations
export const ANIMATION_PRESETS = {
  // Fade animations
  fadeIn: {
    animation: "fadeIn",
    duration: ANIMATION_SPEEDS.normal,
  },
  
  fadeInFast: {
    animation: "fadeIn",
    duration: ANIMATION_SPEEDS.fast,
  },

  // Fade up variations
  fadeInUp: {
    animation: "fadeInUp",
    duration: ANIMATION_SPEEDS.normal,
  },

  fadeInUpFast: {
    animation: "fadeInUp",
    duration: ANIMATION_SPEEDS.fast,
  },

  fadeInUpFaster: {
    animation: "fadeInUp",
    duration: ANIMATION_SPEEDS.faster,
  },

  // Fade down variations
  fadeInDown: {
    animation: "fadeInDown",
    duration: ANIMATION_SPEEDS.normal,
  },

  fadeInDownFast: {
    animation: "fadeInDown",
    duration: ANIMATION_SPEEDS.fast,
  },

  // Fade left variations
  fadeInLeft: {
    animation: "fadeInLeft",
    duration: ANIMATION_SPEEDS.normal,
  },

  fadeInLeftFast: {
    animation: "fadeInLeft",
    duration: ANIMATION_SPEEDS.fast,
  },

  // Fade right variations
  fadeInRight: {
    animation: "fadeInRight",
    duration: ANIMATION_SPEEDS.normal,
  },

  fadeInRightFast: {
    animation: "fadeInRight",
    duration: ANIMATION_SPEEDS.fast,
  },
};

// Staggered animations helper
export const createStaggeredConfig = (baseAnimation, count, staggerDelay = 0.1) => {
  return Array.from({ length: count }, (_, index) => ({
    ...ANIMATION_PRESETS[baseAnimation],
    delay: index * staggerDelay,
  }));
};

/**
 * Create a sequence of animations with incremental delays
 * @param {string} baseAnimation - Base animation type from ANIMATION_PRESETS
 * @param {number} count - Number of elements to animate
 * @param {number} startDelay - Initial delay before first animation
 * @param {number} staggerDelay - Delay between each element
 * @returns {Array} Array of animation configs
 * 
 * @example
 * const [ref1, ref2, ref3] = useMultipleGsapReveals(
 *   createAnimationSequence('fadeInUp', 3, 0, 0.15)
 * );
 */
export const createAnimationSequence = (
  baseAnimation,
  count,
  startDelay = 0,
  staggerDelay = 0.15
) => {
  return Array.from({ length: count }, (_, index) => ({
    ...ANIMATION_PRESETS[baseAnimation],
    delay: startDelay + index * staggerDelay,
  }));
};

/**
 * Create mixed animation sequence with different animation types
 * @param {Array} animations - Array of animation preset names
 * @param {number} baseDelay - Base delay for all animations
 * @returns {Array} Array of animation configs
 * 
 * @example
 * const [ref1, ref2, ref3] = useMultipleGsapReveals(
 *   createMixedSequence(['fadeInLeft', 'fadeInDown', 'fadeInRight'], 0.2)
 * );
 */
export const createMixedSequence = (animations, baseDelay = 0) => {
  return animations.map((animName) => ({
    ...ANIMATION_PRESETS[animName],
    delay: baseDelay,
  }));
};

/**
 * Convert WOW.js class names to GSAP config
 * Helper function for quick migration reference
 * 
 * @param {string} wowClass - WOW.js class name (e.g., 'fadeInUp')
 * @param {string} speedClass - Optional speed class (e.g., 'animate__fast')
 * @param {number} delay - Optional delay from data-wow-delay
 * @returns {Object} GSAP animation config
 * 
 * @example
 * // WOW: <div className="wow fadeInUp animate__fast" data-wow-delay="0.2s">
 * // GSAP: const ref = useGsapReveal(wowToGsap('fadeInUp', 'animate__fast', 0.2));
 */
export const wowToGsap = (wowClass, speedClass = null, delay = 0) => {
  const baseConfig = ANIMATION_PRESETS[wowClass] || ANIMATION_PRESETS.fadeIn;
  
  let duration = baseConfig.duration;
  
  // Map speed classes
  if (speedClass) {
    const speedMap = {
      'animate__faster': ANIMATION_SPEEDS.faster,
      'animate__fast': ANIMATION_SPEEDS.fast,
      'animate__slow': ANIMATION_SPEEDS.slow,
      'animate__slower': ANIMATION_SPEEDS.slower,
    };
    duration = speedMap[speedClass] || duration;
  }

  return {
    ...baseConfig,
    duration,
    delay,
  };
};

const gsapAnimations = {
  ANIMATION_SPEEDS,
  ANIMATION_DELAYS,
  TRIGGER_POSITIONS,
  ANIMATION_PRESETS,
  createStaggeredConfig,
  createAnimationSequence,
  createMixedSequence,
  wowToGsap,
};

export default gsapAnimations;

