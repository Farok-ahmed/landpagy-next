import Image from "next/image";
import brand1 from "@/assets/images/brand/brand-1.svg";
import brand2 from "@/assets/images/brand/brand-2.svg";
import brand3 from "@/assets/images/brand/brand-3.svg";
import brand4 from "@/assets/images/brand/brand-4.svg";
import brand5 from "@/assets/images/brand/brand-5.svg";
;

export default function ClientBilling() {
  return (
    <section className="billing-clients-area pt-105 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p
             className="clients-text text-center mb-65"
             
            >
              trusted by more than <span>600 companies</span> around the globe
            </p>
          </div>
        </div>
        <div className="row mr-60 ml-60">
          <div className="client-img">
            <Image src={brand1} alt="Decorative image" />
          </div>
          <div className="client-img">
            <Image src={brand2} alt="Decorative image" />
          </div>
          <div className="client-img">
            <Image src={brand3} alt="Decorative image" />
          </div>
          <div className="client-img">
            <Image src={brand4} alt="Decorative image" />
          </div>
          <div className="client-img">
            <Image src={brand5} alt="Decorative image" />
          </div>
        </div>
      </div>
    </section>
  );
}
