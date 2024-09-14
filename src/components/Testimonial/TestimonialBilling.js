import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function TestimonialBilling() {
  const swiperOptions = {
    loop: true,
    modules: [Pagination, Autoplay],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.2,
      },
      1024: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 1.9,
      },
    },
  };
  return (
    <section className="billing-testimonial-area bg-gray pt-120 pb-120">
      <div className="container custom-contaienr">
        <div className="row">
          <div className="col-lg-12">
            <h2
              className="testimonial-title wow fadeInDown text-center mb-60"
              data-wow-delay="0.2s"
            >
              Satisfied Users
            </h2>
          </div>
        </div>

        <div id="billing-testimonial">
          <div className="position-relative">
            <Swiper {...swiperOptions} className="pb-80">
              <SwiperSlide>
                <div className="testimonial-content">
                  <div className="testimonial-img">
                    <img src="/images/home_8/testimonial-img1.png" alt="" />
                  </div>
                  <div className="testimonial-text">
                    <p className="author-text">
                      “Having a billing system that lets you stay nimble to
                      respond to customers' needs is really critical. Stripe
                      gives you that flexibility. It's something we wish we had
                      years before.”
                    </p>
                    <p className="author-name">Jaylon Levin</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-content">
                  <div className="testimonial-img">
                    <img src="/images/home_8/testimonial-img2.png" alt="" />
                  </div>
                  <div className="testimonial-text">
                    <p className="author-text">
                      “Having a billing system that lets you stay nimble to
                      respond to customers' needs is really critical. Stripe
                      gives you that flexibility. It's something we wish we had
                      years before.”
                    </p>
                    <p className="author-name">Juhan Ahamed</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-content">
                  <div className="testimonial-img">
                    <img src="/images/home_8/testimonial-img1.png" alt="" />
                  </div>
                  <div className="testimonial-text">
                    <p className="author-text">
                      “Having a billing system that lets you stay nimble to
                      respond to customers' needs is really critical. Stripe
                      gives you that flexibility. It's something we wish we had
                      years before.”
                    </p>
                    <p className="author-name">Jaylon Levin</p>
                  </div>
                </div>
              </SwiperSlide>
              <div className="three swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
