"use client";
import Image from "next/image";
import bannerShape2 from "@/assets/images/home_4/banner-shape-2.svg";
import bannerShape4 from "@/assets/images/home_4/banner-shape-4.svg";
import feaShape from "@/assets/images/home_4/fea-shape.svg";
import feaIcon1 from "@/assets/images/home_4/fea-icon1.svg";
import feaIcon2 from "@/assets/images/home_4/fea-icon2.svg";
import feaIcon3 from "@/assets/images/home_4/fea-icon3.svg";
import feaIcon4 from "@/assets/images/home_4/fea-icon4.svg";
import feaIcon5 from "@/assets/images/home_4/fea-icon5.svg";
import feaIcon6 from "@/assets/images/home_4/fea-icon6.svg";


import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function FeatureHRM() {
  const _featureRef1 = useGsapReveal({ animation: "fadeInUp" });
  const _featureRef2 = useGsapReveal({ animation: "fadeInUp", delay: 0.1 });
  return (
    <section className="features-area-9 pt-125 pb-60">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={bannerShape2} alt="shape" />
        </div>
        <div className="shape">
          <Image src={bannerShape4} alt="shape" />
        </div>
        <div className="shape">
          <Image src={feaShape} alt="shape" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-title-center">
              <h2 className="">Outstanding Features</h2>
              <p className="">
                Over a dozen reusable features built to provide iconography,
                dropdowns, input groups, alerts, and much more.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="features-item text-center">
              <Image src={feaIcon1} alt="Icon"
               className="features-icon mx-auto mb-30" />
              <h4 className="features-title">Team Collaboration</h4>
              <p className="features-text">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="features-item text-center">
              <Image src={feaIcon2} alt="Icon"
               className="features-icon mx-auto mb-30" />
              <h4 className="features-title">Time & Attendance</h4>
              <p className="features-text">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="features-item text-center">
              <Image src={feaIcon3} alt="Icon"
               className="features-icon mx-auto mb-30" />
              <h4 className="features-title">Cloud-Based HR</h4>
              <p className="features-text">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="features-item text-center">
              <Image src={feaIcon4} alt="Icon"
               className="features-icon mx-auto mb-30" />
              <h4 className="features-title">Customizable Payroll</h4>
              <p className="features-text">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="features-item text-center">
              <Image src={feaIcon5} alt="Icon"
               className="features-icon mx-auto mb-30" />
              <h4 className="features-title">Email & Scheduling</h4>
              <p className="features-text">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="features-item text-center">
              <Image src={feaIcon6} alt="Icon"
               className="features-icon mx-auto mb-30" />
              <h4 className="features-title">Career Portal</h4>
              <p className="features-text">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
