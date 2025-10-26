import React from "react";
import Image from "next/image";
import shape9Svg from "@/assets/images/process/shape9.svg";
import shape8Svg from "@/assets/images/process/shape8.svg";
import icon8Svg from "@/assets/images/process/icon8.svg";
import shape10Svg from "@/assets/images/process/shape10.svg";
import icon7Svg from "@/assets/images/process/icon7.svg";
import icon9Svg from "@/assets/images/process/icon9.svg";
import icon6Svg from "@/assets/images/process/icon6.svg";


export default function BusinessSteps() {
  return (
    <section className="process-area-4 overflow-hidden pt-110 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2
              className="heading-3 text-center mb-90 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              Our approach to reach your business goals
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div
              className="process-item-4 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <Image src={shape8Svg}
                alt="Border"
                className="line-1"
              />
              <Image src={icon6Svg}
                alt="Icon"
                className="item-icon mx-auto"
              />
              <h3 className="item-title">Ideate</h3>
              <p className="item-text">
                Turn your idea from concept to most valuable player.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="process-item-4 wow fadeInLeft"
              data-wow-delay="0.4s"
            >
              <Image src={shape9Svg}
                alt="Border"
                className="line-2"
              />
              <Image src={icon7Svg}
                alt="Icon"
                className="item-icon mx-auto"
              />
              <h3 className="item-title">Design</h3>
              <p className="item-text">
                Sketch out the product to align the user needs
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="process-item-4 wow fadeInLeft"
              data-wow-delay="0.6s"
            >
              <Image src={shape10Svg}
                alt="Border"
                className="line-3"
              />
              <Image src={icon8Svg}
                alt="Icon"
                className="item-icon mx-auto"
              />
              <h3 className="item-title">Develop</h3>
              <p className="item-text">
                Convert the designs into a live application
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="process-item-4 wow fadeInLeft"
              data-wow-delay="0.8s"
            >
              <Image src={icon9Svg}
                alt="Icon"
                className="item-icon mx-auto"
              />
              <h3 className="item-title">Deploy</h3>
              <p className="item-text">
                Launching the application to the market
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
