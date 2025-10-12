"use client";

import Slider from "react-slick";

const SlickBtnPrev = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);
const SlickBtnNext = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

export default function TestimonialSlideThree() {
  const slickOptions = {
    dots: false,
    arrows: true,
    slidesToShow: 2,
    centerMode: false,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 7000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <SlickBtnPrev>
        <i className="arrow_left slick-arrow"></i>
      </SlickBtnPrev>
    ),
    nextArrow: (
      <SlickBtnNext>
        <i className="arrow_right slick-arrow"></i>
      </SlickBtnNext>
    ),
  };
  return (
    <section className="soft-testimonial-area pt-135 pb-80">
      <div className="container container-soft2">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="wow fadeInUp">
                We are Trusted <br />
                15+ Countries Worldwide
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider {...slickOptions} className="slider-wrapper">
            <div>
              <div className="slide-item">
                <div>
                  <div className="author d-flex align-items-center">
                    <div className="auth-img">
                      <img src="/images/home_7/auth1.png" alt="" />
                    </div>
                    <div className="auth-info">
                      <p>
                        <span className="auth-name">Leo Drayer</span>CEO, Spider
                        Themes
                      </p>
                    </div>
                  </div>
                  <div className="author-text">
                    <p>
                      "Very well thought out and articulate communication. No
                      shortcuts. The best part...always solving problems with
                      great original ideas!."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-item">
                <div className="author d-flex align-items-center">
                  <div className="auth-img">
                    <img src="/images/home_7/auth2.png" alt="" />
                  </div>
                  <div className="auth-info">
                    <p>
                      <span className="auth-name">Jason Shames</span>UI
                      Designer, Spider Themes
                    </p>
                  </div>
                </div>
                <div className="author-text">
                  <p>
                    "Very well thought out and articulate communication. No
                    shortcuts. The best part...always solving problems with
                    great original ideas!."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-item">
                <div className="author d-flex align-items-center">
                  <div className="auth-img">
                    <img src="/images/home_7/auth1.png" alt="" />
                  </div>
                  <div className="auth-info">
                    <p>
                      <span className="auth-name">Leo Drayer</span>CEO, Spider
                      Themes
                    </p>
                  </div>
                </div>
                <div className="author-text">
                  <p>
                    "Very well thought out and articulate communication. No
                    shortcuts. The best part...always solving problems with
                    great original ideas!."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-item">
                <div className="author d-flex align-items-center">
                  <div className="auth-img">
                    <img src="/images/home_7/auth2.png" alt="" />
                  </div>
                  <div className="auth-info">
                    <p>
                      <span className="auth-name">Jason Shames</span>UI
                      Designer, Spider Themes
                    </p>
                  </div>
                </div>
                <div className="author-text">
                  <p>
                    "Very well thought out and articulate communication. No
                    shortcuts. The best part...always solving problems with
                    great original ideas!."
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
