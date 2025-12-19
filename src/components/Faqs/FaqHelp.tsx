"use client";
import { useGsapReveal } from "@/hooks/useGsapReveal";
;

export default function FaqHelp() {
  const sectionRef = useGsapReveal({ animation: 'fadeInUp', duration: 0.8 });

  return (
    <section ref={sectionRef} className="faq-area help-center-faq">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="mt-n4">Frequently asked questions</h2>
              <p>
                Aenean amet netus aliquam elit eu, sagittis id natoque id. Purus
                augue fermentum dui aliquam dui vel.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="accordion" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                   className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <span>Q1.</span> How can i use Landpagy?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                 className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                   className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <span>Q2.</span> When should I use a Tag?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                 className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                   className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <span>Q3.</span> How can I make all this less work?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                 className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                   className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    <span>Q3.</span> What’s up, Docs?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                 className="accordion-collapse collapse"
                  aria-labelledby="flush-collapseFour"
                  data-bs-parent="#accordionFlushExample"
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                   className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    <span>Q3.</span> What’s up, Docs?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                 className="accordion-collapse collapse"
                  aria-labelledby="flush-collapseFive"
                  data-bs-parent="#accordionFlushExample"
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
