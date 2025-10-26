import Image from "next/image";
import shape10 from "@/assets/images/shape/shape10.svg";
import shape11 from "@/assets/images/shape/shape11.svg";
;

export default function HelpCenterCta() {
  return (
    <section className="cta-area cta-area-two section-padding bg-red-150">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center pb-0">
              <h2 className="mt-n4 font-bold">
                Can’t find what you’re looking for?
              </h2>
              <button type="submit" className="btn btn-red mt-16">
                Open a Support Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      <span className="shape9"></span>
      <span className="shape12"></span>
      <Image src={shape10} className="shape10 d-none d-lg-block"
        
        alt="Shape" />
      <Image src={shape11} className="shape11 d-none d-lg-block"
        
        alt="Shape" />
    </section>
  );
}
