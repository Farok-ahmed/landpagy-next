import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

export default function AboutHistory() {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const calculatePillStyle = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.innerSlider.list.clientWidth;
      const slidesToShow = sliderRef.current.innerSlider.props.slidesToShow;
      const slideWidth = sliderWidth / slidesToShow;
      const newLeft = ((slideWidth * slideIndex) / sliderWidth) * 450;
      return {
        animation: `slideInfinite 5s linear infinite`,
        transform: `translateX(${newLeft}px)`,
      };
    }
    return {};
  };

  const slickOptions = {
    speed: 300,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current) => setSlideIndex(current),
  };
  useEffect(() => {
    // Update the pill style when slideIndex changes
  }, [slideIndex]);
  return (
    <section className="history-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-left">
              <h2>A History of Possibilities</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Slider
              ref={sliderRef}
              {...slickOptions}
              className="history-wrapper"
            >
              <div className="history-item">
                <div className="item-img">
                  <img src="/images/about_2/history1.png" alt="" />
                </div>
                <div className="item-content">
                  <h4 className="item-title">Birth of a Landpagy startup</h4>
                  <p className="item-para">
                    Lorem ipsum, or lipsum as it is sometimes is dummy text used
                    in laying out printed graphic or web designs.
                  </p>
                  <span className="date"> 2013 </span>
                </div>
              </div>
              <div className="history-item">
                <div className="item-img">
                  <img src="/images/about_2/history3.png" alt="" />
                </div>
                <div className="item-content">
                  <h4 className="item-title">Landpagy think about future</h4>
                  <p className="item-para">
                    Lorem ipsum, or lipsum as it is sometimes is dummy text used
                    in laying out printed graphic or web designs.
                  </p>
                  <span className="date"> 2016 </span>
                </div>
              </div>
              <div className="history-item">
                <div className="item-img">
                  <img src="/images/about_2/history2.png" alt="" />
                </div>
                <div className="item-content">
                  <h4 className="item-title">software solution company</h4>
                  <p className="item-para">
                    Lorem ipsum, or lipsum as it is sometimes is dummy text used
                    in laying out printed graphic or web designs.
                  </p>
                  <span className="date"> 2018 </span>
                </div>
              </div>
              <div className="history-item">
                <div className="item-img">
                  <img src="/images/about_2/history1.png" alt="" />
                </div>
                <div className="item-content">
                  <h4 className="item-title">Birth of a Landpagy startup</h4>
                  <p className="item-para">
                    Lorem ipsum, or lipsum as it is sometimes is dummy text used
                    in laying out printed graphic or web designs.
                  </p>
                  <span className="date"> 2019 </span>
                </div>
              </div>
              <div className="history-item">
                <div className="item-img">
                  <img src="/images/about_2/history3.png" alt="" />
                </div>
                <div className="item-content">
                  <h4 className="item-title">Landpagy think about future</h4>
                  <p className="item-para">
                    Lorem ipsum, or lipsum as it is sometimes is dummy text used
                    in laying out printed graphic or web designs.
                  </p>
                  <span className="date"> 2020 </span>
                </div>
              </div>
              <div className="history-item">
                <div className="item-img">
                  <img src="/images/about_2/history2.png" alt="" />
                </div>
                <div className="item-content">
                  <h4 className="item-title">software solution company</h4>
                  <p className="item-para">
                    Lorem ipsum, or lipsum as it is sometimes is dummy text used
                    in laying out printed graphic or web designs.
                  </p>
                  <span className="date"> 2021 </span>
                </div>
              </div>
              <div className="history-item">
                <div className="item-img">
                  <img src="/images/about_2/history1.png" alt="" />
                </div>
                <div className="item-content">
                  <h4 className="item-title">software solution company</h4>
                  <p className="item-para">
                    Lorem ipsum, or lipsum as it is sometimes is dummy text used
                    in laying out printed graphic or web designs.
                  </p>
                  <span className="date"> 2022 </span>
                </div>
              </div>
              <div className="history-item">
                <div className="item-img">
                  <img src="/images/about_2/history2.png" alt="" />
                </div>
                <div className="item-content">
                  <h4 className="item-title">software solution company</h4>
                  <p className="item-para">
                    Lorem ipsum, or lipsum as it is sometimes is dummy text used
                    in laying out printed graphic or web designs.
                  </p>
                  <span className="date"> 2023 </span>
                </div>
              </div>
              <div className="history-item">
                <div className="item-img">
                  <img src="/images/about_2/history1.png" alt="" />
                </div>
                <div className="item-content">
                  <h4 className="item-title">software solution company</h4>
                  <p className="item-para">
                    Lorem ipsum, or lipsum as it is sometimes is dummy text used
                    in laying out printed graphic or web designs.
                  </p>
                  <span className="date"> 2023 </span>
                </div>
              </div>
            </Slider>
            <div className="history-scrollbar">
              <div className="ui-handle" style={calculatePillStyle()}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
