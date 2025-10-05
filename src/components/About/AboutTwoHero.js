"use client";
import React, { useEffect } from "react";
import GLightbox from "glightbox";
import Link from "next/link";
export default function AboutTwoHero() {
  useEffect(() => {
    // eslint-disable-next-line
    let lightbox = GLightbox({
      selector: ".play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  return (
    <section className="about-banner-2">
      <div className="banner-shapes">
        <div className="shape">
          <img src="/images/about_2/shape/about-shape.png" alt="shapes" />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-7">
            <div className="banner-left">
              <h1 className="banner-title wow fadeInLeft" data-wow-delay="0.2s">
                Your #1 Premier Partner for business growth.
              </h1>
              <p className="banner-para wow fadeInLeft" data-wow-delay="0.3s">
                Create deeper relationships with your customers using the
                world’s Best Software solution that’s available with Einstein
                AI.
              </p>
              <a href="/" className="btn wow fadeInLeft" data-wow-delay="0.4s">
                Watch Demos
              </a>
              <a
                href="/"
                className="btn btn-red wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                Explore Products
              </a>
            </div>
          </div>

          <div className="col-md-5">
            <div className="banner-right wow fadeInRight" data-wow-delay="0.2s">
              <div className="video-wrapp">
                <div className="video-img">
                  <img src="./images/about_2/about-video.png" alt="Video" />
                </div>
                <Link
                  className="play-btn"
                  href="https://www.youtube.com/watch?v=8Q1OPYfTJ1c"
                >
                  <i className="fas fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
