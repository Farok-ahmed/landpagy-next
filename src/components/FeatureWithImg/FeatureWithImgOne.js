import Link from "next/link";
import React from "react";

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
                  <img src="/images/home_6/fea-images-shape3.svg" alt="" />
                </div>
                <div className="shape">
                  <img src="/images/home_6/fea-shape1.svg" alt="" />
                </div>
                <div className="shape">
                  <img src="/images/home_6/fea-images-shape1.svg" alt="" />
                </div>
              </div>
              <img
                src="/images/home_7/fea-img1.jpg"
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
                  <img src="/images/home_6/fea-images-shape3.svg" alt="" />
                </div>
                <div className="shape">
                  <img src="/images/home_6/fea-shape1.svg" alt="" />
                </div>
                <div className="shape">
                  <img src="/images/home_6/fea-images-shape1.svg" alt="" />
                </div>
              </div>
              <img
                src="/images/home_7/fea-img2.jpg"
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
                  <img src="/images/home_6/fea-images-shape3.svg" alt="" />
                </div>
                <div className="shape">
                  <img src="/images/home_6/fea-shape1.svg" alt="" />
                </div>
                <div className="shape">
                  <img src="/images/home_6/fea-images-shape1.svg" alt="" />
                </div>
              </div>
              <img
                src="/images/home_7/fea-img3.jpg"
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
