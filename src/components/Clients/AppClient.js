import Image from "next/image";
import border from "@/assets/images/home_10/shapes/border.svg";
import brand1 from "@/assets/images/brand/brand-1.svg";
import brand2 from "@/assets/images/brand/brand-2.svg";
import brand3 from "@/assets/images/brand/brand-3.svg";
import brand4 from "@/assets/images/brand/brand-4.svg";
import brand5 from "@/assets/images/brand/brand-5.svg";
;

export default function AppClient() {
  return (
    <section className="app-clients-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2
              className="text-center app-clients-title cloud-heading-2 mb-35 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <span>
                Trusted
                <Image src={border} className="border-shape"
                  
                  alt="Border" />
              </span>
              {""} by Companies
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.1s">
              <Image src={brand1} alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.3s">
              <Image src={brand2} alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.5s">
              <Image src={brand3} alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.7s">
              <Image src={brand4} alt="Brand " />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image wow fadeInLeft" data-wow-delay="0.9s">
              <Image src={brand5} alt="Brand " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
