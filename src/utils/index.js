export const animationUtils = {
  animaiton() {
    if (typeof window !== "undefined") {
      require("wowjs");
      const WOW = window.WOW;
      if (WOW) {
        new WOW({
          live: false,
        }).init();
      }
    }
  },
};
