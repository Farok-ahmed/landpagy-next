import Image from "next/image";
import clientsShape from "@/assets/images/home_7/shapes/clients-shape.png";
import clientsLogo1 from "@/assets/images/home_7/brands/clients-logo1.png";
import clientsLogo2 from "@/assets/images/home_7/brands/clients-logo2.png";
import clientsLogo3 from "@/assets/images/home_7/brands/clients-logo3.png";
import clientsLogo4 from "@/assets/images/home_7/brands/clients-logo4.png";
import clientsLogo5 from "@/assets/images/home_7/brands/clients-logo5.png";
import clientsLogo6 from "@/assets/images/home_7/brands/clients-logo6.png";
;

export default function ClientThree() {
  return (
    <section className="clients-banner-area pt-110 pb-110">
      <div className="shape">
        <Image src={clientsShape} alt="" />
      </div>
      <div className="container container-soft2">
        <div className="row align-items-center">
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="0.1s"
            >
              <Image src={clientsLogo1} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <Image src={clientsLogo2} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <Image src={clientsLogo3} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="0.7s"
            >
              <Image src={clientsLogo4} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="0.9s"
            >
              <Image src={clientsLogo5} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div
              className="clients-image wow fadeInRight"
              data-wow-delay="1.1s"
            >
              <Image src={clientsLogo6} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
