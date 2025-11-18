"use client";
import brand1 from "@/assets/images/brand/brand-1.svg";
import brand2 from "@/assets/images/brand/brand-2.svg";
import brand3 from "@/assets/images/brand/brand-3.svg";
import brand4 from "@/assets/images/brand/brand-4.svg";
import brand5 from "@/assets/images/brand/brand-5.svg";
import smile from "@/assets/images/home_2/smile.png";
import userSlide from "@/assets/images/home_2/user-slide.png";
import useGsapReveal, { useGsapMultiple } from "@/hooks/useGsapReveal";
import GLightbox from "glightbox";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Slider from "react-slick";

export default function AboutVideo() {
  const videoSectionRef = useGsapReveal({ animation: 'fadeInUp' });
  const textSectionRef = useGsapReveal({ animation: 'fadeInUp' });
  const clientRefs = useGsapMultiple(6, [
    { animation: 'fadeInRight', delay: 0.1 },
    { animation: 'fadeInRight', delay: 0.3 },
    { animation: 'fadeInRight', delay: 0.5 },
    { animation: 'fadeInRight', delay: 0.1 },
    { animation: 'fadeInRight', delay: 0.3 },
    { animation: 'fadeInRight', delay: 0.5 },
  ]);
  useEffect(() => {
    // eslint-disable-next-line
    let lightbox = GLightbox({
      selector: ".play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  var settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    centerMode: false,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 7000,
    slidesToScroll: 1,
  };
  return (
    <section className="user-area pt-150">
      <div className="container">
        <div className="custom-row">
          <div ref={videoSectionRef} className="row-item">
            <Slider {...settings} className="user-slider">
              <div>
                <div className="single-user-slide-widget">
                  <div className="widget-top">
                    <Image src={userSlide} className="user-img"
                      
                      alt="" />
                    <Link
                     className="play-btn"
                      href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                    >
                      <i className="fas fa-play"></i>
                    </Link>
                    <div className="smile-icon">
                      <Image src={smile} alt="" />
                    </div>
                  </div>
                  <div className="widget-bottom">
                    <p>
                      I’m not sure how i would be able to do support - at Bhumi
                      or any whare else - without Help Landpaggy.
                    </p>
                    <div className="author-info">
                      <span className="name">Ariful Haque, UI Designer</span>
                      <span className="location">Bhumi</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="single-user-slide-widget">
                  <div className="widget-top">
                    <Image src={userSlide} className="user-img"
                      
                      alt="" />
                    <Link
                     className="play-btn"
                      href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                    >
                      {" "}
                      <i className="fas fa-play"></i>
                    </Link>
                    <div className="smile-icon">
                      <Image src={smile} alt="" />
                    </div>
                  </div>
                  <div className="widget-bottom">
                    <p>
                      I’m not sure how i would be able to do support - at Bhumi
                      or any whare else - without Help Landpaggy.
                    </p>
                    <div className="author-info">
                      <span className="name">Ariful Haque, UI Designer</span>
                      <span className="location">Bhumi</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="single-user-slide-widget">
                  <div className="widget-top">
                    <Image src={userSlide} className="user-img"
                      
                      alt="" />
                    <Link
                     className="play-btn"
                      href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                    >
                      {" "}
                      <i className="fas fa-play"></i>
                    </Link>
                    <div className="smile-icon">
                      <Image src={smile} alt="" />
                    </div>
                  </div>
                  <div className="widget-bottom">
                    <p>
                      I’m not sure how i would be able to do support - at Bhumi
                      or any whare else - without Help Landpaggy.
                    </p>
                    <div className="author-info">
                      <span className="name">Ariful Haque, UI Designer</span>
                      <span className="location">Bhumi</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div ref={textSectionRef} className="row-item">
            <h3>Trusted by more than 8,000 business in 140 countries.</h3>
            <Link className="btn" href="/testimonials">
              Meet our coustomers
            </Link>
            <div className="row justify-content-center mt-lg-80 mt-60">
              <div className="col-md-4">
                <div
                  ref={clientRefs[0]}
                 className="client-image"
                >
                  <Image src={brand1} alt="Brand " />
                </div>
              </div>
              <div className="col-md-4">
                <div
                  ref={clientRefs[1]}
                 className="client-image"
                >
                  <Image src={brand2} alt="Brand " />
                </div>
              </div>
              <div className="col-md-4">
                <div
                  ref={clientRefs[2]}
                 className="client-image"
                >
                  <Image src={brand3} alt="Brand " />
                </div>
              </div>
              <div className="col-md-4">
                <div
                  ref={clientRefs[3]}
                 className="client-image"
                >
                  <Image src={brand4} alt="Brand " />
                </div>
              </div>
              <div className="col-md-4">
                <div
                  ref={clientRefs[4]}
                 className="client-image"
                >
                  <Image src={brand5} alt="Brand " />
                </div>
              </div>
              <div className="col-md-4">
                <div
                  ref={clientRefs[5]}
                 className="client-image"
                >
                  <Image src={brand1} alt="Brand " />
                </div>
              </div>
            </div>
            <div className="client-meta">
              <ul className="client-review-icon">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
              </ul>
              <div className="client-review-number">
                <span>4.9</span> Stars
              </div>
              <div className="client-review">
                <span>5121+</span> Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
