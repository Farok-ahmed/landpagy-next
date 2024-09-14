import React from "react";

export default function NewsLetter() {
  return (
    <section className="cta-area section-padding-xl bg-red-150 wow fadeInUp animate__fast">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title-center pb-8">
              <h2 className="mt-n3 mt-md-n4">Get free for 14 Days</h2>
              <p>
                Aenean amet netus aliquam elit eu, sagittis id natoque id. Purus
                augue fermentum dui aliquam dui vel.
              </p>
            </div>
            <form className="form-group mx-auto mt-0">
              <input type="email" placeholder="Enter your email to book demo" />
              <button type="submit" className="btn btn-red">
                Book A Demo
              </button>
            </form>
          </div>
        </div>
      </div>
      <span className="shape7"></span>
      <img
        className="shape8 d-none d-lg-block"
        src="/images/shape/shape-8.svg"
        alt="Shape"
      />
    </section>
  );
}
