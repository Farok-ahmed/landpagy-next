import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="wrapper-404 pt-180 pb-140">
      <div className="bg-shapes">
        <div className="shape">
          <img src="/images/404/shape1.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/404/shape2.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/404/shape3.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/404/shape4.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/404/shape5.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/404/shape6.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/404/shape7.svg" alt="Shape" />
        </div>
        <div className="shape">
          <img src="/images/404/shape8.svg" alt="Shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wrapp-404 text-center">
              <img
                className="mb-60 mx-auto"
                src="/images/404/404.svg"
                alt="404"
              />
              <p className="text-404 mb-50">
                We’re sorry the page you’re looking for seems lost in the space
              </p>
              <Link href="/" className="btn btn-red">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
