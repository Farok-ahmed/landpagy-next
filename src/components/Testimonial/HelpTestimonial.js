import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function HelpTestimonial() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation],
    breakpoints: {
      768: {},
    },
  };
  return (
    <section className="testimonial-area-four bg-white-800 section-padding-xl">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="mt-n4">What's Our Client Say About Us</h2>
              <p>Nemo enim ipsam voluptatem quia voluptas sit</p>
            </div>
          </div>
        </div>

        <div id="testimonial-3">
          <Swiper {...swiperOptions}>
            <SwiperSlide className=" testimonial-wrapper-four">
              <div className="testimonial-item">
                <div className="testimonial-image">
                  <img
                    src="/images/testimonial/testimonial-image.png"
                    alt="Testimonial "
                  />
                </div>
                <div className="testimonial-right-content">
                  <h3>Making Dreams a reality!</h3>
                  <div className="testimonial-meta-info">
                    <div className="testimonial-author-name">
                      <h4>Maxwell Wood</h4>
                      <span>Development</span>
                    </div>
                    <div className="testimonial-author-review">
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
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      We were looking for a home of happiness and peace. Thanks
                      to the Grihashakti team, who helped us to realise this
                      dream of ours. Our home has been
                    </p>
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" testimonial-wrapper-four">
              <div className="testimonial-item">
                <div className="testimonial-image">
                  <img
                    src="/images/testimonial/testimonial-image.png"
                    alt="Testimonial "
                  />
                </div>
                <div className="testimonial-right-content">
                  <h3>Making Dreams a reality!</h3>
                  <div className="testimonial-meta-info">
                    <div className="testimonial-author-name">
                      <h4>Maxwell Wood</h4>
                      <span>Development</span>
                    </div>
                    <div className="testimonial-author-review">
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
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      We were looking for a home of happiness and peace. Thanks
                      to the Grihashakti team, who helped us to realise this
                      dream of ours. Our home has been
                    </p>
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="testimonial-wrapper-four">
              <div className="testimonial-item">
                <div className="testimonial-image">
                  <img
                    src="/images/testimonial/testimonial-image.png"
                    alt="Testimonial "
                  />
                </div>
                <div className="testimonial-right-content">
                  <h3>Making Dreams a reality!</h3>
                  <div className="testimonial-meta-info">
                    <div className="testimonial-author-name">
                      <h4>Maxwell Wood</h4>
                      <span>Development</span>
                    </div>
                    <div className="testimonial-author-review">
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
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      We were looking for a home of happiness and peace. Thanks
                      to the Grihashakti team, who helped us to realise this
                      dream of ours. Our home has been
                    </p>
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-button-next d-none d-md-block"></div>
            <div className="swiper-button-prev d-none d-md-block"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
