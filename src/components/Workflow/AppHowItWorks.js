import React, { useState, useEffect } from "react";
const slides = [
  {
    id: 1,
    title: "1. Install the App",
    message:
      "Setup your account and tell us a bit about your employment and salary so we can tell you how much of your wage you can access today",
    imgSrc: "/images/home_10/works-img.png",
  },
  {
    id: 2,
    title: "2. Create account",
    message:
      "Setup your account and tell us a bit about your employment and salary so we can tell you how much of your wage you can access today",
    imgSrc: "/images/home_10/fetures-img.png",
  },
  {
    id: 3,
    title: "3. Enjoy the features!",
    message: (
      <>
        Setup your account and tell us a bit about your employment and salary so
        we can tell you how much of your wage you can access today
        <a className="btn-more" href="/">
          Learn more
          <img
            className="icon"
            src="/images/home_10/shapes/right.svg"
            alt="Arrow"
          />
        </a>
      </>
    ),
    imgSrc: "/images/home_10/works-img.png",
  },
];

export default function AppHowItWorks() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition < windowHeight) {
        setActiveSlide(1);
      } else if (scrollPosition < windowHeight * 2) {
        setActiveSlide(2);
      } else if (scrollPosition < windowHeight * 3) {
        setActiveSlide(3);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        id="how_it_works_desktop"
        className={`app-how-works-area vertical_slideshow_desktop box${activeSlide}`}
      >
        <div className="container box pt-140">
          <div className="row align-items-center">
            <div className="col-lg-4 offset-lg-1 col-md-7">
              <h2 className="section-title cloud-heading-2 mb-65">
                How
                <span>
                  it Works
                  <img
                    className="border-shape"
                    src="/images/home_10/shapes/border.svg"
                    alt="Border"
                  />
                </span>
              </h2>

              {slides.map((slide) => (
                <div
                  key={slide.id}
                  id={`slideshow${slide.id}`}
                  className={`app-how-item scroll_box ${
                    activeSlide === slide.id ? "" : "scroll_disable"
                  }`}
                  onClick={() => setActiveSlide(slide.id)}
                >
                  <p className="title">{slide.title}</p>
                  <p className="message">{slide.message}</p>
                </div>
              ))}
            </div>

            <div className="col-md-4 offset-lg-2">
              <div className="app-how-images">
                <div className="bg-shapes">
                  <div className="shape"></div>
                  <div className="shape"></div>
                  <div className="shape"></div>
                  <div className="shape">
                    <img src="/images/home_10/shapes/shape5.svg" alt="Shape" />
                  </div>
                  <div className="shape">
                    <img src="/images/home_10/shapes/shape6.svg" alt="Shape" />
                  </div>
                  <div className="shape">
                    <img src="/images/home_10/shapes/shape7.svg" alt="Shape" />
                  </div>
                </div>
                {slides.map((slide) => (
                  <img
                    key={slide.id}
                    id={`slideshow_img${slide.id}`}
                    className={activeSlide === slide.id ? "" : "scroll_disable"}
                    src={slide.imgSrc}
                    alt={`Slide ${slide.id}`}
                  />
                ))}
              </div>
            </div>

            <div className="col-md-1">
              <div className="pagination">
                {slides.map((slide) => (
                  <span
                    key={slide.id}
                    className={`pagination-bullet${slide.id} ${
                      activeSlide === slide.id ? "active" : ""
                    }`}
                    onClick={() => setActiveSlide(slide.id)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--==========<MOBILE>==========--> */}
      <section
        id="how_it_works_mobile"
        className="app-how-works-area pt-80 pb-80"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title cloud-heading-2 mb-45">
                How
                <span>
                  it Works
                  <img
                    className="border-shape"
                    src="/images/home_10/shapes/border.svg"
                    alt="Border"
                  />
                </span>
              </h2>

              <div className="app-how-item">
                <p className="title">1. Install the App</p>
                <p className="message">
                  Setup your account and tell us a bit about your employment and
                  salary so we can tell you how much of your wage you can access
                  today
                </p>
                <img
                  className="mb-40 mt-30"
                  src="/images/home_10/works-img.png"
                  alt=""
                />
              </div>
              <div className="app-how-item">
                <p className="title">2. Create account</p>
                <p className="message">
                  Setup your account and tell us a bit about your employment and
                  salary so we can tell you how much of your wage you can access
                  today
                </p>
                <img
                  className="mb-40 mt-30"
                  src="/images/home_10/fetures-img.png"
                  alt=""
                />
              </div>
              <div className="app-how-item">
                <p className="title">3. Enjoy the features!</p>
                <p className="message">
                  Setup your account and tell us a bit about your employment and
                  salary so we can tell you how much of your wage you can access
                  today
                  <a className="btn-more" href="/">
                    Learn more
                    <img
                      className="icon"
                      src="/images/home_10/shapes/right.svg"
                      alt="Arrow"
                    />
                  </a>
                </p>
                <img
                  className="mt-30"
                  src="/images/home_10/works-img.png"
                  alt="just"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
