import Image from "next/image";
import award1 from "@/assets/images/about_2/icons/award1.svg";
import award2 from "@/assets/images/about_2/icons/award2.svg";
import award3 from "@/assets/images/about_2/icons/award3.svg";
;

export default function AwardArea() {
  return (
    <section className="award-area">
      <div className="fact-area">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="fact-inner text-center">
              <h2 className="section-title">Fast Facts</h2>
              <p className="section-para">
                Some of key highlights of Intuit history, awards, and financial
                information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="award-item-area">
        <div className="container">
          <div className="row gy-md-0 gy-5">
            <div className="col-md-4">
              <div className="award-item text-center">
                <div className="item-img">
                  <Image src={award1} className="mx-auto"
                    
                    alt="" />
                </div>
                <p className="item-text">
                  Ranked 11 on Fortune's 100 best companies to work.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="award-item text-center">
                <div className="item-img">
                  <Image src={award2} className="mx-auto"
                    
                    alt="" />
                </div>
                <p className="item-text">
                  People Magazine Companies awards for services.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="award-item text-center">
                <div className="item-img">
                  <Image src={award3} className="mx-auto"
                    
                    alt="" />
                </div>
                <p className="item-text">
                  Forbes America’s 2019 best employers for diversity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
