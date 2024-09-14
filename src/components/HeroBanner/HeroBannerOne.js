import React from "react";

export default function HeroBannerOne() {
  return (
    <section className="banner-area">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row align-items-center">
          <div className="col-md-6">
            <div className="banner-left">
              <h1>
                Colaboration Without {""}
                <span>
                  Hassle
                  <svg
                    width="225"
                    height="16"
                    viewBox="0 0 225 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M224.931 15.1987C151.063 1.40293 47.4825 6.23252 4.92601 10.3718L0.241161 6.21004C91.4615 -6.66766 188.043 6.83677 224.931 15.1987Z"
                      fill="#EC595A"
                    />
                  </svg>
                </span>
              </h1>
              <p className="banner-para">
                Diam et dolor interdum interdum faucibus et auctor. A lectus
                tincidunt non molestie rhoncus at. Sed aliquam a neque.
              </p>
              <form className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email to book demo"
                />
                <button type="submit" className="btn btn-red">
                  Book A Demo
                </button>
              </form>
              <span className="sub-content">
                Free 14 days trial. <strong>No credit</strong> card required
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-right">
              <span className="banner-shapes wow fadeInDownBig"></span>
              <img
                className="banner-shapes2 wow fadeInDown"
                src="/images/shape/banner-shape2.svg"
                alt="Shape "
              />
              <img
                className="banner-shapes3 wow fadeInDownBig"
                data-wow-duration="1.2s"
                src="/images/shape/banner-shape3.svg"
                alt="Shape "
              />
              <img
                className="banner-shapes4 wow fadeInLeft"
                src="/images/shape/banner-shape4.svg"
                alt="Shape "
              />
              <img
                className="banner-shapes5 wow fadeInRightBig"
                src="/images/shape/banner-shape5.svg"
                alt="Shape "
              />
              <img
                className="banner-shapes6 wow fadeInDown"
                src="/images/shape/banner-shape2.svg"
                alt="Shape "
              />
              <img
                className="banner-shapes7 wow fadeInRightBig"
                src="/images/shape/banner-shape6.svg"
                alt="Shape "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
