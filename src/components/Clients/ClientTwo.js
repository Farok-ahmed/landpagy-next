import Link from "next/link";
import React from "react";
import Image from "next/image";
import brand6Svg from "@/assets/images/brand/brand-6.svg";
import brand10Svg from "@/assets/images/brand/brand-10.svg";
import brand8Svg from "@/assets/images/brand/brand-8.svg";
import brand7Svg from "@/assets/images/brand/brand-7.svg";
import brand11Svg from "@/assets/images/brand/brand-11.svg";
import brand9Svg from "@/assets/images/brand/brand-9.svg";


export default function ClientTwo() {
  return (
    <section className="clients-soft2 pt-110 pb-110">
      <div className="container container-soft2">
        <div className="row">
          <h2 className="section-title wow fadeIn">
            Join the 10,000 happy teams already using Landpagy!
          </h2>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.1s">
              <Image src={brand6Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.3s">
              <Image src={brand7Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.5s">
              <Image src={brand8Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.7s">
              <Image src={brand9Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.9s">
              <Image src={brand10Svg} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="1.1s">
              <Image src={brand11Svg} alt="brand" />
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
