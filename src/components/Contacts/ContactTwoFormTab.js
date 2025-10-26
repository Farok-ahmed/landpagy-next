import Image from "next/image";
import Link from "next/link";

import formIcon from "@/assets/images/contact_2/icons/form-icon.svg";
;

export default function ContactTwoFormTab() {
  return (
    <section className="contact-area-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="text-center section-title">
              <h2>
                <span>GET IN TOUCH</span>
                How can we help you
              </h2>
              <p>
                We’re here to help and answer any question you might have. We
                look forward to hearing from you.
              </p>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="contact-form-2">
              <nav>
                <div
                  className="nav justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-general-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-general"
                    type="button"
                    role="tab"
                    aria-controls="nav-general"
                    aria-selected="true"
                  >
                    General
                  </button>
                  <button
                    className="nav-link"
                    id="nav-support-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-support"
                    type="button"
                    role="tab"
                    aria-controls="nav-support"
                    aria-selected="false"
                  >
                    Support
                  </button>
                  <button
                    className="nav-link"
                    id="nav-business-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-business"
                    type="button"
                    role="tab"
                    aria-controls="nav-business"
                    aria-selected="false"
                  >
                    Business
                  </button>
                  <button
                    className="nav-link"
                    id="nav-partnership-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-partnership"
                    type="button"
                    role="tab"
                    aria-controls="nav-partnership"
                    aria-selected="false"
                  >
                    Partnership
                  </button>
                  <button
                    className="nav-link"
                    id="nav-optily-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-optily"
                    type="button"
                    role="tab"
                    aria-controls="nav-optily"
                    aria-selected="false"
                  >
                    Optily
                  </button>
                </div>
              </nav>

              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-general"
                  role="tabpanel"
                  aria-labelledby="nav-general-tab"
                >
                  <div className="text-center contact-tab-info">
                    <Image src={formIcon} className="mx-auto"
                      
                      alt="Icon" />
                    <h4 className="tab-title">General Contact</h4>
                    <p className="tab-para">
                      Have some feedback or a general question? <br />
                      Get in touch with us below
                    </p>
                  </div>

                  <div className="tab-form">
                    <form action="#">
                      <div className="contact-form-name">
                        <label htmlFor="name" className="">
                          Name*
                        </label>
                        <input type="text" id="name" placeholder="" />
                      </div>
                      <div className="contact-form-email">
                        <label htmlFor="email">Email*</label>
                        <input type="text" id="email" placeholder="" />
                      </div>
                      <div className="contact-form-message">
                        <label htmlFor="textarea">Message*</label>
                        <textarea id="textarea" placeholder=""></textarea>
                      </div>
                      <div className="contact-form-button">
                        <Link href="/" className="btn btn-red">
                          Send Message
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-support"
                  role="tabpanel"
                  aria-labelledby="nav-support-tab"
                >
                  <div className="text-center contact-tab-info">
                    <Image src={formIcon} className="mx-auto"
                      
                      alt="Icon" />
                    <h4 className="tab-title">Support Contact</h4>
                    <p className="tab-para">
                      Have some feedback or a general question? <br />
                      Get in touch with us below
                    </p>
                  </div>

                  <div className="tab-form">
                    <form action="#">
                      <div className="contact-form-name">
                        <label htmlFor="name" className="">
                          Name*
                        </label>
                        <input type="text" id="name" placeholder="" />
                      </div>
                      <div className="contact-form-email">
                        <label htmlFor="email">Email*</label>
                        <input type="text" id="email" placeholder="" />
                      </div>
                      <div className="contact-form-message">
                        <label htmlFor="textarea">Message*</label>
                        <textarea id="textarea" placeholder=""></textarea>
                      </div>
                      <div className="contact-form-button">
                        <Link href="/" className="btn btn-red">
                          Send Message
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-business"
                  role="tabpanel"
                  aria-labelledby="nav-business-tab"
                >
                  <div className="text-center contact-tab-info">
                    <Image src={formIcon} className="mx-auto"
                      
                      alt="Icon" />
                    <h4 className="tab-title">Business Contact</h4>
                    <p className="tab-para">
                      Have some feedback or a general question? <br />
                      Get in touch with us below
                    </p>
                  </div>

                  <div className="tab-form">
                    <form action="#">
                      <div className="contact-form-name">
                        <label htmlFor="name" className="">
                          Name*
                        </label>
                        <input type="text" id="name" placeholder="" />
                      </div>
                      <div className="contact-form-email">
                        <label htmlFor="email">Email*</label>
                        <input type="text" id="email" placeholder="" />
                      </div>
                      <div className="contact-form-message">
                        <label htmlFor="textarea">Message*</label>
                        <textarea id="textarea" placeholder=""></textarea>
                      </div>
                      <div className="contact-form-button">
                        <Link href="/" className="btn btn-red">
                          Send Message
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-partnership"
                  role="tabpanel"
                  aria-labelledby="nav-partnership-tab"
                >
                  <div className="text-center contact-tab-info">
                    <Image src={formIcon} className="mx-auto"
                      
                      alt="Icon" />
                    <h4 className="tab-title">Partnership Contact</h4>
                    <p className="tab-para">
                      Have some feedback or a general question? <br />
                      Get in touch with us below
                    </p>
                  </div>

                  <div className="tab-form">
                    <form action="#">
                      <div className="contact-form-name">
                        <label htmlFor="name" className="">
                          Name*
                        </label>
                        <input type="text" id="name" placeholder="" />
                      </div>
                      <div className="contact-form-email">
                        <label htmlFor="email">Email*</label>
                        <input type="text" id="email" placeholder="" />
                      </div>
                      <div className="contact-form-message">
                        <label htmlFor="textarea">Message*</label>
                        <textarea id="textarea" placeholder=""></textarea>
                      </div>
                      <div className="contact-form-button">
                        <Link href="/" className="btn btn-red">
                          Send Message
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-optily"
                  role="tabpanel"
                  aria-labelledby="nav-optily-tab"
                >
                  <div className="text-center contact-tab-info">
                    <Image src={formIcon} className="mx-auto"
                      
                      alt="Icon" />
                    <h4 className="tab-title">Optily Contact</h4>
                    <p className="tab-para">
                      Have some feedback or a general question? <br />
                      Get in touch with us below
                    </p>
                  </div>

                  <div className="tab-form">
                    <form action="#">
                      <div className="contact-form-name">
                        <label htmlFor="name" className="">
                          Name*
                        </label>
                        <input type="text" id="name" placeholder="" />
                      </div>
                      <div className="contact-form-email">
                        <label htmlFor="email">Email*</label>
                        <input type="text" id="email" placeholder="" />
                      </div>
                      <div className="contact-form-message">
                        <label htmlFor="textarea">Message*</label>
                        <textarea id="textarea" placeholder=""></textarea>
                      </div>
                      <div className="contact-form-button">
                        <Link href="/" className="btn btn-red">
                          Send Message
                        </Link>
                      </div>
                    </form>
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
