import Image from "next/image";
import feaIcon1 from "@/assets/images/home_5/icons/fea-icon1.svg";
import feaIcon2 from "@/assets/images/home_5/icons/fea-icon2.svg";
import feaIcon3 from "@/assets/images/home_5/icons/fea-icon3.svg";
import feaIcon4 from "@/assets/images/home_5/icons/fea-icon4.svg";
import feaIcon5 from "@/assets/images/home_5/icons/fea-icon5.svg";
import feaIcon6 from "@/assets/images/home_5/icons/fea-icon6.svg";
import feaIcon7 from "@/assets/images/home_5/icons/fea-icon7.svg";
import feaIcon8 from "@/assets/images/home_5/icons/fea-icon8.svg";
;

export default function PosFeatureGroup() {
  return (
    <section className="features-area-twelve pt-135 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="section-title-center mb-35">
              <h2 className="wow fadeInUp">Perfect POS Software</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Start, run & grow your retail business with Landpagy POS
                software for most retail stores
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon1} alt=""
                className="features-icon mx-auto mb-10" />
              <a href="/" className="features-name">
                Clothing store
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon2} alt=""
                className="features-icon mx-auto mb-10" />
              <a href="/" className="features-name">
                Coffee shop
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon3} alt=""
                className="features-icon mx-auto mb-10" />
              <a href="/" className="features-name">
                Furniture store
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon4} alt=""
                className="features-icon mx-auto mb-10" />
              <a href="/" className="features-name">
                Jewelry store
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon5} alt=""
                className="features-icon mx-auto mb-10" />
              <a href="/" className="features-name">
                Food truck
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon6} alt=""
                className="features-icon mx-auto mb-10" />
              <a href="/" className="features-name">
                Gift store
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon7} alt=""
                className="features-icon mx-auto mb-10" />
              <a href="/" className="features-name">
                Pet store
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="features-item text-center">
              <Image src={feaIcon8} alt=""
                className="features-icon mx-auto mb-10" />
              <a href="/" className="features-name">
                Retail examples
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
