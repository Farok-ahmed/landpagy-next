"use client";
import Image from "next/image";
import bannerShape2 from "@/assets/images/shape/banner-shape2.svg";
import bannerShape3 from "@/assets/images/shape/banner-shape3.svg";
import bannerShape4 from "@/assets/images/shape/banner-shape4.svg";
import bannerShape5 from "@/assets/images/shape/banner-shape5.svg";
import bannerShape6 from "@/assets/images/shape/banner-shape6.svg";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function HeroBannerOne() {
  const shape1Ref = useGsapReveal({ animation: 'fadeInDownBig', delay: 0 });
  const shape2Ref = useGsapReveal({ animation: 'fadeInDown', delay: 0 });
  const shape3Ref = useGsapReveal({ animation: 'fadeInDownBig', delay: 0 });
  const shape4Ref = useGsapReveal({ animation: 'fadeInLeft', delay: 0 });
  const shape5Ref = useGsapReveal({ animation: 'fadeInRightBig', delay: 0 });
  const shape6Ref = useGsapReveal({ animation: 'fadeInDown', delay: 0 });
  const shape7Ref = useGsapReveal({ animation: 'fadeInRightBig', delay: 0 });

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
              <span ref={shape1Ref} className="banner-shapes"></span>
              <Image src={bannerShape2} ref={shape2Ref} className="banner-shapes2"
                
                alt="Shape " />
              <Image src={bannerShape3} ref={shape3Ref} className="banner-shapes3"
                
                alt="Shape " />
              <Image src={bannerShape4} ref={shape4Ref} className="banner-shapes4"
                
                alt="Shape " />
              <Image src={bannerShape5} ref={shape5Ref} className="banner-shapes5"
                
                alt="Shape " />
              <Image src={bannerShape2} ref={shape6Ref} className="banner-shapes6"
                
                alt="Shape " />
              <Image src={bannerShape6} ref={shape7Ref} className="banner-shapes7"
                
                alt="Shape " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
