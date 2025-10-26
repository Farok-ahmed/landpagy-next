"use client";

import { Parallax } from "react-scroll-parallax";
import Slider from "react-slick";
import Image from "next/image";
import testimonialShape from "@/assets/images/home_3/testimonial-shape.svg";
import testimonial1 from "@/assets/images/home_3/testimonial-1.png";
import testimonial2 from "@/assets/images/home_3/testimonial-2.jpg";
import testimonial3 from "@/assets/images/home_3/testimonial-3.jpg";

const SlickBtnPrev = ({ currentSlide, slideCount, children, ...props }) => (
  <button className="slick-prev" {...props}>
    {children}
  </button>
);
const SlickBtnNext = ({ currentSlide, slideCount, children, ...props }) => (
  <button className="slick-next" {...props}>
    {children}
  </button>
);

export default function TestimonialSlideFour() {
  const slickOptions = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    centerMode: false,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 7000,
    fade: true,
    slidesToScroll: 1,
    prevArrow: (
      <SlickBtnPrev>
        <i className="arrow_left"></i>
      </SlickBtnPrev>
    ),
    nextArrow: (
      <SlickBtnNext>
        <i className="arrow_right"></i>
      </SlickBtnNext>
    ),
  };
  return (
    <section className="testimonial-area-six pt-140 pb-150">
      <div className="container position-relative">
        <div className="shape">
          <Parallax
            translateX={["0px", "0px"]}
            translateY={["0px", "0px"]}
            rotateZ={[0, 90]}
            easing="easeInQuad"
          >
            <Image src={testimonialShape} className="layer"
              alt="" />
          </Parallax>
        </div>
        <div className="section-title-center wow fadeInUp">
          <h2>
            Why 15,000+ businesses choose <br />
            Landpagy to grow
          </h2>
        </div>
        <Slider
          {...slickOptions}
          className="testimonial-slider-six position-relative wow fadeInUp"
        >
          <div className="single-slide">
            <div className="row align-items-center">
              <div className="col-sm-8 col-lg-5">
                <div className="author-img">
                  <Image src={testimonial1} className="main-img"
                    
                    alt="man" />
                </div>
              </div>
              <div className="col-lg-7 pl-lg-35">
                <p>
                  ‘’I really like using landpagy, solution to all problems about
                  coustomer data analysis. So, I don’t need to think about it
                  anymore.’’
                </p>
                <div className="author-info">
                  <span className="name">Ariful Haque</span>
                  <span className="pos">UI Designer, Spider Themes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slide">
            <div className="row align-items-center">
              <div className="col-sm-8 col-lg-5">
                <div className="author-img">
                  <Image src={testimonial2} className="main-img"
                    
                    alt="man" />
                </div>
              </div>
              <div className="col-lg-7 pl-lg-35">
                <p>
                  ‘’I really like using landpagy, solution to all problems about
                  coustomer data analysis. So, I don’t need to think about it
                  anymore.’’
                </p>
                <div className="author-info">
                  <span className="name">Kianna Curtis</span>
                  <span className="pos">UI Designer, Spider Themes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slide">
            <div className="row align-items-center">
              <div className="col-sm-8 col-lg-5">
                <div className="author-img">
                  <Image src={testimonial3} className="main-img"
                    
                    alt="man" />
                </div>
              </div>
              <div className="col-lg-7 pl-lg-35">
                <p>
                  ‘’I really like using landpagy, solution to all problems about
                  coustomer data analysis. So, I don’t need to think about it
                  anymore.’’
                </p>
                <div className="author-info">
                  <span className="name">Eh Jewel</span>
                  <span className="pos">CEO, Spider Themes</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
