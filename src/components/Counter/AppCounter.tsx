"use client";
import Image from "next/image";
import icon4 from "@/assets/images/home_10/icons/icon4.svg";
import icon5 from "@/assets/images/home_10/icons/icon5.svg";
import icon6 from "@/assets/images/home_10/icons/icon6.svg";
import icon7 from "@/assets/images/home_10/icons/icon7.svg";
;
import CountUp from "react-countup";

export default function AppCounter() {
  return (
    <section className="app-counter-area pt-100 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="app-counter-item">
              <Image src={icon4} className="icon"
                
                alt="Icon" />
              <p className="item-amout">
                <span className="counter">
                  <CountUp start={0} end={22} delay={1} duration={2.5} />
                </span>
                k +
              </p>
              <p className="item-title">Active Users</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="app-counter-item">
              <Image src={icon5} className="icon"
                
                alt="Icon" />
              <p className="item-amout">
                <span className="counter">
                  {" "}
                  <CountUp start={0} end={22} delay={1} duration={2.5} />
                </span>
                k +
              </p>
              <p className="item-title">Total Download</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="app-counter-item">
              <Image src={icon6} className="icon"
                
                alt="Icon" />
              <p className="item-amout">
                <span className="counter">
                  <CountUp start={0} end={22} delay={1} duration={2.5} />
                </span>
                k +
              </p>
              <p className="item-title">Customars</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="app-counter-item">
              <Image src={icon7} className="icon"
                
                alt="Icon" />
              <p className="item-amout">
                <span className="counter">
                  <CountUp start={0} end={130} delay={1} duration={2.5} />
                </span>
              </p>
              <p className="item-title">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
