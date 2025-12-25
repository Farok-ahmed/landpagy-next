"use client";
import brand10 from "@/assets/images/brand/brand-10.svg";
import brand11 from "@/assets/images/brand/brand-11.svg";
import brand6 from "@/assets/images/brand/brand-6.svg";
import brand7 from "@/assets/images/brand/brand-7.svg";
import brand8 from "@/assets/images/brand/brand-8.svg";
import brand9 from "@/assets/images/brand/brand-9.svg";
import { useGsapReveal, useGsapMultiple } from "@/hooks/useGsapReveal";
import Image from "next/image";
import Link from "next/link";
;

export default function ClientTwo() {
  const titleRef = useGsapReveal({ animation: 'fadeIn' });
  const brandRefs = useGsapMultiple(6, [
    { animation: 'fadeInRight', delay: 0.1 },
    { animation: 'fadeInRight', delay: 0.3 },
    { animation: 'fadeInRight', delay: 0.5 },
    { animation: 'fadeInRight', delay: 0.7 },
    { animation: 'fadeInRight', delay: 0.9 },
    { animation: 'fadeInRight', delay: 1.1 },
  ]);

  return (
    <section className="clients-soft2 pt-110 pb-110">
      <div className="container container-soft2">
        <div className="row">
          <h2 ref={titleRef} className="section-title">
            Join the 10,000 happy teams already using Landpagy!
          </h2>
          <div className="col-md-2 col-sm-4">
            <div ref={brandRefs[0]} className="client-image">
              <Image src={brand6} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div ref={brandRefs[1]} className="client-image">
              <Image src={brand7} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div ref={brandRefs[2]} className="client-image">
              <Image src={brand8} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div ref={brandRefs[3]} className="client-image">
              <Image src={brand9} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div ref={brandRefs[4]} className="client-image">
              <Image src={brand10} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div ref={brandRefs[5]} className="client-image">
              <Image src={brand11} alt="brand" />
            </div>
          </div>
        </div>

        <div className="client-meta">
          <ul className="client-review-icon">
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
          </ul>
          <div className="client-review-number">
            <span>4.9</span> Stars
          </div>
          <div className="client-review">
            <span>5121+</span> Reviews
          </div>
        </div>

        <div className="text-center row">
          <Link className="customer-more" href="/testimonials">
            More customer stories <i className="arrow_right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
