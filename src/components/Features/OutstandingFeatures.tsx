import Image from "next/image";
import outFeature1 from "@/assets/images/home_2/out-feature-1.svg";
import outFeature2 from "@/assets/images/home_2/out-feature-2.svg";
import outFeature3 from "@/assets/images/home_2/out-feature-3.svg";
import outFeature4 from "@/assets/images/home_2/out-feature-4.svg";
;

export default function OutstandingFeatures() {
  return (
    <section className="outstanding-feature-area pt-80 pb-130">
      <div className="section-title-center">
        <h2>Outstanding Features</h2>
      </div>
      <div className="container pt-30">
        <div className="row gy-lg-0 gy-4">
          <div className="col-lg-3 col-md-6">
            <Image src={outFeature1} alt="img" />
            <h5>24/7 Support</h5>
            <p>
              We'll treat your customers like they're ours · We have an
              excellent team.
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <Image src={outFeature2} alt="img" />
            <h5>Tested Security</h5>
            <p>
              The tested Security here. To review and adjust your security
              settings.
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <Image src={outFeature3} alt="img" />
            <h5>Smart Dashboard</h5>
            <p>
              The Best Mobile App Awards honors the best mobile apps on iPhone,
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <Image src={outFeature4} alt="img" />
            <h5>XO Award 2021</h5>
            <p>
              The Best Mobile App Awards honors the best mobile apps on iPhone,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
