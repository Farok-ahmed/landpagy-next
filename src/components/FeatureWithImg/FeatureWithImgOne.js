import Link from "next/link";
import React from "react";
import Image from "next/image";
import feaImagesShape3Svg from "@/assets/images/home_6/fea-images-shape3.svg";
import feaImg2Jpg from "@/assets/images/home_7/fea-img2.jpg";
import feaImg1Jpg from "@/assets/images/home_7/fea-img1.jpg";
import feaImagesShape1Svg from "@/assets/images/home_6/fea-images-shape1.svg";
import feaShape1Svg from "@/assets/images/home_6/fea-shape1.svg";
import feaImg3Jpg from "@/assets/images/home_7/fea-img3.jpg";


export default function FeatureWithImgOne() {
  return (
    <section className="soft-features-area">
      <div className="container coontainer-soft2">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="fea-content wow fadeInLeft" data-wow-delay="0.2s">
              <h2>Full Responsive & Retina Ready Theme</h2>
              <p>
                The best place to ask for support. Solve any issue with the help
                of our experts.
              </p>
              <Link className="soft-btn" href="/contact-one">
                Explore Now
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="fea-right wow fadeInRight" data-wow-delay="0.2s">
              <div className="shapes">
                <div className="shape">
                  <Image src={feaImagesShape3Svg} alt="" />
                </div>
                <div className="shape">
                  <Image src={feaShape1Svg} alt="" />
                </div>
                <div className="shape">
                  <Image src={feaImagesShape1Svg} alt="" />
                </div>
              </div>
              <Image src={feaImg1Jpg}
                alt=""
                className="fea-img"
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="fea-right wow fadeInLeft" data-wow-delay="0.2s">
              <div className="shapes">
                <div className="shape">
                  <Image src={feaImagesShape3Svg} alt="" />
                </div>
                <div className="shape">
                  <Image src={feaShape1Svg} alt="" />
                </div>
                <div className="shape">
                  <Image src={feaImagesShape1Svg} alt="" />
                </div>
              </div>
              <Image src={feaImg2Jpg}
                alt=""
                className="fea-img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="ml-40 fea-content wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <h2>Created with Drag & Drop Page Builder</h2>
              <p>
                Custumize pre-build content quick and easy with new element
                editor – Yelow pencil.
              </p>
              <Link className="soft-btn" href="/contact-one">
                Explore Now
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="fea-content wow fadeInLeft" data-wow-delay="0.2s">
              <h2>Premium Help & Support. Get Started in Minutes!</h2>
              <p>
                The best place to ask for support. Solve any issue with the help
                of our experts.
              </p>
              <Link className="soft-btn" href="/contact-one">
                Explore Now
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="fea-right wow fadeInRight" data-wow-delay="0.2s">
              <div className="shapes">
                <div className="shape">
                  <Image src={feaImagesShape3Svg} alt="" />
                </div>
                <div className="shape">
                  <Image src={feaShape1Svg} alt="" />
                </div>
                <div className="shape">
                  <Image src={feaImagesShape1Svg} alt="" />
                </div>
              </div>
              <Image src={feaImg3Jpg}
                alt=""
                className="fea-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
