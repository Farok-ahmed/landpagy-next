export const animationUtils = {
  animaiton() {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs"); // Require only if window is available
      new WOW.WOW({
        live: false,
      }).init();
    }
  },
};
