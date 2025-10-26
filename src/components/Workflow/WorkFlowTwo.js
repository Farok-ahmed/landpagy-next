import Image from "next/image";
import feature5 from "@/assets/images/features/feature-5.png";
import features8 from "@/assets/images/features/features-8.png";
import features9 from "@/assets/images/features/features-9.png";


export default function WorkFlowTwo() {
  return (
    <section className="features-area-five section-padding wow fadeInUp animate__fast">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 className="mt-n4">Move work forward from anywhere</h2>
            </div>
            <div className="feature-image">
              <Image src={feature5} alt="Features " />
              <Image src={features8} alt="Features "
                className="features8" />
              <Image src={features9} alt="Features "
                className="features9" />
              <p>
                We're here every step of the way making sure you and your team
                deliver. We're here every step of the way making sure you and
                your team deliver
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
