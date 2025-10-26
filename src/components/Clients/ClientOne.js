import Image from "next/image";
import brand1 from "@/assets/images/brand/brand-1.svg";
import brand2 from "@/assets/images/brand/brand-2.svg";
import brand3 from "@/assets/images/brand/brand-3.svg";
import brand4 from "@/assets/images/brand/brand-4.svg";
import brand5 from "@/assets/images/brand/brand-5.svg";
;

export default function ClientOne() {
  return (
    <section className="client-area">
      <div className="container">
        <div className="client-wrapper">
          <div className="row">
            <div className="col-12">
              <div className="client-text">
                <h4 className="mt-n3">
                  <span>3000+ Companies</span> Trust Sturtaplanding to build
                  landing page for their <span>dream product</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="w-50 w-md-20">
              <div className="client-image">
                <Image src={brand1} alt="Brand " />
              </div>
            </div>
            <div className="w-50 w-md-20">
              <div className="client-image">
                <Image src={brand2} alt="Brand " />
              </div>
            </div>
            <div className="w-50 w-md-20">
              <div className="client-image">
                <Image src={brand3} alt="Brand " />
              </div>
            </div>
            <div className="w-50 w-md-20">
              <div className="client-image">
                <Image src={brand4} alt="Brand " />
              </div>
            </div>
            <div className="w-50 w-md-20">
              <div className="client-image">
                <Image src={brand5} alt="Brand " />
              </div>
            </div>
          </div>
          <div className="client-meta">
            <ul className="client-review-icon">
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
            </ul>
            <div className="client-review-number">
              <span>4.9</span> Stars
            </div>
            <div className="client-review">
              <span>5121+</span> Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
