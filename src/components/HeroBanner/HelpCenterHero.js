import React from "react";

export default function HelpCenterHero() {
  return (
    <section className="banner-area help-page-banner">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="banner-left">
              <h1>How can we help you?</h1>
              <form className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email to book demo"
                />
                <button type="submit" className="btn btn-red">
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <ul className="popular-article">
                <li className="mr-1">Popular help articles:</li>
                <li>
                  <a href="/">Create Lands,</a>
                </li>
                <li>
                  <a href="/">Understand tasks,</a>
                </li>
                <li>
                  <a href="/">Troubleshoot error codes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img
        className="help-center-shape"
        src="/images/shape/help-center-shape.png"
        alt=""
      />
      <img
        className="help-center-shape2"
        src="/images/shape/help-center-shape2.png"
        alt=""
      />
      <img
        className="help-center-shape3"
        src="/images/shape/help-center-shape3.png"
        alt=""
      />
      <img
        className="help-center-shape4"
        src="/images/shape/help-center-shape4.png"
        alt=""
      />
      <img
        className="shape16 animate__animated wow animate__fadeInTopLeft animate__slow"
        src="/images/shape/shape16.svg"
        alt=""
      />
    </section>
  );
}
