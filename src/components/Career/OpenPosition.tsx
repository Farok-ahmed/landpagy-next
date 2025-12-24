"use client";
;

import Administration from "./JobCategory/Administration";
import InformationSystem from "./JobCategory/InformationSystem";
import Marketing from "./JobCategory/Marketing";
import ProductDevelopment from "./JobCategory/ProductDevelopment";
import WebDesign from "./JobCategory/WebDesign";
import WebDevelopment from "./JobCategory/WebDevelopment";

import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function OpenPosition() {
  const _posRef1 = useGsapReveal({ animation: "fadeInUp" });
  const _posRef2 = useGsapReveal({ animation: "fadeInUp", delay: 0.1 });
  const _posRef3 = useGsapReveal({ animation: "fadeInUp", delay: 0.2 });
  return (
    <section className="career-tabs-area pt-90 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center section-title">
              <span className="">
                Careers
              </span>
              <h2 className="">
                Open Positions
              </h2>
              <p className="">
                Hey, you! To sum it up: we believe in people’s power to
                contribute to the greater good and make their time worth it. So,
                scroll through our open positions, and if you recognize a place
                where you can belong, do feel free to apply.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="career__nav">
              <select
               className="form-select"
                id="jobs-department"
                name="department"
              >
                <option defaultValue="">All Departments</option>
                <option defaultValue="web-development">Web Development</option>
                <option defaultValue="marketing">Marketing</option>
                <option defaultValue="administration">Administration</option>
                <option defaultValue="web-design">Web Design</option>
                <option defaultValue="product-development">
                  Product Development
                </option>
                <option defaultValue="information-systems-operations">
                  Information Systems (Operations)
                </option>
              </select>

              <select
               className="form-select"
                id="jobs-locations"
                name="locations"
              >
                <option defaultValue="">All Locations</option>
                <option defaultValue="bulgaria">Bulgaria</option>
                <option defaultValue="remote-anywhere-in-the-world">
                  Remote, anywhere in the world
                </option>
                <option defaultValue="sofia">Sofia</option>
              </select>
            </div>

            <div className="career__positions">
              <WebDevelopment />
              <Marketing />
              <Administration />
              <WebDesign />
              <ProductDevelopment />
              <InformationSystem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
