"use client";
/**
 * ALTERNATIVE IMPLEMENTATION USING UTILITY FUNCTIONS
 * This is an example showing how WhyChooseOne.js could be written
 * using the gsapAnimations utility functions for cleaner code
 */

"use client";
import Image from "next/image";
import { useMultipleGsapReveals } from "@/hooks/useGsapReveal";
import { createAnimationSequence } from "@/utils/gsapAnimations";
import icon from "@/assets/images/icon/icon.svg";
import icon2 from "@/assets/images/icon/icon-2.svg";
import icon3 from "@/assets/images/icon/icon-3.svg";


export default function WhyChooseOneUtilityExample() {
  // Using utility function for cleaner code
  // Creates 3 fadeInUp animations with staggered delays (0, 0.15, 0.3)
  const [ref1, ref2, ref3] = useMultipleGsapReveals(
    createAnimationSequence('fadeInUpFaster', 3, 0, 0.15)
  );

  return (
    <section className="why-choose section-padding">
      <div className="container">
        <div className="why-choose-wrapper">
          <div className="row">
            <div className="col-md-4" ref={ref1}>
              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <Image src={icon} alt="Why Choose Icon" />
                </div>
                <h4>Deadlines will never surprise you again.</h4>
                <p>
                  We're here every step of the way making sure you and your team
                  deliver
                </p>
              </div>
            </div>
            <div className="col-md-4" ref={ref2}>
              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <Image src={icon2} alt="Why Choose Icon" />
                </div>
                <h4>Everyone knows what need to do.</h4>
                <p>
                  We're here every step of the way making sure you and your team
                  deliver
                </p>
              </div>
            </div>
            <div className="col-md-4" ref={ref3}>
              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <Image src={icon3} alt="Why Choose Icon" />
                </div>
                <h4>Less juggling, more time for Real Work.</h4>
                <p>
                  We're here every step of the way making sure you and your team
                  deliver
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
