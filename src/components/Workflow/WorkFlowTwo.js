"use client";
import feature5 from "@/assets/images/features/feature-5.png";
import features8 from "@/assets/images/features/features-8.png";
import features9 from "@/assets/images/features/features-9.png";
import useGsapReveal from "@/hooks/useGsapReveal";
import Image from "next/image";


export default function WorkFlowTwo() {
  const sectionRef = useGsapReveal({ animation: 'fadeInUp', duration: 0.8 });
  
  return (
    <section ref={sectionRef} className="features-area-five section-padding">
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
