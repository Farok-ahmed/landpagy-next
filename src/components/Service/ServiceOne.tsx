"use client";
import component1 from "@/assets/images/home_3/component-1.svg";
import component2 from "@/assets/images/home_3/component-2.svg";
import component3 from "@/assets/images/home_3/component-3.svg";
import component4 from "@/assets/images/home_3/component-4.svg";
import component5 from "@/assets/images/home_3/component-5.svg";
import component6 from "@/assets/images/home_3/component-6.svg";
import { useGsapReveal, useGsapMultiple } from "@/hooks/useGsapReveal";
import Image from "next/image";


export default function ServiceOne() {
  const headingRef = useGsapReveal({ animation: 'fadeInUp' });
  const paragraphRef = useGsapReveal({ animation: 'fadeInUp', delay: 0.2 });
  const componentRefs = useGsapMultiple(6, [
    { animation: 'fadeInUp', delay: 0.1 },
    { animation: 'fadeInUp', delay: 0.2 },
    { animation: 'fadeInUp', delay: 0.3 },
    { animation: 'fadeInUp', delay: 0.1 },
    { animation: 'fadeInUp', delay: 0.2 },
    { animation: 'fadeInUp', delay: 0.3 },
  ]);
  
  return (
    <section className="components-area pt-105 pb-150">
      <div className="container">
        <div className="section-title-center">
          <h2 ref={headingRef}>Endless components</h2>
          <p ref={paragraphRef}>
            Over a dozen reusable components built to provide iconography,
            dropdowns, input groups, navigation, alerts, and much more.
          </p>
        </div>
        <div className="row gy-4 pt-20">
          <div className="col-lg-4 col-md-6">
            <div ref={componentRefs[0]} className="single-component-widget">
              <div className="icon">
                <Image src={component1} alt="component" />
              </div>
              <h4>Manage leads</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div ref={componentRefs[1]} className="single-component-widget">
              <div className="icon">
                <Image src={component2} alt="component" />
              </div>
              <h4>Daily Reports</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div ref={componentRefs[2]} className="single-component-widget">
              <div className="icon">
                <Image src={component3} alt="component" />
              </div>
              <h4>Track chat</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div ref={componentRefs[3]} className="single-component-widget">
              <div className="icon">
                <Image src={component4} alt="component" />
              </div>
              <h4>Optimized platforms</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div ref={componentRefs[4]} className="single-component-widget">
              <div className="icon">
                <Image src={component5} alt="component" />
              </div>
              <h4>Data analysis</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div ref={componentRefs[5]} className="single-component-widget">
              <div className="icon">
                <Image src={component6} alt="component" />
              </div>
              <h4>Mobile apps</h4>
              <p>
                Access Landpagy from your mobile device and integrate with your
                favorite sales-boosting apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
