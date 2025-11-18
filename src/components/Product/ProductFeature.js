import Image from "next/image";
import Link from "next/link";

import checkmark from "@/assets/images/icon/checkmark.svg";
import allInApp from "@/assets/images/home_3/all-in-app.png";
import icon1 from "@/assets/images/home_10/icons/icon1.svg";
import icon2 from "@/assets/images/home_10/icons/icon2.svg";
import feaImages2 from "@/assets/images/home_6/fea-images2.svg";
;

export default function ProductFeature() {
  return (
    <section className="product-box-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product-boxxes-wrapper">
              <div className="shadow-lg product-box-copy top">
                <div className="product-hero-box-left">
                  <h2 className="box-title">
                    Everything you need in one package
                  </h2>
                  <p>
                    A touch screen terminal with the latest payment technology
                    and minimalistic design.
                  </p>

                  <div className="product-hero-box-pointers">
                    <ul>
                      <li>
                        <div className="product-tab-checkmark">
                          <Image src={checkmark} alt="" />
                        </div>
                        <div className="product-tab-pointer-text">
                          <div className="text-block _16-px full-white">
                            built in thermal printer
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="product-tab-checkmark">
                          <Image src={checkmark} alt="" />
                        </div>
                        <div className="product-tab-pointer-text">
                          WiFi connectivity
                        </div>
                      </li>
                      <li>
                        <div className="product-tab-checkmark">
                          <Image src={checkmark} alt="" />
                        </div>
                        <div className="product-tab-pointer-text">
                          mobile SIM card plan
                        </div>
                      </li>
                      <li>
                        <div className="product-tab-checkmark">
                          <Image src={checkmark} alt="" />
                        </div>
                        <div className="product-tab-pointer-text">
                          10h battery life
                        </div>
                      </li>
                      <li>
                        <div className="product-tab-checkmark">
                          <Image src={checkmark} alt="" />
                        </div>
                        <div className="product-tab-pointer-text">
                          5-inch HD touch screen
                        </div>
                      </li>
                      <li>
                        <div className="product-tab-checkmark">
                          <Image src={checkmark} alt=""
                           className="image contain" />
                        </div>
                        <div className="product-tab-pointer-text">
                          built in thermal printer
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Link href="/" className="btn btn-red">
                    Get Our POS
                  </Link>
                </div>
                <div className="produ">
                  <Image src={allInApp} alt="" />
                </div>
              </div>
              <div className="shadow-lg product-box-copy copy">
                <div className="product-hero-box-left">
                  <h2 className="box-title">Alwalys ready</h2>
                  <p>
                    The device is ready to use right out of the box and always
                    up to date with automatic updates.
                  </p>
                  <div className="product-hero-box-pointers">
                    <div className="product-hero-box-pointer-item">
                      <div className="product-features-img">
                        <Image src={icon1} alt="" />
                      </div>
                      <h5 className="product-hero-box-pointer-title">
                        Phone Support
                      </h5>
                      <p>Need some support? Don’t hesitate to call us!</p>
                    </div>
                    <div className="product-hero-box-pointer-item">
                      <div className="product-features-img">
                        <Image src={icon2} alt="" />
                      </div>
                      <h5 className="product-hero-box-pointer-title">
                        Remote Updates
                      </h5>
                      <p>Will keep your POS software up to date.</p>
                    </div>
                  </div>
                  <Link href="/" className="btn btn-red">
                    Start Selling
                  </Link>
                </div>
                <div className="product-hero-box-2">
                  <Image src={feaImages2} alt="" />
                </div>
              </div>
              <div className="product-dotted-line down"></div>
              <div className="product-circle down">
                <div className="product-inside-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
