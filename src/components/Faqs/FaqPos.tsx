"use client";
import Link from "next/link";
import Image from "next/image";
import faqShape1 from "@/assets/images/home_5/shapes/faq-shape1.png";
import faqShape2 from "@/assets/images/home_5/shapes/faq-shape2.png";

import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function FaqPos() {
  const _faqRef1 = useGsapReveal({ animation: "fadeInUp" });
  const _faqRef2 = useGsapReveal({ animation: "fadeInUp", delay: 0.1 });
  return (
    <section className="faq-area-five pt-135 pb-150">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={faqShape1} alt="shape" />
        </div>
        <div className="shape">
          <Image src={faqShape2} alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="section-title-center">
              <h2 className="">Frequently Asked Questions</h2>
              <p className="">
                Aliquam interdum risus vitae lectus convallis sodales quis
                dignissim mi. Proin sem risus, aliquet in pretium eu, ultrices
                eu nibh.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="accordion" id="posAccordion">
              <div
               className="accordion-item"
              >
                <h2 className="accordion-header" id="pos-headingOne">
                  <button
                   className="accordion-button collapsed"type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pos-collapseOne"
                    aria-expanded="false"
                    aria-controls="pos-collapseOne"
                  >
                    How do I get started with Landpagy for Retail?
                  </button>
                </h2>
                <div
                  id="pos-collapseOne"
                 className="accordion-collapse collapse"aria-labelledby="pos-headingOne"
                  data-bs-parent="#posAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Everyone who signs up to Square for Retail will
                      automatically receive a 30-day free trial of Plus. To get
                      started with Premium,
                      <span>
                        <Link href="/contact-one">contact our sales team.</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
               className="accordion-item"
              >
                <h2 className="accordion-header" id="pos-headingTwo">
                  <button
                   className="accordion-button collapsed"type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pos-collapseTwo"
                    aria-expanded="false"
                    aria-controls="pos-collapseTwo"
                  >
                    Can I transfer my existing inventory?
                  </button>
                </h2>
                <div
                  id="pos-collapseTwo"
                 className="accordion-collapse collapse"aria-labelledby="pos-headingTwo"
                  data-bs-parent="#posAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Everyone who signs up to Square for Retail will
                      automatically receive a 30-day free trial of Plus. To get
                      started with Premium,
                      <span>
                        <Link href="/contact-one">contact our sales team.</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
               className="accordion-item"
              >
                <h2 className="accordion-header" id="pos-headingThree">
                  <button
                   className="accordion-button collapsed"type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pos-collapseThree"
                    aria-expanded="false"
                    aria-controls="pos-collapseThree"
                  >
                    Is hardware included?
                  </button>
                </h2>
                <div
                  id="pos-collapseThree"
                 className="accordion-collapse collapse"aria-labelledby="pos-headingThree"
                  data-bs-parent="#posAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Everyone who signs up to Square for Retail will
                      automatically receive a 30-day free trial of Plus. To get
                      started with Premium,
                      <span>
                        <Link href="/contact-one">contact our sales team.</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
               className="accordion-item"
              >
                <h2 className="accordion-header" id="pos-headingFour">
                  <button
                   className="accordion-button collapsed"type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pos-collapseFour"
                    aria-expanded="false"
                    aria-controls="pos-collapseFour"
                  >
                    Can I upgrade my Landpagy for Retail plan?
                  </button>
                </h2>
                <div
                  id="pos-collapseFour"
                 className="accordion-collapse collapse"aria-labelledby="pos-collapseFour"
                  data-bs-parent="#posAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Everyone who signs up to Square for Retail will
                      automatically receive a 30-day free trial of Plus. To get
                      started with Premium,
                      <span>
                        <Link href="/contact-one">contact our sales team.</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
               className="accordion-item"
              >
                <h2 className="accordion-header" id="pos-headingFive">
                  <button
                   className="accordion-button collapsed"type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pos-collapseFive"
                    aria-expanded="false"
                    aria-controls="pos-collapseFive"
                  >
                    Can I downgrade my Landpagy for Retail plan?
                  </button>
                </h2>
                <div
                  id="pos-collapseFive"
                 className="accordion-collapse collapse"aria-labelledby="pos-collapseFive"
                  data-bs-parent="#posAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Everyone who signs up to Square for Retail will
                      automatically receive a 30-day free trial of Plus. To get
                      started with Premium,
                      <span>
                        <Link href="/contact-one">contact our sales team.</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
               className="accordion-item"
              >
                <h2 className="accordion-header" id="pos-headingSix">
                  <button
                   className="accordion-button collapsed"type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pos-collapseSix"
                    aria-expanded="false"
                    aria-controls="pos-collapseSix"
                  >
                    How do I switch from my current solution?
                  </button>
                </h2>
                <div
                  id="pos-collapseSix"
                 className="accordion-collapse collapse"aria-labelledby="pos-collapseSix"
                  data-bs-parent="#posAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Everyone who signs up to Square for Retail will
                      automatically receive a 30-day free trial of Plus. To get
                      started with Premium,
                      <span>
                        <Link href="/contact-one">
                          {" "}
                          contact our sales team.
                        </Link>
                      </span>
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
