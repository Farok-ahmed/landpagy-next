import Link from "next/link";
import React from "react";

export default function JobsHero() {
  return (
    <section className="breadcrumb-area">
      <div
        className="breadcrumb-widget pt-100"
        style={{ background: "url(/images/breadcrumb.png)" }}
      >
        <div className="container blog-grid-container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-content pt-170 pb-125">
                <h1>Job Posts</h1>
                <ul>
                  <li>
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <Link href="/">pages</Link>
                  </li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
