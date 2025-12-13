import Image from "next/image";
import brand6 from "@/assets/images/brand/brand-6.svg";
import brand7 from "@/assets/images/brand/brand-7.svg";
import brand8 from "@/assets/images/brand/brand-8.svg";
import brand9 from "@/assets/images/brand/brand-9.svg";
import brand10 from "@/assets/images/brand/brand-10.svg";
import brand11 from "@/assets/images/brand/brand-11.svg";
;

export default function ProtoClient() {
  return (
    <section className="clients-area clients-area-2 pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title-center">
              <h2 className="section-heading">
                Used by individuals and teams at the world's biggest companies
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-sm-4">
            <div className="client-image">
              <Image src={brand6} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image">
              <Image src={brand7} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image">
              <Image src={brand8} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image">
              <Image src={brand9} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image">
              <Image src={brand10} alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image">
              <Image src={brand11} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
