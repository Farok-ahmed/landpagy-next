import React from "react";
import Image from "next/image";
import clientsLogo4Png from "@/assets/images/home_7/brands/clients-logo4.png";
import clientsLogo6Png from "@/assets/images/home_7/brands/clients-logo6.png";
import clientsLogo5Png from "@/assets/images/home_7/brands/clients-logo5.png";
import clientsLogo1Png from "@/assets/images/home_7/brands/clients-logo1.png";
import clientsLogo2Png from "@/assets/images/home_7/brands/clients-logo2.png";
import clientsLogo3Png from "@/assets/images/home_7/brands/clients-logo3.png";


export default function ClientThree() {
  return (
    <section className="clients-banner-area pt-110 pb-110">
      <div className="shape">
        <img src=".//images/home_7/shapes/clients-shape.png" alt="" />
      </div>
      <div className="container container-soft2">
        <div className="row align-items-center">
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="0.1s"
            >
              <Image src={clientsLogo1Png} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <Image src={clientsLogo2Png} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <Image src={clientsLogo3Png} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="0.7s"
            >
              <Image src={clientsLogo4Png} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="0.9s"
            >
              <Image src={clientsLogo5Png} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="1.1s"
            >
              <Image src={clientsLogo6Png} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
