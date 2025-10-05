"use client";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import Link from "next/link";
import ElementsLayout from "@/components/Layout/ElementsLayout";

export default function SignIn() {
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
                    className="shapes layer object-element"
                    ref={shape1Parallax.ref}
                  ></div>
                  <div className="shapes object-element"></div>
                  <div
                    className="shapes layer object-element"
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
                <div className="form-wrapper form-wrapper-signin">
                  <div className="text-center">
                    <h2 className="heading-3">Sign in to Landpagy</h2>

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
                      <div className="col-md-12">
                        <input
                          type="email"
                          placeholder="Email address or username"
                        />
                      </div>
                      <div className="mt-20 col-md-12">
                        <input type="password" placeholder="Password*" />
                      </div>
                      <div className="col-6">
                        <input type="checkbox" id="remember" />
                        <label className="check-text" htmlFor="remember">
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                      <div className="col-6">
                        <a className="forgot-link float-end" href="/">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="col-md-12 mt-30">
                        <input
                          className="btn btn-red"
                          type="submit"
                          value="Sign In"
                        />
                      </div>

                      <div className="col-md-12">
                        <p className="mt-20 form-text">
                          Don’t have an account?
                          <br />
                          <Link href="/sign-up">Create account</Link>
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
