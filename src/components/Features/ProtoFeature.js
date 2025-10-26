import Image from "next/image";
import feaIcon1 from "@/assets/images/home_6/fea-icon1.svg";
import feaIcon2 from "@/assets/images/home_6/fea-icon2.svg";
import feaIcon3 from "@/assets/images/home_6/fea-icon3.svg";
import feaIcon4 from "@/assets/images/home_6/fea-icon4.svg";
import feaIcon5 from "@/assets/images/home_6/fea-icon5.svg";
import feaIcon6 from "@/assets/images/home_6/fea-icon6.svg";
;

export default function ProtoFeature() {
  return (
    <section className="more-features-area bg-proto pt-135 pb-120">
      <div className="container">
        <div className="row">
          <div className="section-title-center pb-80">
            <h2 className="wow fadeInUp">More reasons to love landpagy</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="fea-item text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h4 className="item-title">Get your essential integrations</h4>
              <Image src={feaIcon1} className="mx-auto"
                
                alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="fea-item text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h4 className="item-title">Support for any device</h4>
              <Image src={feaIcon2} className="mx-auto"
                
                alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="fea-item text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h4 className="item-title">Import content from web</h4>
              <Image src={feaIcon3} className="mx-auto"
                
                alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="fea-item text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h4 className="item-title">Smart masking option</h4>
              <Image src={feaIcon4} className="mx-auto"
                
                alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="fea-item text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h4 className="item-title">Reusable components</h4>
              <Image src={feaIcon5} className="mx-auto"
                
                alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="fea-item text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h4 className="item-title">CSS variables checker</h4>
              <Image src={feaIcon6} className="mx-auto"
                
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
