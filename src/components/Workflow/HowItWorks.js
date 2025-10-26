import Image from "next/image";
import serviceIcon1 from "@/assets/images/home_8/icons/service-icon1.svg";
import serviceIcon2 from "@/assets/images/home_8/icons/service-icon2.svg";
import serviceIcon3 from "@/assets/images/home_8/icons/service-icon3.svg";


export default function HowItWorks() {
  return (
    <section className="billing-services-area pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2
              className="services-title wow fadeInDown text-center mb-50"
              data-wow-delay="0.2s"
            >
              How it Works
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="services-item wow fadeInLeft" data-wow-delay="0.2s">
              <Image src={serviceIcon1} alt="" />
              <h3 className="service-item-title">Interchange fees</h3>
              <p className="service-item-text">
                Any business that allows customers to make purchases with
                credit/debit cards will have to pay interchange fees.
              </p>
              <a href="/" className="btn service-btn">
                Learn more <i className="arrow_right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-sm-0 mt-5">
            <div className="services-item wow fadeInDown" data-wow-delay="0.2s">
              <Image src={serviceIcon2} alt="" />
              <h3 className="service-item-title">Our Corporate</h3>
              <p className="service-item-text">
                Since the global financial crisis, the use of spending review
                has risen dramatically across the Landpagey.
              </p>
              <a href="/" className="btn service-btn">
                Learn more <i className="arrow_right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-lg-0 mt-5 mx-auto">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <Image src={serviceIcon3} alt="" />
              <h3 className="service-item-title">European Regulation</h3>
              <p className="service-item-text">
                Understand your growth, churn, and retention rates with
                automatically generated reports.
              </p>
              <a href="/" className="btn service-btn">
                Learn more <i className="arrow_right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
