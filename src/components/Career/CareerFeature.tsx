"use client";
import Link from "next/link";
;

import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function CareerFeature() {
  const featureRef1 = useGsapReveal({ animation: "fadeInUp" });
  const featureRef2 = useGsapReveal({ animation: "fadeInUp", delay: 0.1 });
  return (
    <section className="job-feature-area pt-200 pb-145">
      <div className="container pt-40">
        <div className="section-title text-start pt-0 pt-md-0">
          <h2 className="">Forget the expected</h2>
          <p className="">
            Banca is one of the world’s leading international banks. Whether you
            are looking for a first job or taking the next step in your career,
            we offer many ways for you to realise your ambitions. Come and work
            with us and you'll have opportunities to make connections all over
            the world and help build the bank for the future. Take a look and
            discover what it means to work for Santander US.
          </p>
        </div>

        <div className="row gy-4 mt-30">
          <div className="col-md-6 col-lg-4">
            <div className="feature-card-widget-7" ref={featureRef1}>
              <h4>Who We Are</h4>
              <p>
                Our purpose is to help people and businesses prosper. That's why
                we're simple and personal in all that we do.
              </p>
              <Link href="/" className="btn">
                Learn more
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feature-card-widget-7" ref={featureRef2}>
              <h4>Career Areas</h4>
              <p>
                Unique skills and diverse backgrounds allow us to grow and
                prosper. See where you could make a difference.
              </p>
              <Link href="/" className="btn">
                Explore
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
             className="feature-card-widget-7"
             
            >
              <h4>Student Opportunities</h4>
              <p>
                Whether you're a student purusing a graduate pursuing a career,
                put your talents to the test at Santander US.
              </p>
              <Link href="/" className="btn">
                Find out more
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
             className="feature-card-widget-7"
             
            >
              <h4>Benefits</h4>
              <p>
                Learn more about the comprehensive benefits packages that we are
                offering to you and your family.
              </p>
              <Link href="/" className="btn">
                Discover
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
             className="feature-card-widget-7"
             
            >
              <h4>Diversity & Inclusion</h4>
              <p>
                At Landpagy, we seek out all off diverse viewpoints. It's why we
                work hard to build an inclusive environment.
              </p>
              <Link href="/" className="btn">
                Read more
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
             className="feature-card-widget-7"
             
            >
              <h4>Join Our Community</h4>
              <p>
                When you become a member of Santander's talent community, you'll
                receive job opportunity alerts here.
              </p>
              <Link href="/" className="btn">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
