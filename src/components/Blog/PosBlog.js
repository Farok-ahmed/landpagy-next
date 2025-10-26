import Link from "next/link";
import React from "react";
import Image from "next/image";
import blogImg2Jpg from "@/assets/images/home_5/blog-img2.jpg";
import author1Png from "@/assets/images/home_5/author1.png";
import blogImg1Jpg from "@/assets/images/home_5/blog-img1.jpg";
import blogImg3Jpg from "@/assets/images/home_5/blog-img3.jpg";


export default function PosBlog() {
  return (
    <section className="blog-area pt-135 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-title-center">
              <h2 className="wow fadeInUp">Learn To Landpagy</h2>
              <p className="wow fadeInUp mb-30" data-wow-delay="0.2s">
                Stark and minimalist in their beauty, the landscapes and
                communities in Louisiana’s Plaquemines Parish exist in a state
                of constant change.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="blog-item">
              <Image src={blogImg1Jpg}
                alt="Blog"
                className="blog-img"
              />
              <div className="blog-content">
                <div className="blog-author">
                  <Image src={author1Png}
                    alt="Author"
                    className="author-img"
                  />
                  <Link href="/blog-details" className="author-name">
                    Andrew Millium
                  </Link>
                  <span className="date">
                    <i className="icon_calendar"></i>
                    12 Nov, 2021
                  </span>
                </div>
                <h5 className="blog-title">
                  <Link href="/blog-details">
                    Introducing morph and distortion animations.
                  </Link>
                </h5>
                <Link href="/blog" className="blog-link">
                  Read more <i className="arrow_carrot-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-item">
              <Image src={blogImg2Jpg}
                alt="Blog"
                className="blog-img"
              />
              <div className="blog-content">
                <div className="blog-author">
                  <Image src={author1Png}
                    alt="Author"
                    className="author-img"
                  />
                  <Link href="/blog-details" className="author-name">
                    Andrew Millium
                  </Link>
                  <span className="date">
                    <i className="icon_calendar"></i>
                    12 Nov, 2021
                  </span>
                </div>
                <h5 className="blog-title">
                  <Link href="/blog-details">
                    Introducing morph and distortion animations.
                  </Link>
                </h5>
                <Link href="/blog" className="blog-link">
                  Read more <i className="arrow_carrot-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mx-auto">
            <div className="blog-item">
              <Image src={blogImg3Jpg}
                alt="Blog"
                className="blog-img"
              />
              <div className="blog-content">
                <div className="blog-author">
                  <Image src={author1Png}
                    alt="Author"
                    className="author-img"
                  />
                  <Link href="/blog-details" className="author-name">
                    Andrew Millium
                  </Link>
                  <span className="date">
                    <i className="icon_calendar"></i>
                    12 Nov, 2021
                  </span>
                </div>
                <h5 className="blog-title">
                  <Link href="/blog-details">
                    Introducing morph and distortion animations.
                  </Link>
                </h5>
                <Link href="/blog" className="blog-link">
                  Read more <i className="arrow_carrot-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
