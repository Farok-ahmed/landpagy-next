import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import GLightbox from "glightbox";

export default function AboutVideo() {
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
          <div className="row-item wow fadeInUp">
            <Slider {...settings} className="user-slider">
              <div>
                <div className="single-user-slide-widget">
                  <div className="widget-top">
                    <img
                      className="user-img"
                      src="/images/home_2/user-slide.png"
                      alt=""
                    />
                    <Link
                      className="play-btn"
                      to="https://www.youtube.com/watch?v=xcJtL7QggTI"
                    >
                      {" "}
                      <i className="fas fa-play"></i>
                    </Link>
                    <div className="smile-icon">
                      <img src="/images/home_2/smile.png" alt="" />
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
                    <img
                      className="user-img"
                      src="/images/home_2/user-slide.png"
                      alt=""
                    />
                    <Link
                      className="play-btn"
                      to="https://www.youtube.com/watch?v=xcJtL7QggTI"
                    >
                      {" "}
                      <i className="fas fa-play"></i>
                    </Link>
                    <div className="smile-icon">
                      <img src="/images/home_2/smile.png" alt="" />
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
                    <img
                      className="user-img"
                      src="/images/home_2/user-slide.png"
                      alt=""
                    />
                    <Link
                      className="play-btn"
                      to="https://www.youtube.com/watch?v=xcJtL7QggTI"
                    >
                      {" "}
                      <i className="fas fa-play"></i>
                    </Link>
                    <div className="smile-icon">
                      <img src="/images/home_2/smile.png" alt="" />
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
          <div className="row-item wow fadeInUp">
            <h3>Trusted by more than 8,000 business in 140 countries.</h3>
            <Link className="btn" to="/testimonials">
              Meet our coustomers
            </Link>
            <div className="row justify-content-center mt-lg-80 mt-60">
              <div className="col-md-4">
                <div
                  className="client-image wow fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <img src="/images/brand/brand-1.svg" alt="Brand " />
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="client-image wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <img src="/images/brand/brand-2.svg" alt="Brand " />
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="client-image wow fadeInRight"
                  data-wow-delay="0.5s"
                >
                  <img src="/images/brand/brand-3.svg" alt="Brand " />
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="client-image wow fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <img src="/images/brand/brand-4.svg" alt="Brand " />
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="client-image wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <img src="/images/brand/brand-5.svg" alt="Brand " />
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="client-image wow fadeInRight"
                  data-wow-delay="0.5s"
                >
                  <img src="/images/brand/brand-1.svg" alt="Brand " />
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
