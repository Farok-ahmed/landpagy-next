import Image from "next/image";
import Link from "next/link";

import allInApp from "@/assets/images/home_3/all-in-app.png";
;

export default function AppDownload() {
  return (
    <section className="mobile-app-area">
      <div className="container">
        <div className="row align-items-center gy-4 gy-lg-0">
          <div className="col-md-6 mx-auto">
            <Image src={allInApp} alt="" />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <h2>All-in-one mobile app</h2>
            <p className="content">
              No more juggling between various apps. Increase your produc
              -tivity and boost your client relationship by managing your
              Customers, Finances, and Support right from your pocket.
            </p>
            <Link href="/" className="app-store-link">
              <i className="fab fa-apple"></i>
              <p>
                <span>Available on the</span>Apple Store
              </p>
            </Link>
            <Link href="/" className="app-store-link ml-25">
              <i className="fab fa-google-play"></i>
              <p>
                <span>Android App On</span>Google Play
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
