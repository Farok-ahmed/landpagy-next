"use client";
import Image from "next/image";
import brand6 from "@/assets/images/brand/brand-6.svg";
import brand7 from "@/assets/images/brand/brand-7.svg";
import brand8 from "@/assets/images/brand/brand-8.svg";
import brand9 from "@/assets/images/brand/brand-9.svg";
import brand10 from "@/assets/images/brand/brand-10.svg";
import brand11 from "@/assets/images/brand/brand-11.svg";
;

import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function PosClient() {
  const clientRef1 = useGsapReveal({ animation: "fadeInUp" });
  const clientRef2 = useGsapReveal({ animation: "fadeInUp", delay: 0.1 });
  return (
    <section className="clients-area pt-135">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="section-title-center">
              <h2 className="">You are in good company</h2>
              <p className="">
                Over 15,000+ companies across 89 countries use landpagy POS
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-sm-4">
            <div className="client-image">
              <Image src={brand6} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image">
              <Image src={brand7} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image">
              <Image src={brand8} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image">
              <Image src={brand9} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image">
              <Image src={brand10} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image">
              <Image src={brand11} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
