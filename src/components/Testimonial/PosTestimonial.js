"use client";

import author1 from "@/assets/images/home_5/author1.png";
import author2 from "@/assets/images/home_5/author2.png";
import author3 from "@/assets/images/home_5/author3.png";
import quoteIcon from "@/assets/images/home_5/icons/quote-icon.svg";
import useGsapReveal from "@/hooks/useGsapReveal";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PosTestimonial() {
  const headingRef = useGsapReveal({ animation: 'fadeInUp' });
  const swiperOptions = {
    loop: true,
    modules: [Pagination, Autoplay],
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: -150,
      },
      1200: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: -68,
      },
    },
  };
  return (
    <section className="testimonial-area-nine bg-aqua pt-135 pb-150">
      <div className="blur-shape"></div>
      <div className="container custom-container">
        <div className="row">
          <div className="section-title-center">
            <h2 ref={headingRef}>Trusted by over 30,000+ merchants</h2>
          </div>
        </div>

        <div className="testimonial-slider-nine ">
          <Swiper {...swiperOptions} className="overflow-visible pb-50">
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-wrapp">
                <Image src={quoteIcon} alt="Icon"
                  className="testimonial-icon mx-auto mb-20" />
                <p className="author-text">
                  “Landpagy takes the hassle out of paying, and instead makes it
                  part of a tailored experience, which is essential when
                  clients.”
                </p>
                <div className="author-info">
                  <div>
                    <Image src={author3} alt="Man"
                      className="author-img" />
                  </div>
                  <p className="author-name">
                    EH Jewel <span>UI/UX Designer</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-wrapp">
                <Image src={quoteIcon} alt="Icon"
                  className="testimonial-icon mx-auto mb-20" />
                <p className="author-text">
                  “Landpagy takes the hassle out of paying, and instead makes it
                  part of a tailored experience, which is essential when
                  clients.”
                </p>
                <div className="author-info">
                  <div>
                    <Image src={author2} alt="Man"
                      className="author-img" />
                  </div>
                  <p className="author-name">
                    Juhan Ahamed <span>Frontend Dev</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-wrapp">
                <Image src={quoteIcon} alt="Icon"
                  className="testimonial-icon mx-auto mb-20" />
                <p className="author-text">
                  “Landpagy takes the hassle out of paying, and instead makes it
                  part of a tailored experience, which is essential when
                  clients.”
                </p>
                <div className="author-info">
                  <div>
                    <Image src={author2} alt="Man"
                      className="author-img" />
                  </div>
                  <p className="author-name">
                    Juhan Ahamed <span>Frontend Dev</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-wrapp">
                <Image src={quoteIcon} alt="Icon"
                  className="testimonial-icon mx-auto mb-20" />
                <p className="author-text">
                  “Landpagy takes the hassle out of paying, and instead makes it
                  part of a tailored experience, which is essential when
                  clients.”
                </p>
                <div className="author-info">
                  <div>
                    <Image src={author1} alt="Man"
                      className="author-img" />
                  </div>
                  <p className="author-name">
                    EH Jewel <span>UI/UX Designer</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
