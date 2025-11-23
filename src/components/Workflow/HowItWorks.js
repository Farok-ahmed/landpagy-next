"use client";
import serviceIcon1 from "@/assets/images/home_8/icons/service-icon1.svg";
import serviceIcon2 from "@/assets/images/home_8/icons/service-icon2.svg";
import serviceIcon3 from "@/assets/images/home_8/icons/service-icon3.svg";
import { useMultipleGsapReveals } from "@/hooks/useGsapReveal";
import Image from "next/image";
import Link from "next/link";


export default function HowItWorks() {
  // Create refs for animated elements - title and three service items
  const [titleRef, item1Ref, item2Ref, item3Ref] = useMultipleGsapReveals([
    { animation: 'fadeInDown', delay: 0.2 },
    { animation: 'fadeInLeft', delay: 0.2 },
    { animation: 'fadeInDown', delay: 0.2 },
    { animation: 'fadeInRight', delay: 0.2 },
  ]);

  return (
    <section className="billing-services-area pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2
              ref={titleRef}
             className="services-title text-center mb-50"
            >
              How it Works
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="services-item" ref={item1Ref}>
              <Image src={serviceIcon1} alt="Interchange fees icon" />
              <h3 className="service-item-title">Interchange fees</h3>
              <p className="service-item-text">
                Any business that allows customers to make purchases with
                credit/debit cards will have to pay interchange fees.
              </p>
              <Link href="/" className="btn service-btn">
                Learn more <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-sm-0 mt-5">
            <div className="services-item" ref={item2Ref}>
              <Image src={serviceIcon2} alt="Corporate icon" />
              <h3 className="service-item-title">Our Corporate</h3>
              <p className="service-item-text">
                Since the global financial crisis, the use of spending review
                has risen dramatically across the Landpagey.
              </p>
              <Link href="/" className="btn service-btn">
                Learn more <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-lg-0 mt-5 mx-auto">
            <div
             className="services-item"
              ref={item3Ref}
            >
              <Image src={serviceIcon3} alt="European regulation icon" />
              <h3 className="service-item-title">European Regulation</h3>
              <p className="service-item-text">
                Understand your growth, churn, and retention rates with
                automatically generated reports.
              </p>
              <Link href="/" className="btn service-btn">
                Learn more <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
