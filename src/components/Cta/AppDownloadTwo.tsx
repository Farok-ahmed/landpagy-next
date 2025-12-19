import Image from "next/image";
import Link from "next/link";

import ctaImg1 from "@/assets/images/home_10/cta-img1.svg";
import ctaImg2 from "@/assets/images/home_10/cta-img2.svg";
import ctaImg3 from "@/assets/images/home_10/cta-img3.svg";
import ctaImg4 from "@/assets/images/home_10/cta-img4.svg";
import ctaImg5 from "@/assets/images/home_10/cta-img5.svg";
;

export default function AppDownloadTwo({ hasSpace }: { hasSpace?: boolean }) {
  return (
    <section className="app-cta-area">
      <div className="container">
        <div
         className={`app-cta-bg ${
            hasSpace ? "mt-80 mb-80 mt-lg-150 mb-lg-150" : ""
          }`}
        >
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="app-cta-content">
                <h2 className="cta-title cloud-heading-2 mb-60">
                  Join the revolution. Download the app today!
                </h2>
                <Link href="/" className="app-store-link">
                  <i className="fab fa-google-play"></i>
                  <p>
                    <span>GET IT ON</span>Google Play
                  </p>
                </Link>
                <Link href="/" className="app-store-link ml-25">
                  <i className="fab fa-apple"></i>
                  <p>
                    <span>Available on the</span>Apple Store
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="app-cta-images">
                <Image src={ctaImg1} alt="Decorative image"
                 className="img"
                  />
                <Image src={ctaImg2} alt="Decorative image"
                 className="img"
                  />
                <Image src={ctaImg3} alt="Decorative image"
                 className="img"
                  />
                <Image src={ctaImg4} alt="Decorative image"
                 className="img"
                  />
                <Image src={ctaImg5} alt="Decorative image"
                 className="img"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
