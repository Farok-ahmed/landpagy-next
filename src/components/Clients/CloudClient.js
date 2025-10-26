import React from "react";
import Image from "next/image";
import brand4Svg from "@/assets/images/brand/brand-4.svg";
import brand3Svg from "@/assets/images/brand/brand-3.svg";
import brand2Svg from "@/assets/images/brand/brand-2.svg";
import brand1Svg from "@/assets/images/brand/brand-1.svg";
import brand5Svg from "@/assets/images/brand/brand-5.svg";


export default function CloudClient() {
  return (
    <div className="row justify-content-center">
      <div className="w-50 w-md-20">
        <div className="client-image">
          <Image src={brand1Svg} alt="Brand " />
        </div>
      </div>
      <div className="w-50 w-md-20">
        <div className="client-image">
          <Image src={brand2Svg} alt="Brand " />
        </div>
      </div>
      <div className="w-50 w-md-20">
        <div className="client-image">
          <Image src={brand3Svg} alt="Brand " />
        </div>
      </div>
      <div className="w-50 w-md-20">
        <div className="client-image">
          <Image src={brand4Svg} alt="Brand " />
        </div>
      </div>
      <div className="w-50 w-md-20">
        <div className="client-image">
          <Image src={brand5Svg} alt="Brand " />
        </div>
      </div>
    </div>
  );
}
