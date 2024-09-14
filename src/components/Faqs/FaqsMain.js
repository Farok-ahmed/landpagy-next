import React from "react";

export default function FaqsMain() {
  return (
    <section className="faq-wrapper pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="faq-nav-wrapp nav justify-content-center justify-content-md-start flex-md-column flex-row nav-pills me-md-3 mb-4 mb-md-0"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="general-faq-tab"
                data-bs-toggle="pill"
                data-bs-target="#general-faq"
                type="button"
                role="tab"
                aria-controls="general-faq"
                aria-selected="true"
              >
                General
              </button>
              <button
                className="nav-link"
                id="account-faq-tab"
                data-bs-toggle="pill"
                data-bs-target="#account-faq"
                type="button"
                role="tab"
                aria-controls="account-faq"
                aria-selected="false"
              >
                Account
              </button>
              <button
                className="nav-link"
                id="sales-faq-tab"
                data-bs-toggle="pill"
                data-bs-target="#sales-faq"
                type="button"
                role="tab"
                aria-controls="sales-faq"
                aria-selected="false"
              >
                Sales
              </button>
              <button
                className="nav-link"
                id="support-faq-tab"
                data-bs-toggle="pill"
                data-bs-target="#support-faq"
                type="button"
                role="tab"
                aria-controls="support-faq"
                aria-selected="false"
              >
                Support
              </button>
              <button
                className="nav-link"
                id="license-faq-tab"
                data-bs-toggle="pill"
                data-bs-target="#license-faq"
                type="button"
                role="tab"
                aria-controls="license-faq"
                aria-selected="false"
              >
                License
              </button>
              <button
                className="nav-link"
                id="refund-faq-tab"
                data-bs-toggle="pill"
                data-bs-target="#refund-faq"
                type="button"
                role="tab"
                aria-controls="refund-faq"
                aria-selected="false"
              >
                Refund
              </button>
            </div>
          </div>

          <div className="col-md-8">
            <div
              className="tab-content faq-tab-content"
              id="v-pills-tabContent"
            >
              {/* <!--=====general tab=====--> */}
              <div
                className="tab-pane fade show active"
                id="general-faq"
                role="tabpanel"
                aria-labelledby="general-faq-tab"
              >
                <div className="accordion" id="accordionFaq">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqOne"
                        aria-expanded="true"
                        aria-controls="collapseFaqOne"
                      >
                        How does the Pricing work?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFaqOne"
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqTwo"
                        aria-expanded="false"
                        aria-controls="collapseFaqTwo"
                      >
                        Do you provide premium support?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqTwo"
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqThree"
                        aria-expanded="false"
                        aria-controls="collapseFaqThree"
                      >
                        Can you guarantee uptime?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqThree"
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFour"
                        aria-expanded="false"
                        aria-controls="collapseFaqFour"
                      >
                        What should I expect my match rate to be?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFour"
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFive"
                        aria-expanded="false"
                        aria-controls="collapseFaqFive"
                      >
                        I have more questions!
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFive"
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--=====account tab=====--> */}
              <div
                className="tab-pane fade"
                id="account-faq"
                role="tabpanel"
                aria-labelledby="account-faq-tab"
              >
                <div className="accordion" id="accordionFaq2">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqOne2">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqOne2"
                        aria-expanded="true"
                        aria-controls="collapseFaqOne2"
                      >
                        How does the Pricing work?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqOne2"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFaqOne2"
                      data-bs-parent="#accordionFaq2"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqTwo2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqTwo2"
                        aria-expanded="false"
                        aria-controls="collapseFaqTwo2"
                      >
                        Do you provide premium support?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqTwo2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqTwo2"
                      data-bs-parent="#accordionFaq2"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqThree2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqThree2"
                        aria-expanded="false"
                        aria-controls="collapseFaqThree2"
                      >
                        Can you guarantee uptime?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqThree2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqThree2"
                      data-bs-parent="#accordionFaq2"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFour2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFour2"
                        aria-expanded="false"
                        aria-controls="collapseFaqFour2"
                      >
                        What should I expect my match rate to be?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFour2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFour2"
                      data-bs-parent="#accordionFaq2"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFive2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFive2"
                        aria-expanded="false"
                        aria-controls="collapseFaqFive2"
                      >
                        I have more questions!
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFive2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFive2"
                      data-bs-parent="#accordionFaq2"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--=====sales tab=====--> */}
              <div
                className="tab-pane fade"
                id="sales-faq"
                role="tabpanel"
                aria-labelledby="sales-faq-tab"
              >
                <div className="accordion" id="accordionFaq3">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqOne3">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqOne3"
                        aria-expanded="true"
                        aria-controls="collapseFaqOne3"
                      >
                        How does the Pricing work?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqOne3"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFaqOne3"
                      data-bs-parent="#accordionFaq3"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqTwo3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqTwo3"
                        aria-expanded="false"
                        aria-controls="collapseFaqTwo3"
                      >
                        Do you provide premium support?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqTwo3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqTwo3"
                      data-bs-parent="#accordionFaq3"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqThree3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqThree3"
                        aria-expanded="false"
                        aria-controls="collapseFaqThree3"
                      >
                        Can you guarantee uptime?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqThree3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqThree3"
                      data-bs-parent="#accordionFaq3"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFour3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFour3"
                        aria-expanded="false"
                        aria-controls="collapseFaqFour3"
                      >
                        What should I expect my match rate to be?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFour3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFour3"
                      data-bs-parent="#accordionFaq3"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFive3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFive3"
                        aria-expanded="false"
                        aria-controls="collapseFaqFive3"
                      >
                        I have more questions!
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFive3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFive3"
                      data-bs-parent="#accordionFaq3"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--=====support tab=====--> */}
              <div
                className="tab-pane fade"
                id="support-faq"
                role="tabpanel"
                aria-labelledby="support-faq-tab"
              >
                <div className="accordion" id="accordionFaq4">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqOne4">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqOne4"
                        aria-expanded="true"
                        aria-controls="collapseFaqOne4"
                      >
                        How does the Pricing work?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqOne4"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFaqOne4"
                      data-bs-parent="#accordionFaq4"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqTwo4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqTwo4"
                        aria-expanded="false"
                        aria-controls="collapseFaqTwo4"
                      >
                        Do you provide premium support?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqTwo4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqTwo4"
                      data-bs-parent="#accordionFaq4"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqThree4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqThree4"
                        aria-expanded="false"
                        aria-controls="collapseFaqThree4"
                      >
                        Can you guarantee uptime?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqThree4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqThree4"
                      data-bs-parent="#accordionFaq4"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFour4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFour4"
                        aria-expanded="false"
                        aria-controls="collapseFaqFour4"
                      >
                        What should I expect my match rate to be?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFour4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFour4"
                      data-bs-parent="#accordionFaq4"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFive4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFive4"
                        aria-expanded="false"
                        aria-controls="collapseFaqFive4"
                      >
                        I have more questions!
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFive4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFive4"
                      data-bs-parent="#accordionFaq4"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--=====license tab=====--> */}
              <div
                className="tab-pane fade"
                id="license-faq"
                role="tabpanel"
                aria-labelledby="license-faq-tab"
              >
                <div className="accordion" id="accordionFaq5">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqOne5">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqOne5"
                        aria-expanded="true"
                        aria-controls="collapseFaqOne5"
                      >
                        How does the Pricing work?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqOne5"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFaqOne5"
                      data-bs-parent="#accordionFaq5"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqTwo5">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqTwo5"
                        aria-expanded="false"
                        aria-controls="collapseFaqTwo5"
                      >
                        Do you provide premium support?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqTwo5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqTwo5"
                      data-bs-parent="#accordionFaq5"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqThree5">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqThree5"
                        aria-expanded="false"
                        aria-controls="collapseFaqThree5"
                      >
                        Can you guarantee uptime?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqThree5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqThree5"
                      data-bs-parent="#accordionFaq5"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFour5">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFour5"
                        aria-expanded="false"
                        aria-controls="collapseFaqFour5"
                      >
                        What should I expect my match rate to be?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFour5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFour5"
                      data-bs-parent="#accordionFaq5"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFive5">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFive5"
                        aria-expanded="false"
                        aria-controls="collapseFaqFive5"
                      >
                        I have more questions!
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFive5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFive5"
                      data-bs-parent="#accordionFaq5"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--=====refund tab=====--> */}
              <div
                className="tab-pane fade"
                id="refund-faq"
                role="tabpanel"
                aria-labelledby="refund-faq-tab"
              >
                <div className="accordion" id="accordionFaq6">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqOne6">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqOne6"
                        aria-expanded="true"
                        aria-controls="collapseFaqOne6"
                      >
                        How does the Pricing work?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqOne6"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFaqOne6"
                      data-bs-parent="#accordionFaq6"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqTwo6">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqTwo6"
                        aria-expanded="false"
                        aria-controls="collapseFaqTwo6"
                      >
                        Do you provide premium support?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqTwo6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqTwo6"
                      data-bs-parent="#accordionFaq6"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqThree6">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqThree6"
                        aria-expanded="false"
                        aria-controls="collapseFaqThree6"
                      >
                        Can you guarantee uptime?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqThree6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqThree6"
                      data-bs-parent="#accordionFaq6"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFour6">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFour6"
                        aria-expanded="false"
                        aria-controls="collapseFaqFour6"
                      >
                        What should I expect my match rate to be?
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFour6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFour6"
                      data-bs-parent="#accordionFaq6"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFive6">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFaqFive6"
                        aria-expanded="false"
                        aria-controls="collapseFaqFive6"
                      >
                        I have more questions!
                      </button>
                    </h2>
                    <div
                      id="collapseFaqFive6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFaqFive6"
                      data-bs-parent="#accordionFaq6"
                    >
                      <div className="accordion-body">
                        Mauris purus tortor, sodales at pulvinar id, faucibus at
                        lacus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo. Mauris pulvinar risus
                        lobortis.
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
