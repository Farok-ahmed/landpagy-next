import Image from "next/image";
import Link from "next/link";

import featuresImg from "@/assets/images/home_9/features-img.png";
import shape9 from "@/assets/images/home_9/shapes/shape9.svg";
import right from "@/assets/images/home_9/shapes/right.svg";
;

export default function CloudFeature() {
  return (
    <section className="cloud-features-area pt-130 pb-135">
      <div className="container">
        <div className="row">
          <div className="text-center col-lg-12">
            <h2 className="mb-10 features-title cloud-heading-2">
              Secure. {""}
              <span>
                Private.
                <svg
                  width="208"
                  height="73"
                  viewBox="0 0 208 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                   className="animatable draw"
                    d="M14.3309 16.756C98.2165 -21.285 245.261 19.7412 198.052 52.0475C160.938 77.4454 -7.37435 84.8951 1.70571 36.333C7.21908 6.84625 151.264 -5.33622 192.932 31.8679"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>
              {""} Simple to use.
            </h2>
            <p className="mx-auto features-title-text mb-65">
              A functional and intuitive interface with a variety of different
              customizations and features, such as encrypted file sharing.
            </p>
            <div className="features-images position-relative">
              <Image src={featuresImg} alt=""
               className="mx-auto mb-40 features-img" />
              <Image src={shape9} alt="Shape"
               className="shape" />
            </div>
            <Link href="/" className="features-btn">
              {" "}
              Learn more{" "}
              <Image src={right} className="icon"
                
                alt="Icon" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
