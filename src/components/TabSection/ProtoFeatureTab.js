"use client";
import feaImg from "@/assets/images/home_6/fea-img.jpg";
import feaImg2 from "@/assets/images/home_6/fea-img2.png";
import feaImg3 from "@/assets/images/home_6/fea-img3.png";
import feaShape1 from "@/assets/images/home_6/fea-shape1.svg";
import feaShape2 from "@/assets/images/home_6/fea-shape2.svg";
import useGsapReveal from "@/hooks/useGsapReveal";
import Image from "next/image";


const ProtoFeatureTab = () => {
  const headingRef = useGsapReveal({ animation: 'fadeInUp' });
  const paragraphRef = useGsapReveal({ animation: 'fadeInUp', delay: 0.2 });

  return (
    <section className="features-area-13 pt-135 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title-center">
              <h2 ref={headingRef}>Kick-start your next web project</h2>
              <p ref={paragraphRef}>
                Pick a template and customize it with our powerful editor by
                adding or removing pages, blocks, and elements.
              </p>
            </div>
          </div>
        </div>

        <div className="row gy-4 gy-lg-0">
          <div className="col-lg-5">
            <div
              className="features-list nav-tabs nav automated-tab2"
              role="tablist"
            >
              <a
                href="/"
                className="nav-link active"
                aria-selected="true"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#proto-track-one"
                data-wow-delay="0.1s"
              >
                <span className="circle"></span> Ideations
              </a>
              <a
                href="/"
                className="nav-link"
                aria-selected="false"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#proto-track-two"
                data-wow-delay="0.3s"
              >
                <span className="circle"></span> Import & Export
              </a>
              <a
                href="/"
                className="nav-link"
                aria-selected="false"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#proto-track-three"
                data-wow-delay="0.5s"
              >
                <span className="circle"></span> Visualize fast
              </a>
              <a
                href="/"
                className="nav-link"
                aria-selected="false"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#proto-track-four"
                data-wow-delay="0.5s"
              >
                <span className="circle"></span> User Testing
              </a>
            </div>
          </div>
          <div className="col-lg-7 ps-lg-0">
            <div className="features-right tab-content ml-90">
              <div
                className="tab-pane fade show active"
                id="proto-track-one"
                role="tabpanel"
              >
                <div className="main-img" data-wow-delay="0.1s">
                  <Image src={feaImg} className="fea-img"
                    
                    alt="Ideations" />
                  <div className="features-shapes">
                    <div className="shape">
                      <Image src={feaShape1} alt="Shape1" />
                    </div>
                    <div className="shape">
                      <Image src={feaShape2} alt="Shape2" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="proto-track-two"
                role="tabpanel"
              >
                <div className="main-img" data-wow-delay="0.1s">
                  <Image src={feaImg2} className="fea-img"
                    
                    alt="Import & Export" />
                  <div className="features-shapes">
                    <div className="shape">
                      <Image src={feaShape1} alt="Shape1" />
                    </div>
                    <div className="shape">
                      <Image src={feaShape2} alt="Shape2" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="proto-track-three"
                role="tabpanel"
              >
                <div className="main-img" data-wow-delay="0.1s">
                  <Image src={feaImg3} className="fea-img"
                    
                    alt="Visualize fast" />
                  <div className="features-shapes">
                    <div className="shape">
                      <Image src={feaShape1} alt="Shape1" />
                    </div>
                    <div className="shape">
                      <Image src={feaShape2} alt="Shape2" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="proto-track-four"
                role="tabpanel"
              >
                <div className="main-img" data-wow-delay="0.1s">
                  <Image src={feaImg2} className="fea-img"
                    
                    alt="User Testing" />
                  <div className="features-shapes">
                    <div className="shape">
                      <Image src={feaShape1} alt="Shape1" />
                    </div>
                    <div className="shape">
                      <Image src={feaShape2} alt="Shape2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtoFeatureTab;
