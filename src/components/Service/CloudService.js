
import CloudClient from "../Clients/CloudClient";
import Link from "next/link";

import Image from "next/image";
import shape8 from "@/assets/images/home_9/shapes/shape8.svg";
import desktop2 from "@/assets/images/home_9/desktop2.png";
import desktop3 from "@/assets/images/home_9/desktop3.png";
import desktop1 from "@/assets/images/home_9/desktop1.png";

export default function CloudService() {
  return (
    <section className="cloud-services-area pt-45 pb-110">
      <div className="container">
        <CloudClient />

        <div className="row">
          <div className="col-lg-12">
            <h2 className="services-title cloud-heading-2 animatable fadeInDown text-center mt-100 mb-55">
              Available on all Your {""}
              <span>
                Devices.
                <svg
                  width="211"
                  height="80"
                  viewBox="0 0 211 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="animatable draw"
                    d="M13.4125 23.3317C96.6483 -23.0858 247.523 12.0638 201.182 49.9753C164.751 79.7798 -5.43528 98.4048 1.5241 45.3019C5.74981 13.0581 151.13 -9.16318 195.064 28.4671"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div
              className="accordion-images wow fadeInLeft mt-30"
              data-wow-delay="0.3s"
            >
              <div className="img">
                <Image src={shape8} alt="" />
              </div>
              <div className="img">
                <Image src={desktop2} alt="" />
              </div>
              <div className="img">
                <Image src={desktop3} alt="" />
              </div>
              <Image src={desktop1} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="accordion accordion-flush cloud-accordion wow fadeInRight"
              id="accordionExample"
              data-wow-delay="0.3s"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".one"
                    aria-expanded="true"
                    aria-controls="cloud-collapseOne"
                  >
                    Desktop App
                  </button>
                </h2>
                <div
                  id="cloud-collapseOne"
                  className="accordion-collapse collapse show one"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Easy automated synchronization between your computer and
                      your Landpagy cloud. Available for Windows, Mac and Linux.
                    </p>
                    <Link href="/" className="btn-more">
                      {" "}
                      Learn more <i className="fas fa-arrow-right"></i>{" "}
                    </Link>
                    <Link href="/" className="btn-apple">
                      <i className="fab fa-apple"></i>
                    </Link>
                    <Link href="/" className="btn-windows">
                      <i className="fab fa-windows"></i>
                    </Link>
                    <Link href="/" className="btn-linux">
                      <i className="fab fa-linux"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".two"
                    aria-expanded="false"
                    aria-controls="cloud-collapseTwo"
                  >
                    Mobile Apps
                  </button>
                </h2>
                <div
                  id="cloud-collapseTwo"
                  className="accordion-collapse collapse two"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Easy automated synchronization between your computer and
                      your Landpagy cloud. Available for Windows, Mac and Linux.
                    </p>
                    <Link href="/" className="btn-more">
                      {" "}
                      Learn more <i className="fas fa-arrow-right"></i>{" "}
                    </Link>
                    <Link href="/" className="btn-apple">
                      <i className="fab fa-apple"></i>
                    </Link>
                    <Link href="/" className="btn-windows">
                      <i className="fab fa-windows"></i>
                    </Link>
                    <Link href="/" className="btn-linux">
                      <i className="fab fa-linux"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".three"
                    aria-expanded="false"
                    aria-controls="cloud-collapseThree"
                  >
                    Landpagy CMD
                  </button>
                </h2>
                <div
                  id="cloud-collapseThree"
                  className="accordion-collapse collapse three"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Easy automated synchronization between your computer and
                      your Landpagy cloud. Available for Windows, Mac and Linux.
                    </p>
                    <Link href="/" className="btn-more">
                      {" "}
                      Learn more <i className="fas fa-arrow-right"></i>{" "}
                    </Link>
                    <Link href="/" className="btn-apple">
                      <i className="fab fa-apple"></i>
                    </Link>
                    <Link href="/" className="btn-windows">
                      <i className="fab fa-windows"></i>
                    </Link>
                    <Link href="/" className="btn-linux">
                      <i className="fab fa-linux"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".four"
                    aria-expanded="false"
                    aria-controls="cloud-collapseFour"
                  >
                    Extensions
                  </button>
                </h2>
                <div
                  id="cloud-collapseFour"
                  className="accordion-collapse collapse four"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Easy automated synchronization between your computer and
                      your Landpagy cloud. Available for Windows, Mac and Linux.
                    </p>
                    <Link href="/" className="btn-more">
                      {" "}
                      Learn more <i className="fas fa-arrow-right"></i>{" "}
                    </Link>
                    <Link href="/" className="btn-apple">
                      <i className="fab fa-apple"></i>
                    </Link>
                    <Link href="/" className="btn-windows">
                      <i className="fab fa-windows"></i>
                    </Link>
                    <Link href="/" className="btn-linux">
                      <i className="fab fa-linux"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".five"
                    aria-expanded="false"
                    aria-controls="cloud-collapseFive"
                  >
                    Landpagy bird
                  </button>
                </h2>
                <div
                  id="cloud-collapseFive"
                  className="accordion-collapse collapse five"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Easy automated synchronization between your computer and
                      your Landpagy cloud. Available for Windows, Mac and Linux.
                    </p>
                    <Link href="/" className="btn-more">
                      {" "}
                      Learn more <i className="fas fa-arrow-right"></i>{" "}
                    </Link>
                    <Link href="/" className="btn-apple">
                      <i className="fab fa-apple"></i>
                    </Link>
                    <Link href="/" className="btn-windows">
                      <i className="fab fa-windows"></i>
                    </Link>
                    <Link href="/" className="btn-linux">
                      <i className="fab fa-linux"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
