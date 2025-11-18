"use client";
import useGsapReveal from "@/hooks/useGsapReveal";
;

export default function FaqOne() {
  const sectionRef = useGsapReveal({ animation: 'fadeInUp', duration: 0.8 });

  return (
    <section ref={sectionRef} className="faq-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="font-bold mt-n3 mt-md-n4">
                Frequently asked questions
              </h2>
              <p>
                Aenean amet netus aliquam elit eu, sagittis id natoque id. Purus
                augue fermentum dui aliquam dui vel.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="accordion" id="projectAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="project-headingOne">
                  <button
                   className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#project-collapseOne"
                    aria-expanded="false"
                    aria-controls="project-collapseOne"
                  >
                    <span>Q1.</span> How can i use Landpagy?
                  </button>
                </h2>
                <div
                  id="project-collapseOne"
                 className="accordion-collapse collapse"
                  aria-labelledby="project-headingOne"
                  data-bs-parent="#projectAccordion"
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
                <h2 className="accordion-header" id="project-headingTwo">
                  <button
                   className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#project-collapseTwo"
                    aria-expanded="false"
                    aria-controls="project-collapseTwo"
                  >
                    <span>Q2.</span> When should I use a Tag?
                  </button>
                </h2>
                <div
                  id="project-collapseTwo"
                 className="accordion-collapse collapse"
                  aria-labelledby="project-headingTwo"
                  data-bs-parent="#projectAccordion"
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
                <h2 className="accordion-header" id="project-headingThree">
                  <button
                   className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#project-collapseThree"
                    aria-expanded="false"
                    aria-controls="project-collapseThree"
                  >
                    <span>Q3.</span> How can I make all this less work?
                  </button>
                </h2>
                <div
                  id="project-collapseThree"
                 className="accordion-collapse collapse"
                  aria-labelledby="project-headingThree"
                  data-bs-parent="#projectAccordion"
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
                <h2 className="accordion-header" id="project-headingFour">
                  <button
                   className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#project-collapseFour"
                    aria-expanded="false"
                    aria-controls="project-collapseFour"
                  >
                    <span>Q3.</span> What’s up, Docs?
                  </button>
                </h2>
                <div
                  id="project-collapseFour"
                 className="accordion-collapse collapse"
                  aria-labelledby="project-collapseFour"
                  data-bs-parent="#projectAccordion"
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
                <h2 className="accordion-header" id="project-headingFive">
                  <button
                   className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#project-collapseFive"
                    aria-expanded="false"
                    aria-controls="project-collapseFive"
                  >
                    <span>Q3.</span> What’s up, Docs?
                  </button>
                </h2>
                <div
                  id="project-collapseFive"
                 className="accordion-collapse collapse"
                  aria-labelledby="project-collapseFive"
                  data-bs-parent="#projectAccordion"
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
