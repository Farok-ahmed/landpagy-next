"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo5 from "@/assets/images/logo-5.svg";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function FooterPayment() {
  const leftRef = useGsapReveal({ animation: 'fadeInLeft', delay: 0 });
  const menu1Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.1 });
  const menu2Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.3 });
  const menu3Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.5 });
  const bottomRef = useGsapReveal({ animation: 'fadeInUp', delay: 0.1 });

  const [selectedOption, setSelectedOption] = useState("english");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
    { value: "german", label: "German" },
  ];

  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <footer className="footer-payment bg-burst">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div ref={leftRef} className="col-lg-4">
              <div className="footer-content flex-column justify-content-start align-items-start">
                <Image src={logo5} alt="Footer Logo" />
                <p className="mt-3">
                  Start working with Landpagy that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
                <div className="custom-select-wrapper">
                  <button
                    type="button"
                   className="custom-select-button"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div>
                      <i className="icon_globe-2"></i>
                      {
                        options.find(
                          (option) => option.value === selectedOption
                        )?.label
                      }
                    </div>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  {isOpen && (
                    <div className="custom-select-dropdown">
                      {options.map((option) => (
                        <button
                          key={option.value}
                         className="custom-select-option"
                          onClick={() => handleSelect(option.value)}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row justify-content-between">
                <div
                  ref={menu1Ref}
                 className="col-sm-6 col-md-4"
                >
                  <div className="footer-menu">
                    <h4>Features</h4>
                    <ul>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Social media</a>
                      </li>
                      <li>
                        <a href="#">Develop</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  ref={menu2Ref}
                 className="col-sm-6 col-md-3"
                >
                  <div className="footer-menu">
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Social media</a>
                      </li>
                      <li>
                        <a href="#">Develop</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Social media</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  ref={menu3Ref}
                 className="col-sm-6 col-md-5"
                >
                  <div className="footer-menu ps-md-4">
                    <h4>Newsletter</h4>
                    <p>Sign up and receive the latest tips via email.</p>
                    <div className="newsletter-box mt-25">
                      <h6>Write you email*</h6>
                      <form action="#">
                        <div className="form-group">
                          <i className="icon_mail_alt"></i>
                          <input
                            type="text"
                           className="form-control"
                            placeholder="Your email"
                          />
                        </div>
                        <button type="submit" className="btn">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div ref={bottomRef} className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <ul>
                <li>
                  <span className="px-0 copyright">
                    Copyright {new Date().getFullYear()}, All Rights Reserved
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-menu">
                <ul className="justify-content-lg-center">
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Legal Notice</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-2 text-center col-lg-3 text-lg-end mt-lg-0">
              <ul className="flex-row social-link-bg-2 justify-content-lg-end justify-content-center">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className="footer-shape"></span>
    </footer>
  );
}
