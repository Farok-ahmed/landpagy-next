"use client";
import Image from "next/image";
import Link from "next/link";

import shape10 from "@/assets/images/home_9/shapes/shape10.svg";
import shape111 from "@/assets/images/home_9/shapes/shape11-1.svg";
import shape112 from "@/assets/images/home_9/shapes/shape11-2.svg";
import shape113 from "@/assets/images/home_9/shapes/shape11-3.svg";
import shape114 from "@/assets/images/home_9/shapes/shape11-4.svg";
import shape115 from "@/assets/images/home_9/shapes/shape11-5.svg";
import shape116 from "@/assets/images/home_9/shapes/shape11-6.svg";
import pricingImg from "@/assets/images/home_9/pricing-img.png";
;
import { Parallax } from "react-scroll-parallax";

export default function CloudPrice() {
  return (
    <section className="cloud-pricing-area bg-gray pt-130 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="text-center pricing-title cloud-heading-2 mb-55">
              Find the Storage {""}
              <span>
                Plan
                <svg
                  width="139"
                  height="62"
                  viewBox="0 0 139 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="animatable draw"
                    d="M14.3231 6.11344C76.5807 -15.8595 166.546 32.3538 129.57 53.4949C100.5 70.1151 -12.1598 58.7405 2.48812 20.5742C11.3823 -2.60027 108.832 2.45841 129.774 36.7172"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>
              {""} that’s Right for You.
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div
              className="cloud-pricing-images wow fadeInLeft"
              data-wow-delay="0.4s"
            >
              <div className="bg-shapes">
                <div className="shape">
                  <Image src={shape10} alt="Shape" />
                </div>
                <div className="shape">
                  <Parallax
                    translateX={["-20px", "20px"]}
                    translateY={["0px", "0px"]}
                    rotateY={[0, 0]}
                    easing="easeInQuad"
                  >
                    <Image src={shape111} alt="Shape" />
                  </Parallax>
                </div>
                <div className="shape">
                  <Parallax
                    translateX={["20px", "0px"]}
                    translateY={["0px", "0px"]}
                    rotateY={[0, 0]}
                    easing="easeInQuad"
                  >
                    <Image src={shape112} alt="Shape" />
                  </Parallax>
                </div>
                <div className="shape">
                  <Parallax
                    translateX={["30px", "0px"]}
                    translateY={["0px", "0px"]}
                    rotateY={[0, 0]}
                    easing="easeInQuad"
                  >
                    <Image src={shape113} alt="Shape" />
                  </Parallax>
                </div>
                <div className="shape">
                  <Parallax
                    translateX={["0px", "0px"]}
                    translateY={["20px", "0px"]}
                    rotateY={[0, 0]}
                    easing="easeInQuad"
                  >
                    <Image src={shape114} alt="Shape" />
                  </Parallax>
                </div>
                <div className="shape">
                  <Parallax
                    translateX={["0px", "0px"]}
                    translateY={["30px", "0px"]}
                    rotateY={[0, 0]}
                    easing="easeInQuad"
                  >
                    <Image src={shape115} alt="Shape" />
                  </Parallax>
                </div>
                <div className="shape">
                  <Parallax
                    translateX={["30px", "0px"]}
                    translateY={["0px", "0px"]}
                    rotateY={[0, 0]}
                    easing="easeInQuad"
                  >
                    <Image src={shape116} alt="Shape" />
                  </Parallax>
                </div>
              </div>
              <Image src={pricingImg} alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="cloud-pricing-wrapp wow fadeInRight"
              data-wow-delay="0.4s"
            >
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="cloud-monthly-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#cloud-monthly"
                    type="button"
                    role="tab"
                    aria-controls="cloud-monthly"
                    aria-selected="true"
                  >
                    <span></span>
                    Billed monthly
                  </button>
                  <button
                    className="nav-link"
                    id="cloud-annually-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#cloud-annually"
                    type="button"
                    role="tab"
                    aria-controls="cloud-annually"
                    aria-selected="false"
                  >
                    <span></span>
                    Billed annually
                  </button>
                </div>
              </nav>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="cloud-monthly"
                  role="tabpanel"
                  aria-labelledby="cloud-monthly-tab"
                >
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Included</p>
                      <p className="space">10GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Good for safely storing all the basics, like contacts,
                        calendars, and notes.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">Free</p>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">
                        Most Popular
                        <span className="tag">
                          <i className="fas fa-heart"></i>
                        </span>
                      </p>
                      <p className="space">50GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Recommended for storing your photos, videos, files, and
                        apps and backing up your device.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$1.99/month</p>
                      <Link href="/" className="btn-purchase">
                        Purchase
                      </Link>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Lots of Photos</p>
                      <p className="space">100GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Good for families or one person with lots of photos and
                        videos.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$4.99/month</p>
                      <Link href="/" className="btn-purchase">
                        Purchase
                      </Link>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Great for Families</p>
                      <p className="space">1TB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        A lifetime of photos, videos, and everything else for
                        you and up to five family members. Ideal for families to
                        share.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$9.99/month</p>
                      <Link href="/" className="btn-purchase">
                        Purchase
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="cloud-annually"
                  role="tabpanel"
                  aria-labelledby="cloud-annually-tab"
                >
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Included</p>
                      <p className="space">10GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Good for safely storing all the basics, like contacts,
                        calendars, and notes.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">Free</p>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">
                        Most Popular
                        <span className="tag">
                          <i className="fas fa-heart"></i>
                        </span>
                      </p>
                      <p className="space">50GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Recommended for storing your photos, videos, files, and
                        apps and backing up your device.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$19.99/annual</p>
                      <Link href="/" className="btn-purchase">
                        Purchase
                      </Link>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Lots of Photos</p>
                      <p className="space">100GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Good for families or one person with lots of photos and
                        videos.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$49.99/annual</p>
                      <Link href="/" className="btn-purchase">
                        Purchase
                      </Link>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Great for Families</p>
                      <p className="space">1TB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        A lifetime of photos, videos, and everything else for
                        you and up to five family members. Ideal for families to
                        share.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$99.99/annual</p>
                      <Link href="/" className="btn-purchase">
                        Purchase
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
