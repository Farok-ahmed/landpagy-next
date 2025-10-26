"use client";
import Image from "next/image";
import border from "@/assets/images/home_10/shapes/border.svg";
import upRight from "@/assets/images/home_10/shapes/up-right.svg";
;
import Slider from "react-slick";
const SlickBtnPrev = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);
const SlickBtnNext = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

export default function BlogSlider() {
  const slickOptions = {
    dots: false,
    arrows: true,
    centerMode: false,
    slidesToShow: 3,
    autoplay: false,
    infinite: true,
    slidesToScroll: 3,
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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="app-blog-area pt-120 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="mb-20 section-title cloud-heading-2">
              Read up on the {""}
              <span>
                Latest.
                <Image src={border} className="border-shape"
                  
                  alt="Border" />
              </span>
            </h2>
          </div>
        </div>

        <Slider {...slickOptions} className="app-blog-slider">
          <div>
            <div className="single-blog">
              <h3 className="item-title">
                <a href="/">Designed for your safety.</a>
              </h3>
              <p className="item-text">
                Your security and privacy are at the heart of what we do. Learn
                how Android protects you at every turn.
              </p>
              <a href="/" className="item-btn">
                Read the full article
                <Image src={upRight} className="icon"
                  
                  alt="Icon" />
              </a>
            </div>
          </div>
          <div>
            <div className="single-blog">
              <h3 className="item-title">
                <a href="/">Designed for your safety.</a>
              </h3>
              <p className="item-text">
                Your security and privacy are at the heart of what we do. Learn
                how Android protects you at every turn.
              </p>
              <a href="/" className="item-btn">
                Read the full article
                <Image src={upRight} className="icon"
                  
                  alt="Icon" />
              </a>
            </div>
          </div>
          <div>
            <div className="single-blog">
              <h3 className="item-title">
                <a href="/">Designed for your safety.</a>
              </h3>
              <p className="item-text">
                Your security and privacy are at the heart of what we do. Learn
                how Android protects you at every turn.
              </p>
              <a href="/" className="item-btn">
                Read the full article
                <Image src={upRight} className="icon"
                  
                  alt="Icon" />
              </a>
            </div>
          </div>
          <div>
            <div className="single-blog">
              <h3 className="item-title">
                <a href="/">Designed for your safety.</a>
              </h3>
              <p className="item-text">
                Your security and privacy are at the heart of what we do. Learn
                how Android protects you at every turn.
              </p>
              <a href="/" className="item-btn">
                Read the full article
                <Image src={upRight} className="icon"
                  
                  alt="Icon" />
              </a>
            </div>
          </div>

          <div>
            <div className="single-blog">
              <h3 className="item-title">
                <a href="/">Designed for your safety.</a>
              </h3>
              <p className="item-text">
                Your security and privacy are at the heart of what we do. Learn
                how Android protects you at every turn.
              </p>
              <a href="/" className="item-btn">
                Read the full article
                <Image src={upRight} className="icon"
                  
                  alt="Icon" />
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
