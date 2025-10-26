import React from "react";
import Image from "next/image";
import insta2Png from "@/assets/images/blog/insta2.png";
import insta5Png from "@/assets/images/blog/insta5.png";
import insta6Png from "@/assets/images/blog/insta6.png";
import insta4Png from "@/assets/images/blog/insta4.png";
import insta3Png from "@/assets/images/blog/insta3.png";
import insta1Png from "@/assets/images/blog/insta1.png";


export default function InstagramWidget() {
  return (
    <div className="instagram-widget">
      <h4 className="widget-title">Instragram</h4>
      <div className="instagram-items">
        <a href="/" className="instagram-item">
          <Image src={insta1Png} alt="" />
        </a>
        <a href="/" className="instagram-item">
          <Image src={insta2Png} alt="" />
        </a>
        <a href="/" className="instagram-item">
          <Image src={insta3Png} alt="" />
        </a>
        <a href="/" className="instagram-item">
          <Image src={insta4Png} alt="" />
        </a>
        <a href="/" className="instagram-item">
          <Image src={insta5Png} alt="" />
        </a>
        <a href="/" className="instagram-item">
          <Image src={insta6Png} alt="" />
        </a>
      </div>
    </div>
  );
}
