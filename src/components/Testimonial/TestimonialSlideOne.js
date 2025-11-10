"use client";

import testimonial1 from "@/assets/images/testimonial/testimonial-1.jpg";
import useGsapReveal from "@/hooks/useGsapReveal";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialSlideOne() {
  const sectionRef = useGsapReveal({ animation: 'fadeInUp', duration: 0.8 });

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <section ref={sectionRef} className="testimonial-area testimonial-area-two bg-white-800">
      <div id="testimonial-2" className="swiper-container">
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
                  <Image src={testimonial1} alt="Testimonial" />
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
                  <Image src={testimonial1} alt="Testimonial" />
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
                  <Image src={testimonial1} alt="Testimonial" />
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
    </section>
  );
}
