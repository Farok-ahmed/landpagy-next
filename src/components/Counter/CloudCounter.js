"use client";
import Image from "next/image";
import icon1 from "@/assets/images/home_9/shapes/icon1.svg";
import icon2 from "@/assets/images/home_9/shapes/icon2.svg";
;
import CountUp from "react-countup";

export default function CloudCounter() {
  return (
    <div className="cloud-join-us-area pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cloud-join-left">
              <h2 className="join-title cloud-heading-2 mb-10">
                Start being {""}
                <span>
                  Secure.
                  <svg
                    width="208"
                    height="70"
                    viewBox="0 0 208 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="animatable draw"
                      d="M12.3913 15.8907C99.954 -22.4824 242.396 21.6662 198.813 54.8272C168.732 77.7158 1.36509 74.1514 1.36499 36.4575C1.36493 12.3477 73.6476 -1.71354 153.903 14.2707"
                      stroke="#16C79A"
                    />
                  </svg>
                </span>
                Join us Today!
              </h2>
              <p className="join-text mb-40">
                Millions of people trust Landpagy to store billions of files
                using our state of the art infrastructure. Join them and protect
                your data using one of the Internet’s most secure cloud and
                communication providers.
              </p>
              <a href="/" className="btn btn-red">
                {" "}
                Create Account{" "}
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cloud-join-right ml-40">
              <div className="right-item mb-30">
                <div className="w-30">
                  <Image src={icon1} alt="" />
                </div>
                <div className="w-70">
                  <p className="item-text">Number of registered users</p>
                  <p className="amount counter">
                    <CountUp start={0} end={210500} delay={1} duration={2.5} />
                  </p>
                </div>
              </div>
              <div className="right-item">
                <div className="w-30">
                  <Image src={icon2} alt="" />
                </div>
                <div className="w-70">
                  <p className="item-text">Number of files uploaded</p>
                  <p className="amount counter">
                    <CountUp start={0} end={5110500} delay={1} duration={2.5} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
