"use client";
import Image from "next/image";
import logo1 from "@/assets/images/services/logo1.svg";
import logo2 from "@/assets/images/services/logo2.svg";
import logo3 from "@/assets/images/services/logo3.svg";
import logo4 from "@/assets/images/services/logo4.svg";
import logo5 from "@/assets/images/services/logo5.svg";
import logo6 from "@/assets/images/services/logo6.svg";
import logo7 from "@/assets/images/services/logo7.svg";
import logo8 from "@/assets/images/services/logo8.svg";
;
import CountUp from "react-countup";

export default function ServiceClient() {
  return (
    <section className="our-clients-area pt-140 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="section-title">
              <span className="red">Our Clients</span>
              <h2>
                <span className="counter">
                  <CountUp start={0} end={150000} delay={1} duration={2.5} />
                </span>
                +
              </h2>
              <p>
                Customers who depend on Lanpagy to build their business and
                startup.
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo1} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo2} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo3} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo4} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo5} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo6} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo7} alt="Logo" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 client-img">
                <Image src={logo8} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
