"use client";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import Link from "next/link";
import ElementsLayout from "@/components/Layout/ElementsLayout";

export default function SignUp() {
  const parallaxOne = useParallax({
    translateX: [0, -20, "easeInQuad"],
    translateY: [0, 0, "easeInQuad"],
    rotateY: 0,
    speed: -10,
  });
  const shape1Parallax = useParallax({
    translateX: [10, -10, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape2Parallax = useParallax({
    translateX: [50, -150, "easeInQuad"],
    translateY: [0, 0, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape3Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [150, -30, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  const shape4Parallax = useParallax({
    translateX: [0, 0, "easeInQuad"],
    translateY: [100, -20, "easeOutQuad"],
    rotateY: [0, 0],
    speed: -10,
  });
  return (
    <ElementsLayout>
      <section className="overflow-hidden sign-up-wrapper pt-215 pb-165">
        <div className="container">
          <div className="sign-up-box">
            <div className="bg-shapes">
              <div className="shape">
                <img src="/images/signup/shape2.svg" alt="Shape" />
              </div>
              <div className="shape layer" ref={parallaxOne.ref}>
                <img src="/images/signup/shape3.svg" alt="Shape" />
              </div>
              <div className="shape">
                <img src="/images/signup/shape4.svg" alt="Shape" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-images d-lg-block d-none">
                  <div
                    className="shapes object-element layer"
                    ref={shape1Parallax.ref}
                  ></div>
                  <div className="shapes object-element"></div>
                  <div
                    className="shapes object-element layer"
                    ref={shape2Parallax.ref}
                  ></div>
                  <div
                    className="shapes object-element layer"
                    ref={shape3Parallax.ref}
                  ></div>
                  <div
                    className="shapes object-element layer"
                    ref={shape4Parallax.ref}
                  ></div>
                  <div className="shapes">
                    <img src="/images/signup/shape1.svg" alt="Shape" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-wrapper">
                  <div className="text-center">
                    <h2 className="heading-3 mb-15">Create your account</h2>
                    <p className="heading-text">
                      Redownload themes, get support, and review themes.
                    </p>

                    <ul className="create-with-list mt-45 mb-35">
                      <li>
                        <a href="/">
                          <img src="/images/signup/icon1.svg" alt="Icon" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img src="/images/signup/icon2.svg" alt="Icon" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img src="/images/signup/icon3.svg" alt="Icon" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img src="/images/signup/icon4.svg" alt="Icon" />
                        </a>
                      </li>
                    </ul>

                    <span className="divider">or</span>
                  </div>

                  <form action="#" className="sign-up-form">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" placeholder="First Name*" />
                      </div>
                      <div className="mt-4 col-md-6 mt-md-0">
                        <input type="text" placeholder="Last Name*" />
                      </div>
                      <div className="mt-20 col-md-12">
                        <input type="email" placeholder="Email address*" />
                      </div>
                      <div className="mt-20 col-md-12">
                        <input type="password" placeholder="Password*" />
                      </div>
                      <div className="mt-10 col-md-12">
                        <p className="meta-text">
                          Make sure it's at least 15 characters OR at least 8
                          characters including a number and a lowercase letter.
                        </p>
                      </div>
                      <div className="col-md-12">
                        <input type="checkbox" id="remember" />
                        <label className="check-text" htmlFor="remember">
                          Remember me
                        </label>
                      </div>
                      <div className="col-md-12">
                        <input type="checkbox" id="news" />
                        <label className="check-text" htmlFor="news">
                          I’d like being informed about latest news and tips
                        </label>
                      </div>
                      <div className="col-md-12 mt-30">
                        <input
                          className="btn btn-red"
                          type="submit"
                          value="Sign Up"
                        />
                      </div>

                      <div className="col-md-12">
                        <p className="mt-20 form-text">
                          Already have an account?
                          <Link href="/sign-in">Sign in</Link>
                        </p>
                        <p className="form-text mt-15">
                          By clicking “Sign up” you agree to our
                          <a href="/">Terms of Service.</a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ElementsLayout>
  );
}
