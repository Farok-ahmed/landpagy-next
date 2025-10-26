"use client";
import Image from "next/image";
import statistic1 from "@/assets/images/about_2/statistic1.png";
import statistic4 from "@/assets/images/about_2/statistic4.png";
;
import CountUp from "react-countup";
import Slider from "react-slick";
export default function StatisticsGrid() {
  const slickOptions = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section className="statistics-area pt-140 pb-140">
      <div className="container">
        <div className="row gx-2 gy-2 gy-lg-0">
          <div className="col-lg-7">
            <div className="statistics-widget-2 wow fadeInUp">
              <div className="row gx-0">
                <div className="col-7">
                  <Slider {...slickOptions} className="statistics-slider h-100">
                    <div className="widget-content widget-1">
                      <h1 className="counter">
                        <CountUp
                          start={0}
                          end={15000}
                          delay={1}
                          duration={2.5}
                        />
                      </h1>
                      <p>We employ 15,000 people around the world</p>
                    </div>
                    <div className="widget-content widget-1">
                      <h1 className="counter">
                        <CountUp
                          start={0}
                          end={10000}
                          delay={1}
                          duration={2.5}
                        />
                      </h1>
                      <p>We employ 15,000 people around the world</p>
                    </div>
                    <div className="widget-content widget-1">
                      <h1 className="counter">
                        <CountUp
                          start={0}
                          end={25000}
                          delay={1}
                          duration={2.5}
                        />
                      </h1>
                      <p>We employ 15,000 people around the world</p>
                    </div>
                  </Slider>
                </div>
                <div className="col-5">
                  <Image src={statistic1} className="img-fluid"
                    
                    alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="statistics-widget-2 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="widget-content widget-2">
                <h1 className="counter">
                  <CountUp start={0} end={125} delay={1} duration={2.5} />
                </h1>
                <p>Our colleagues come from 125 different countries</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-2 gy-2 gy-lg-0 pt-10 pb-10">
          <div className="col-lg-7">
            <div className="row gx-2 gy-2 gy-lg-0">
              <div className="col-lg-4 col-md-6">
                <div
                  className="statistics-widget-2 wow fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <div className="widget-content widget-3">
                    <h1 className="counter">
                      <CountUp start={0} end={75} delay={1} duration={2.5} />
                    </h1>
                    <p>More than 75 years in business</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="statistics-widget-2 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <div className="widget-content widget-4">
                    <h1 className="counter">
                      <CountUp start={0} end={450} delay={1} duration={2.5} />
                    </h1>
                    <p>450 branches worldwide</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="statistics-widget-2 wow fadeInRight"
                  data-wow-delay="0.5s"
                >
                  <div className="widget-content widget-5">
                    <h1 className="counter">
                      <CountUp start={0} end={25} delay={1} duration={2.5} />
                    </h1>
                    <p>We are present in 25 markets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="statistics-widget-2 wow fadeInRight"
              data-wow-delay="0.7s"
            >
              <div
                className="widget-content widget-6"
                style={{ background: "url(/images/about_2/statistic2.png)" }}
              >
                <h2>Best Software Solutions Agency</h2>
                <p>Global Finance 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-2 gy-2 gy-md-0">
          <div className="col-md-5">
            <div
              className="statistics-widget-2 wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <div
                className="widget-content widget-7"
                style={{ background: "url(/images/about_2/statistic3.png)" }}
              >
                <h1 className="counter">
                  <CountUp start={0} end={35} delay={1} duration={2.5} />
                </h1>
                <p>
                  Among the top 35 largest companies listed on the United States
                  Stock Exchange
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div
              className="statistics-widget-2 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div className="row gx-0">
                <div className="col-5">
                  <Image src={statistic4} className="img-fluid"
                    
                    alt="img" />
                </div>
                <div className="col-7">
                  <div className="widget-content widget-8">
                    <h1 className="counter">
                      <CountUp start={0} end={2} delay={1} duration={2.5} />
                    </h1>
                    <p>We’re listed on two of Asia’s largest stock exchanges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
