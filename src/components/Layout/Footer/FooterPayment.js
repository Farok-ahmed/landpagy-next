"use client";
import React, { useState } from "react";

export default function FooterPayment() {
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
            <div className="col-lg-4 wow fadeInLeft">
              <div className="footer-content flex-column justify-content-start align-items-start">
                <img src="/images/logo-5.svg" alt="Footer Logo" />
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
                  className="col-sm-6 wow fadeInUp col-md-4"
                  data-wow-delay="0.1s"
                >
                  <div className="footer-menu">
                    <h4>Features</h4>
                    <ul>
                      <li>
                        <a href="/">Design</a>
                      </li>
                      <li>
                        <a href="/">Social media</a>
                      </li>
                      <li>
                        <a href="/">Develop</a>
                      </li>
                      <li>
                        <a href="/">Design</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-sm-6 wow fadeInUp col-md-3"
                  data-wow-delay="0.3s"
                >
                  <div className="footer-menu">
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <a href="/">Design</a>
                      </li>
                      <li>
                        <a href="/">Social media</a>
                      </li>
                      <li>
                        <a href="/">Develop</a>
                      </li>
                      <li>
                        <a href="/">Design</a>
                      </li>
                      <li>
                        <a href="/">Social media</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-sm-6 wow fadeInUp col-md-5"
                  data-wow-delay="0.5s"
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
        <div className="footer-bottom wow fadeInUp" data-wow-delay="0.1s">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <ul>
                <li>
                  <span className="px-0 copyright">
                    Copyright 2021, All Rights Reserved
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-menu">
                <ul className="justify-content-lg-center">
                  <li>
                    <a href="/">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Legal Notice</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-2 text-center col-lg-3 text-lg-end mt-lg-0">
              <ul className="flex-row social-link-bg-2 justify-content-lg-end justify-content-center">
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
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
