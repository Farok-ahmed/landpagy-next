"use client";


import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function FaqProto() {
  const _faqRef1 = useGsapReveal({ animation: "fadeInUp" });
  const _faqRef2 = useGsapReveal({ animation: "fadeInUp", delay: 0.1 });
  return (
    <section className="faq-area-four faq-proto pt-135 pb-150">
      <div className="container">
        <div className="section-title-center">
          <h2 className="">Frequently Asked Questions</h2>
          <p className="">
            Aliquam interdum risus vitae lectus convallis sodales quis dignissim
            mi. Proin sem risus, aliquet in pretium eu, ultrices eu nibh.
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="accordion" id="accordionFlushExample">
              <div
               className="accordion-item"
              >
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                   className="accordion-button collapsed"type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What is a clickable UX prototype?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                 className="accordion-collapse collapse"aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      A prototype is an early sample, model, or release of a
                      product built to test a concept or process. It is a term
                      used in a variety of contexts.
                    </p>
                  </div>
                </div>
              </div>
              <div
               className="accordion-item"
              >
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                   className="accordion-button collapsed"type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    What is a UX user test?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                 className="accordion-collapse collapse"aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      A prototype is an early sample, model, or release of a
                      product built to test a concept or process. It is a term
                      used in a variety of contexts.
                    </p>
                  </div>
                </div>
              </div>
              <div
               className="accordion-item"
              >
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                   className="accordion-button collapsed"type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How to develop an app?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                 className="accordion-collapse collapse"aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      A prototype is an early sample, model, or release of a
                      product built to test a concept or process. It is a term
                      used in a variety of contexts.
                    </p>
                  </div>
                </div>
              </div>
              <div
               className="accordion-item"
              >
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                   className="accordion-button collapsed"type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Does landpagy have app integration?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                 className="accordion-collapse collapse"aria-labelledby="flush-collapseFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      A prototype is an early sample, model, or release of a
                      product built to test a concept or process. It is a term
                      used in a variety of contexts.
                    </p>
                  </div>
                </div>
              </div>
              <div
               className="accordion-item"
              >
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                   className="accordion-button collapsed"type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    What is the setup process like?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                 className="accordion-collapse collapse"aria-labelledby="flush-collapseFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      A prototype is an early sample, model, or release of a
                      product built to test a concept or process. It is a term
                      used in a variety of contexts.
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
