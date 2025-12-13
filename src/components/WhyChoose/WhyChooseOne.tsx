"use client";
import icon2 from "@/assets/images/icon/icon-2.svg";
import icon3 from "@/assets/images/icon/icon-3.svg";
import icon from "@/assets/images/icon/icon.svg";
import { useMultipleGsapReveals } from "@/hooks/useGsapReveal";
import Image from "next/image";


export default function WhyChooseOne() {
  // Create refs for each animated element with staggered delays
  const [ref1, ref2, ref3] = useMultipleGsapReveals([
    { animation: 'fadeInUp', delay: 0, duration: 0.6 },      // animate__faster equivalent
    { animation: 'fadeInUp', delay: 0.15, duration: 0.8 },   // animate__fast equivalent
    { animation: 'fadeInUp', delay: 0.3, duration: 1 },      // default speed
  ]);

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
