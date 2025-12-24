"use client";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import Link from "next/link";

export default function FaqTab() {
  const titleRef = useGsapReveal({ animation: 'fadeInUp', delay: 0 });
  const descRef = useGsapReveal({ animation: 'fadeInUp', delay: 0.2 });

  return (
    <section className="faq-area-three pb-150" id="faq-area-three">
      <div className="container">
        <div className="section-title-center">
          <h2 ref={titleRef}>Frequently Asked Questions</h2>
          <p ref={descRef}>
            Aliquam interdum risus vitae lectus convallis sodales quis dignissim
            mi. Proin sem risus, aliquet in pretium eu, ultrices eu nibh.
          </p>
        </div>
        <div className="faq-tab-wrapper">
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#general"
                  >
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="tab" href="#payment">
                    Payment Gatway
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="tab" href="#feature">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="tab" href="#billing">
                    Billing Problem
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="tab" href="#account">
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="tab" href="#service">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="general"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-6 pr-lg-25">
                  <div className="accordion-three" id="paymentAccordion">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2 className="accordion-header" id="payment-headingOne">
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-collapseOne"
                          aria-expanded="false"
                          aria-controls="payment-collapseOne"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-collapseOne"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-headingOne"
                        data-bs-parent="#paymentAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2 className="accordion-header" id="payment-headingTwo">
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-collapseTwo"
                          aria-expanded="false"
                          aria-controls="payment-collapseTwo"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-collapseTwo"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-headingTwo"
                        data-bs-parent="#paymentAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-headingThree"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-collapseThree"
                          aria-expanded="false"
                          aria-controls="payment-collapseThree"
                        >
                          How can I make all this less work?
                        </button>
                      </h2>
                      <div
                        id="payment-collapseThree"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-headingThree"
                        data-bs-parent="#paymentAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2 className="accordion-header" id="payment-headingFour">
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-collapseFour"
                          aria-expanded="false"
                          aria-controls="payment-collapseFour"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-collapseFour"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-collapseFour"
                        data-bs-parent="#paymentAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-lg-25">
                  <div className="accordion-three" id="paymentAccordionTwo">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2 className="accordion-header" id="payment-headingFive">
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-collapseFive"
                          aria-expanded="false"
                          aria-controls="payment-collapseFive"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-collapseFive"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-collapseFive"
                        data-bs-parent="#paymentAccordionTwo"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2 className="accordion-header" id="payment-headingSix">
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-collapseSix"
                          aria-expanded="false"
                          aria-controls="payment-collapseSix"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-collapseSix"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-headingSix"
                        data-bs-parent="#paymentAccordionTwo"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-headingSeven"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-collapseSeven"
                          aria-expanded="false"
                          aria-controls="payment-collapseSeven"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-collapseSeven"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-headingSeven"
                        data-bs-parent="#paymentAccordionTwo"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-headingEight"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-collapseEight"
                          aria-expanded="false"
                          aria-controls="payment-collapseEight"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-collapseEight"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-headingEight"
                        data-bs-parent="#paymentAccordionTwo"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="payment" role="tabpanel">
              <div className="row">
                <div className="col-md-6 pr-lg-25">
                  <div className="accordion-three" id="paymentAccordionThree">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-two-headingOne"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-two-collapseOne"
                          aria-expanded="false"
                          aria-controls="payment-two-collapseOne"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-two-collapseOne"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-two-headingOne"
                        data-bs-parent="#paymentAccordionThree"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-two-headingTwo"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-two-collapseTwo"
                          aria-expanded="false"
                          aria-controls="payment-two-collapseTwo"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-two-collapseTwo"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-two-headingTwo"
                        data-bs-parent="#paymentAccordionThree"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-two-headingThree"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-two-collapseThree"
                          aria-expanded="false"
                          aria-controls="payment-two-collapseThree"
                        >
                          How can I make all this less work?
                        </button>
                      </h2>
                      <div
                        id="payment-two-collapseThree"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-two-headingThree"
                        data-bs-parent="#paymentAccordionThree"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-two-headingFour"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-two-collapseFour"
                          aria-expanded="false"
                          aria-controls="payment-two-collapseFour"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-two-collapseFour"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-two-collapseFour"
                        data-bs-parent="#paymentAccordionThree"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-lg-25">
                  <div className="accordion-three" id="paymentAccordionFour">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-two-headingFive"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-two-collapseFive"
                          aria-expanded="false"
                          aria-controls="payment-two-collapseFive"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-two-collapseFive"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-two-collapseFive"
                        data-bs-parent="#paymentAccordionFour"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-two-headingSix"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-two-collapseSix"
                          aria-expanded="false"
                          aria-controls="payment-two-collapseSix"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-two-collapseSix"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-two-headingSix"
                        data-bs-parent="#paymentAccordionFour"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-two-headingSeven"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-two-collapseSeven"
                          aria-expanded="false"
                          aria-controls="payment-two-collapseSeven"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-two-collapseSeven"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-two-headingSeven"
                        data-bs-parent="#paymentAccordionFour"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-two-headingEight"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-two-collapseEight"
                          aria-expanded="false"
                          aria-controls="payment-two-collapseEight"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-two-collapseEight"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-two-headingEight"
                        data-bs-parent="#paymentAccordionFour"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="feature" role="tabpanel">
              <div className="row">
                <div className="col-md-6 pr-lg-25">
                  <div className="accordion-three" id="paymentAccordionFive">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-three-headingOne"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-three-collapseOne"
                          aria-expanded="false"
                          aria-controls="payment-three-collapseOne"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-three-collapseOne"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-three-headingOne"
                        data-bs-parent="#paymentAccordionFive"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-three-headingTwo"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-three-collapseTwo"
                          aria-expanded="false"
                          aria-controls="payment-three-collapseTwo"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-three-collapseTwo"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-three-headingTwo"
                        data-bs-parent="#paymentAccordionFive"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-three-headingThree"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-three-collapseThree"
                          aria-expanded="false"
                          aria-controls="payment-three-collapseThree"
                        >
                          How can I make all this less work?
                        </button>
                      </h2>
                      <div
                        id="payment-three-collapseThree"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-three-headingThree"
                        data-bs-parent="#paymentAccordionFive"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-three-headingFour"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-three-collapseFour"
                          aria-expanded="false"
                          aria-controls="payment-three-collapseFour"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-three-collapseFour"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-three-collapseFour"
                        data-bs-parent="#paymentAccordionFive"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-lg-25">
                  <div className="accordion-three" id="paymentAccordionSix">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-three-headingFive"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-three-collapseFive"
                          aria-expanded="false"
                          aria-controls="payment-three-collapseFive"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-three-collapseFive"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-three-collapseFive"
                        data-bs-parent="#paymentAccordionSix"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-three-headingSix"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-three-collapseSix"
                          aria-expanded="false"
                          aria-controls="payment-three-collapseSix"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-three-collapseSix"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-three-headingSix"
                        data-bs-parent="#paymentAccordionSix"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-three-headingSeven"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-three-collapseSeven"
                          aria-expanded="false"
                          aria-controls="payment-three-collapseSeven"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-three-collapseSeven"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-three-headingSeven"
                        data-bs-parent="#paymentAccordionSix"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-three-headingEight"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-three-collapseEight"
                          aria-expanded="false"
                          aria-controls="payment-three-collapseEight"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-three-collapseEight"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-three-headingEight"
                        data-bs-parent="#paymentAccordionSix"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="billing" role="tabpanel">
              <div className="row">
                <div className="col-md-6 pr-lg-25">
                  <div className="accordion-three" id="paymentAccordionSeven">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-four-headingOne"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-four-collapseOne"
                          aria-expanded="false"
                          aria-controls="payment-four-collapseOne"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-four-collapseOne"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-four-headingOne"
                        data-bs-parent="#paymentAccordionSeven"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-four-headingTwo"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-four-collapseTwo"
                          aria-expanded="false"
                          aria-controls="payment-four-collapseTwo"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-four-collapseTwo"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-four-headingTwo"
                        data-bs-parent="#paymentAccordionSeven"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-four-headingThree"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-four-collapseThree"
                          aria-expanded="false"
                          aria-controls="payment-four-collapseThree"
                        >
                          How can I make all this less work?
                        </button>
                      </h2>
                      <div
                        id="payment-four-collapseThree"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-four-headingThree"
                        data-bs-parent="#paymentAccordionSeven"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-four-headingFour"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-four-collapseFour"
                          aria-expanded="false"
                          aria-controls="payment-four-collapseFour"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-four-collapseFour"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-four-collapseFour"
                        data-bs-parent="#paymentAccordionSeven"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-lg-25">
                  <div className="accordion-three" id="paymentAccordionEight">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-four-headingFive"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-four-collapseFive"
                          aria-expanded="false"
                          aria-controls="payment-four-collapseFive"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-four-collapseFive"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-four-collapseFive"
                        data-bs-parent="#paymentAccordionEight"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-four-headingSix"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-four-collapseSix"
                          aria-expanded="false"
                          aria-controls="payment-four-collapseSix"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-four-collapseSix"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-four-headingSix"
                        data-bs-parent="#paymentAccordionEight"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-four-headingSeven"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-four-collapseSeven"
                          aria-expanded="false"
                          aria-controls="payment-four-collapseSeven"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-four-collapseSeven"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-four-headingSeven"
                        data-bs-parent="#paymentAccordionEight"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-four-headingEight"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-four-collapseEight"
                          aria-expanded="false"
                          aria-controls="payment-four-collapseEight"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-four-collapseEight"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-four-headingEight"
                        data-bs-parent="#paymentAccordionEight"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="account" role="tabpanel">
              <div className="row">
                <div className="col-md-6 pr-lg-25">
                  <div className="accordion-three" id="paymentAccordionNine">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-five-headingOne"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-five-collapseOne"
                          aria-expanded="false"
                          aria-controls="payment-five-collapseOne"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-five-collapseOne"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-five-headingOne"
                        data-bs-parent="#paymentAccordionNine"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-five-headingTwo"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-five-collapseTwo"
                          aria-expanded="false"
                          aria-controls="payment-five-collapseTwo"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-five-collapseTwo"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-five-headingTwo"
                        data-bs-parent="#paymentAccordionNine"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-five-headingThree"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-five-collapseThree"
                          aria-expanded="false"
                          aria-controls="payment-five-collapseThree"
                        >
                          How can I make all this less work?
                        </button>
                      </h2>
                      <div
                        id="payment-five-collapseThree"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-five-headingThree"
                        data-bs-parent="#paymentAccordionNine"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-five-headingFour"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-five-collapseFour"
                          aria-expanded="false"
                          aria-controls="payment-five-collapseFour"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-five-collapseFour"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-five-collapseFour"
                        data-bs-parent="#paymentAccordionNine"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-lg-25">
                  <div className="accordion-three" id="paymentAccordionTen">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-five-headingFive"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-five-collapseFive"
                          aria-expanded="false"
                          aria-controls="payment-five-collapseFive"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-five-collapseFive"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-five-collapseFive"
                        data-bs-parent="#paymentAccordionTen"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-five-headingSix"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-five-collapseSix"
                          aria-expanded="false"
                          aria-controls="payment-five-collapseSix"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-five-collapseSix"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-five-headingSix"
                        data-bs-parent="#paymentAccordionTen"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-five-headingSeven"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-five-collapseSeven"
                          aria-expanded="false"
                          aria-controls="payment-five-collapseSeven"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-five-collapseSeven"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-five-headingSeven"
                        data-bs-parent="#paymentAccordionTen"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-five-headingEight"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-five-collapseEight"
                          aria-expanded="false"
                          aria-controls="payment-five-collapseEight"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-five-collapseEight"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-five-headingEight"
                        data-bs-parent="#paymentAccordionTen"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="service" role="tabpanel">
              <div className="row">
                <div className="col-md-6 pr-lg-25">
                  <div className="accordion-three" id="paymentAccordionElven">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-six-headingOne"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-six-collapseOne"
                          aria-expanded="false"
                          aria-controls="payment-six-collapseOne"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-six-collapseOne"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-six-headingOne"
                        data-bs-parent="#paymentAccordionElven"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-six-headingTwo"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-six-collapseTwo"
                          aria-expanded="false"
                          aria-controls="payment-six-collapseTwo"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-six-collapseTwo"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-six-headingTwo"
                        data-bs-parent="#paymentAccordionElven"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-six-headingThree"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-six-collapseThree"
                          aria-expanded="false"
                          aria-controls="payment-six-collapseThree"
                        >
                          How can I make all this less work?
                        </button>
                      </h2>
                      <div
                        id="payment-six-collapseThree"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-six-headingThree"
                        data-bs-parent="#paymentAccordionElven"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-six-headingFour"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-six-collapseFour"
                          aria-expanded="false"
                          aria-controls="payment-six-collapseFour"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-six-collapseFour"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-six-collapseFour"
                        data-bs-parent="#paymentAccordionElven"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-lg-25">
                  <div className="accordion-three" id="paymentAccordionTwelve">
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-six-headingFive"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-six-collapseFive"
                          aria-expanded="false"
                          aria-controls="payment-six-collapseFive"
                        >
                          What’s up, Docs?
                        </button>
                      </h2>
                      <div
                        id="payment-six-collapseFive"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-six-collapseFive"
                        data-bs-parent="#paymentAccordionTwelve"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-six-headingSix"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-six-collapseSix"
                          aria-expanded="false"
                          aria-controls="payment-six-collapseSix"
                        >
                          How can i use Landpagy?
                        </button>
                      </h2>
                      <div
                        id="payment-six-collapseSix"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-six-headingSix"
                        data-bs-parent="#paymentAccordionTwelve"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-six-headingSeven"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-six-collapseSeven"
                          aria-expanded="false"
                          aria-controls="payment-six-collapseSeven"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-six-collapseSeven"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-six-headingSeven"
                        data-bs-parent="#paymentAccordionTwelve"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                     className="accordion-item"
                      
                    >
                      <h2
                       className="accordion-header"
                        id="payment-six-headingEight"
                      >
                        <button
                         className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment-six-collapseEight"
                          aria-expanded="false"
                          aria-controls="payment-six-collapseEight"
                        >
                          When should I use a Tag?
                        </button>
                      </h2>
                      <div
                        id="payment-six-collapseEight"
                       className="accordion-collapse collapse"
                        aria-labelledby="payment-six-headingEight"
                        data-bs-parent="#paymentAccordionTwelve"
                      >
                        <div className="accordion-body">
                          <p>
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour.
                          </p>
                        </div>
                      </div>
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
}
