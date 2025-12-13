import Image from "next/image";
import brand1 from "@/assets/images/brand/brand-1.svg";
import brand2 from "@/assets/images/brand/brand-2.svg";
import brand3 from "@/assets/images/brand/brand-3.svg";
import brand4 from "@/assets/images/brand/brand-4.svg";
import brand5 from "@/assets/images/brand/brand-5.svg";
;

export default function CloudClient() {
  return (
    <div className="row justify-content-center">
      <div className="w-50 w-md-20">
        <div className="client-image">
          <Image src={brand1} alt="Brand " />
        </div>
      </div>
      <div className="w-50 w-md-20">
        <div className="client-image">
          <Image src={brand2} alt="Brand " />
        </div>
      </div>
      <div className="w-50 w-md-20">
        <div className="client-image">
          <Image src={brand3} alt="Brand " />
        </div>
      </div>
      <div className="w-50 w-md-20">
        <div className="client-image">
          <Image src={brand4} alt="Brand " />
        </div>
      </div>
      <div className="w-50 w-md-20">
        <div className="client-image">
          <Image src={brand5} alt="Brand " />
        </div>
      </div>
    </div>
  );
}
