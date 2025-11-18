"use client";
import feturesImg from "@/assets/images/home_10/fetures-img.png";
import icon1 from "@/assets/images/home_10/icons/icon1.svg";
import icon2 from "@/assets/images/home_10/icons/icon2.svg";
import icon3 from "@/assets/images/home_10/icons/icon3.svg";
import border from "@/assets/images/home_10/shapes/border.svg";
import shape3 from "@/assets/images/home_10/shapes/shape3.svg";
import shape4 from "@/assets/images/home_10/shapes/shape4.svg";
import useGsapReveal from "@/hooks/useGsapReveal";
import Image from "next/image";
;

export default function AppFeature() {
  const imagesRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0.2 });
  const contentRef = useGsapReveal({ animation: 'fadeInRight', delay: 0.2 });

  return (
    <section className="overflow-hidden app-features-area pt-135 pb-190">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-4">
            <div
              ref={imagesRef}
             className="app-features-images"
            >
              <div className="bg-shapes">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape">
                  <Image src={shape3} alt="Shape" />
                </div>
                <div className="shape">
                  <Image src={shape4} alt="Shape" />
                </div>
              </div>
              <Image src={feturesImg} alt="Feature " />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-8">
            <div
              ref={contentRef}
             className="app-feature-content"
            >
              <h2 className="feature-title cloud-heading-2 mb-65">
                Some of the best
                <span>
                  Features
                  <Image src={border} className="border-shape"
                    
                    alt="Border" />
                </span>
              </h2>

              <div className="features-items">
                <div className="item">
                  <div className="item-icon">
                    <div className="icon">
                      <Image src={icon1} alt="Icon" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Awesome Design</h3>
                    <p className="item-text">
                      We specialize in handcrafting beautiful UI & UX designs.
                      Awesome is a product design.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="item-icon">
                    <div className="icon">
                      <Image src={icon2} alt="Icon" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Easy Customize</h3>
                    <p className="item-text">
                      Mobile WMS is easy to customize. Add a Filter Field. Add a
                      Collector Step. Add a new page. Change.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="item-icon">
                    <div className="icon">
                      <Image src={icon3} alt="Icon" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Extreme Security</h3>
                    <p className="item-text">
                      The ultimate Mobile security app, online backup, privacy
                      protection,Browser Protection and more!
                    </p>
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
