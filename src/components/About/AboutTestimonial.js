import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";

export default function AboutTestimonial() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      768: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    },
  };
  return (
    <section className="testimonial-area testimonial-area-two testimonial-area-three section-padding">
      <div className="container">
        <div>
          <Swiper {...swiperOptions}>
            <SwiperSlide>
              <div className="testimonial-review">
                <i className="fas fa-quote-left"></i>
                <p>
                  Continually harness functional e-business without global core
                  competencies. Interactively pontificate client-focused
                  web-readiness via quality scenarios. Professionally pursue
                  collaborative {""}
                  <span>ideas rather than prospective imperatives.</span>
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-author-image">
                    <img
                      src="/images/testimonial/testimonial-1.jpg"
                      alt="Testimonial"
                    />
                  </div>
                  <div className="testimonial-author-name">
                    <h4>Jesus Requena</h4>
                    <span>Support Engineer, Aliexpress</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-review">
                <i className="fas fa-quote-left"></i>
                <p>
                  Continually harness functional e-business without global core
                  competencies. Interactively pontificate client-focused
                  web-readiness via quality scenarios. Professionally pursue
                  collaborative {""}
                  <span> ideas rather than prospective imperatives.</span>
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-author-image">
                    <img
                      src="/images/testimonial/testimonial-1.jpg"
                      alt="Testimonial"
                    />
                  </div>
                  <div className="testimonial-author-name">
                    <h4>Jesus Requena</h4>
                    <span>Support Engineer, Aliexpress</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-review">
                <i className="fas fa-quote-left"></i>
                <p>
                  Continually harness functional e-business without global core
                  competencies. Interactively pontificate client-focused
                  web-readiness via quality scenarios. Professionally pursue
                  collaborative {""}
                  <span>ideas rather than prospective imperatives.</span>
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-author-image">
                    <img
                      src="/images/testimonial/testimonial-1.jpg"
                      alt="Testimonial"
                    />
                  </div>
                  <div className="testimonial-author-name">
                    <h4>Jesus Requena</h4>
                    <span>Support Engineer, Aliexpress</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
