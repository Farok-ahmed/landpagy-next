"use client";
import Image from "next/image";
import feaShape1 from "@/assets/images/home_5/shapes/fea-shape1.png";
import feaShape2 from "@/assets/images/home_5/shapes/fea-shape2.png";
import feaShape3 from "@/assets/images/home_5/shapes/fea-shape3.png";
import feaImg1 from "@/assets/images/home_5/fea-img1.jpg";
import feaShape4 from "@/assets/images/home_5/shapes/fea-shape4.png";
import feaShape5 from "@/assets/images/home_5/shapes/fea-shape5.png";
import feaImg2 from "@/assets/images/home_5/fea-img2.jpg";
import feaShape6 from "@/assets/images/home_5/shapes/fea-shape6.png";
import feaShape7 from "@/assets/images/home_5/shapes/fea-shape7.png";
import feaImg3 from "@/assets/images/home_5/fea-img3.jpg";
;
import { Parallax } from "react-scroll-parallax";

export default function FeaturePos() {
  return (
    <section className="features-area-eleven pt-135 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="section-title-center">
              <h2 className="wow fadeInUp">Payment Service Provider</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Landpagy helps businesses of all sizes — from small companies to
                large enterprises — accept, process, and manage their online
                payment processing to help maximize business opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="features-item pt-70 pb-100">
            <div className="row align-items-center flex-column-reverse flex-md-row">
              <div className="col-md-5">
                <h4 className="features-title">
                  Start reaching more customers online.
                </h4>
                <p className="features-text">
                  Set up a free online store that syncs with your inventory and
                  your social media—to help you meet customers wherever they
                  shop.
                </p>
                <a href="/" className="features-link">
                  Start selling online
                  <svg
                    className="HoverArrow"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <g fillRule="evenodd">
                      <path className="HoverArrow__linePath" d="M0 5h7"></path>
                      <path
                        className="HoverArrow__tipPath"
                        d="M1 1l4 4-4 4"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="col-md-6 offset-md-1">
                <div className="features-images">
                  <div className="shapes">
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape">
                      <Parallax
                        translateX={["0px", "0px"]}
                        translateY={["-50px", "50px"]}
                        rotateZ={[0, 500]}
                        easing="easeInQuad"
                        speed={-10}
                      >
                        <Image src={feaShape1} alt="Shape" />
                      </Parallax>
                    </div>
                    <div className="shape">
                      <Parallax
                        translateX={["0px", "0px"]}
                        translateY={["-50px", "50px"]}
                        rotateY={[0, 0]}
                        easing="easeInQuad"
                        speed={10}
                      >
                        <Image src={feaShape2} alt="Shape" />
                      </Parallax>
                    </div>
                    <div className="shape wow fadeInRight">
                      <Image src={feaShape3} alt="Shape" />
                    </div>
                  </div>
                  <Image src={feaImg1} alt="Features"
                    className="features-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="features-item pt-90 pb-100">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="features-images">
                  <div className="shapes">
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape">
                      <Parallax
                        translateX={["0px", "0px"]}
                        translateY={["-0px", "-40px"]}
                        rotateZ={[0, 50]}
                        easing="easeInQuad"
                        speed={10}
                      >
                        <Image src={feaShape1} alt="Shape" />
                      </Parallax>
                    </div>
                    <div className="shape">
                      <Parallax
                        translateX={["0px", "0px"]}
                        translateY={["-50px", "50px"]}
                        rotateY={[0, 0]}
                        easing="easeInQuad"
                        speed={10}
                      >
                        <Image src={feaShape4} alt="Shape" />
                      </Parallax>
                    </div>
                    <div className="shape wow fadeInRight">
                      <Image src={feaShape5} alt="Shape" />
                    </div>
                  </div>
                  <Image src={feaImg2} alt="Features"
                    className="features-img" />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 offset-lg-1">
                <h4 className="features-title">
                  Connect your kitchen to community.
                </h4>
                <p className="features-text">
                  Set up a free online store that syncs with your inventory and
                  your social media—to help you meet customers wherever they
                  shop.
                </p>
                <a href="/" className="features-link">
                  Get the tools
                  <svg
                    className="HoverArrow"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <g fillRule="evenodd">
                      <path className="HoverArrow__linePath" d="M0 5h7"></path>
                      <path
                        className="HoverArrow__tipPath"
                        d="M1 1l4 4-4 4"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item pt-90 pb-100">
            <div className="row align-items-center flex-column-reverse flex-md-row">
              <div className="col-md-5">
                <h4 className="features-title">Get paid fast from anywhere.</h4>
                <p className="features-text">
                  Set up a free online store that syncs with your inventory and
                  your social media—to help you meet customers wherever they
                  shop.
                </p>
                <a href="/" className="features-link">
                  Start selling online
                  <svg
                    className="HoverArrow"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <g fillRule="evenodd">
                      <path className="HoverArrow__linePath" d="M0 5h7"></path>
                      <path
                        className="HoverArrow__tipPath"
                        d="M1 1l4 4-4 4"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="col-md-6 offset-md-1">
                <div className="features-images">
                  <div className="shapes">
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape">
                      <Parallax
                        translateX={["0px", "0px"]}
                        translateY={["-50px", "50px"]}
                        rotateY={[500, 0]}
                        easing="easeInQuad"
                        speed={10}
                      >
                        <Image src={feaShape1} alt="Shape" />
                      </Parallax>
                    </div>
                    <div className="shape">
                      <Parallax
                        translateX={["0px", "0px"]}
                        translateY={["-25px", "25px"]}
                        rotateY={[0, 0]}
                        easing="easeInQuad"
                        speed={10}
                      >
                        <Image src={feaShape6} alt="Shape" />
                      </Parallax>
                    </div>
                    <div className="shape wow fadeInRight">
                      <Image src={feaShape7} alt="Shape" />
                    </div>
                  </div>
                  <Image src={feaImg3} alt="Features"
                    className="features-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
