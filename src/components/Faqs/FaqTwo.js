import Image from "next/image";
import bannerShape4 from "@/assets/images/home_2/banner-shape-4.svg";
import bannerShape5 from "@/assets/images/home_2/banner-shape-5.svg";
;

export default function FaqTwo() {
  return (
    <section className="faq-area-two">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={bannerShape4} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={bannerShape5} alt="Shape" />
        </div>
      </div>

      <div className="container">
        <div className="section-title-center">
          <h2 className="wow fadeInUp">Frequently Asked Questions</h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Our mission is to deliver reliable, latest news and opinions.
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="accordion-two" id="softwareAccordion">
              <div
                className="accordion-item wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <h2 className="accordion-header" id="software-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#software-collapseOne"
                    aria-expanded="false"
                    aria-controls="software-collapseOne"
                  >
                    <span>Q1.</span> How can i use Landpagy?
                  </button>
                </h2>
                <div
                  id="software-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="software-headingOne"
                  data-bs-parent="#softwareAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Follow these 6 steps and you’ll get your Help Scout
                      account up and running in no time. If you'd like to get a
                      full tour of Help Scout and all its features, attend one
                      of our weekly live demos or take a video tour.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <h2 className="accordion-header" id="software-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#software-collapseTwo"
                    aria-expanded="false"
                    aria-controls="software-collapseTwo"
                  >
                    <span>Q2.</span> When should I use a Tag?
                  </button>
                </h2>
                <div
                  id="software-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="software-headingTwo"
                  data-bs-parent="#softwareAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Follow these 6 steps and you’ll get your Help Scout
                      account up and running in no time. If you'd like to get a
                      full tour of Help Scout and all its features, attend one
                      of our weekly live demos or take a video tour.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <h2 className="accordion-header" id="software-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#software-collapseThree"
                    aria-expanded="false"
                    aria-controls="software-collapseThree"
                  >
                    <span>Q3.</span> How can I make all this less work?
                  </button>
                </h2>
                <div
                  id="software-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="software-headingThree"
                  data-bs-parent="#softwareAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Follow these 6 steps and you’ll get your Help Scout
                      account up and running in no time. If you'd like to get a
                      full tour of Help Scout and all its features, attend one
                      of our weekly live demos or take a video tour.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <h2 className="accordion-header" id="software-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#software-collapseFour"
                    aria-expanded="false"
                    aria-controls="software-collapseFour"
                  >
                    <span>Q3.</span> What’s up, Docs?
                  </button>
                </h2>
                <div
                  id="software-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="software-collapseFour"
                  data-bs-parent="#softwareAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Follow these 6 steps and you’ll get your Help Scout
                      account up and running in no time. If you'd like to get a
                      full tour of Help Scout and all its features, attend one
                      of our weekly live demos or take a video tour.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <h2 className="accordion-header" id="software-headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#software-collapseFive"
                    aria-expanded="false"
                    aria-controls="software-collapseFive"
                  >
                    <span>Q3.</span> What’s up, Docs?
                  </button>
                </h2>
                <div
                  id="software-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="software-collapseFive"
                  data-bs-parent="#softwareAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Follow these 6 steps and you’ll get your Help Scout
                      account up and running in no time. If you'd like to get a
                      full tour of Help Scout and all its features, attend one
                      of our weekly live demos or take a video tour.
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
