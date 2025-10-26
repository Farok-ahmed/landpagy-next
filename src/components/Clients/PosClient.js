import Image from "next/image";
import brand6 from "@/assets/images/brand/brand-6.svg";
import brand7 from "@/assets/images/brand/brand-7.svg";
import brand8 from "@/assets/images/brand/brand-8.svg";
import brand9 from "@/assets/images/brand/brand-9.svg";
import brand10 from "@/assets/images/brand/brand-10.svg";
import brand11 from "@/assets/images/brand/brand-11.svg";
;

export default function PosClient() {
  return (
    <section className="clients-area pt-135">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="section-title-center">
              <h2 className="wow fadeInUp">You are in good company</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Over 15,000+ companies across 89 countries use landpagy POS
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.1s">
              <Image src={brand6} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.3s">
              <Image src={brand7} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.5s">
              <Image src={brand8} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.7s">
              <Image src={brand9} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.9s">
              <Image src={brand10} alt="brand" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="1.1s">
              <Image src={brand11} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
