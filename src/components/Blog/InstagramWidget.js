import Image from "next/image";
import Link from "next/link";

import insta1 from "@/assets/images/blog/insta1.png";
import insta2 from "@/assets/images/blog/insta2.png";
import insta3 from "@/assets/images/blog/insta3.png";
import insta4 from "@/assets/images/blog/insta4.png";
import insta5 from "@/assets/images/blog/insta5.png";
import insta6 from "@/assets/images/blog/insta6.png";
;

export default function InstagramWidget() {
  return (
    <div className="instagram-widget">
      <h4 className="widget-title">Instragram</h4>
      <div className="instagram-items">
        <Link href="/" className="instagram-item">
          <Image src={insta1} alt="" />
        </Link>
        <Link href="/" className="instagram-item">
          <Image src={insta2} alt="" />
        </Link>
        <Link href="/" className="instagram-item">
          <Image src={insta3} alt="" />
        </Link>
        <Link href="/" className="instagram-item">
          <Image src={insta4} alt="" />
        </Link>
        <Link href="/" className="instagram-item">
          <Image src={insta5} alt="" />
        </Link>
        <Link href="/" className="instagram-item">
          <Image src={insta6} alt="" />
        </Link>
      </div>
    </div>
  );
}
