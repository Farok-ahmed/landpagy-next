import Image from "next/image";
import Link from "next/link";

import shape18 from "@/assets/images/shape/shape18.svg";
;

export default function HelpFeature() {
  return (
    <section className="features-area-nine section-padding-xl bg-white-600">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="mt-n4">Featured Articles</h2>
              <span>
                Everything you need to get up and running on Landpagy.
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="features-item">
              <Image src={shape18} alt="Icon" />
              <h4>
                <Link href="/">Update Landpagy newses to the latest release</Link>
              </h4>
              <hr />
              <p>
                Landpagy automatically updates itself by default but you can
                always do a manual update. Learn how to...
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="features-item">
              <Image src={shape18} alt="Icon" />
              <h4>
                <Link href="/">
                  Secure connection failed & Landpagy did not connect
                </Link>
              </h4>
              <hr />
              <p>
                Landpagy automatically updates itself by default but you can
                always do a manual update. Learn how to...
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="features-item">
              <Image src={shape18} alt="Icon" />
              <h4>
                <Link href="/">Insecure password warning in Landpagy</Link>
              </h4>
              <hr />
              <p>
                Landpagy automatically updates itself by default but you can
                always do a manual update. Learn how to...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
