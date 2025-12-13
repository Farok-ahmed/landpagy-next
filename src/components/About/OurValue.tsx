import Image from "next/image";
import icon4 from "@/assets/images/icon/icon-4.svg";
import icon5 from "@/assets/images/icon/icon-5.svg";
import icon6 from "@/assets/images/icon/icon-6.svg";
import icon7 from "@/assets/images/icon/icon-7.svg";
;

export default function OurValue() {
  return (
    <section className="service-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="mt-n3 mt-md-n4">Our Value</h2>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="service-item">
              <Image src={icon4} className="service-icon"
                
                alt="Service Icon" />
              <h4>For Profit</h4>
              <p className="font-small">
                We're here every step of the way making sure you and your team
                deliver
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="service-item">
              <Image src={icon5} className="service-icon"
                
                alt="Service Icon" />
              <h4>For Purpose</h4>
              <p className="font-small">
                We're here every step of the way making sure you and your team
                deliver
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="service-item">
              <Image src={icon6} className="service-icon"
                
                alt="Service Icon" />
              <h4>Diverse Team</h4>
              <p className="font-small">
                We're here every step of the way making sure you and your team
                deliver
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="service-item">
              <Image src={icon7} className="service-icon"
                
                alt="Service Icon" />
              <h4>Better Everything</h4>
              <p className="font-small">
                We're here every step of the way making sure you and your team
                deliver
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
