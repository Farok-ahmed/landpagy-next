"use client";

import testimonialImg1 from "@/assets/images/home_8/testimonial-img1.png";
import testimonialImg2 from "@/assets/images/home_8/testimonial-img2.png";
import useGsapReveal from "@/hooks/useGsapReveal";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialBilling() {
  const titleRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.2 });
  const swiperOptions = {
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
              ref={titleRef}
              className="testimonial-title text-center mb-60"
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
                    <Image src={testimonialImg1} alt="" />
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
                    <Image src={testimonialImg2} alt="" />
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
                    <Image src={testimonialImg1} alt="" />
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
