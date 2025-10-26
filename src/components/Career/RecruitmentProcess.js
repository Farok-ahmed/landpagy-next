import Image from "next/image";
import Link from "next/link";

import icon1 from "@/assets/images/recruitment-proccess/icon-1.svg";
import icon2 from "@/assets/images/recruitment-proccess/icon-2.svg";
import icon3 from "@/assets/images/recruitment-proccess/icon-3.svg";
import icon4 from "@/assets/images/recruitment-proccess/icon-4.svg";
;

export default function RecruitmentProcess() {
  return (
    <section className="recruitment-procces bg_disable pt-120 pb-100">
      <div className="container blog-grid-container">
        <div className="section-title text-start">
          <h2 className="wow fadeInUp">Learn our recruitment process</h2>
          <p className="wow fadeInUp" data-wow-delay="0.3s">
            Recruitment is a process of finding and attracting the potential
            resources for filling up the vacant positions in an organization. It
            sources the candidates with the abilities and attitude, which are
            required for achieving the objectives of an organization.
          </p>
        </div>

        <div className="row pt-60 pb-100 gy-4 gy-lg-0">
          <div className="col-md-6 col-lg-3">
            <div
              className="feature-card-widget-2 wow fadeInUp text-start py-5"
              data-wow-delay="0.1s"
            >
              <Image src={icon1} className="img-fluid"
                
                alt="icon svg" />
              <h4>CV Submission</h4>
              <p>
                Submit your CV or resume through our online portal if you meet
                our requirements.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="feature-card-widget-2 wow fadeInUp text-start py-5"
              data-wow-delay="0.3s"
            >
              <Image src={icon2} className="img-fluid"
                
                alt="icon svg" />
              <h4>Phone Screening</h4>
              <p>
                After looking at your CV you will be inviled for a telephone
                interview session.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="feature-card-widget-2 wow fadeInUp text-start py-5"
              data-wow-delay="0.5s"
            >
              <Image src={icon3} className="img-fluid"
                
                alt="icon svg" />
              <h4>Skill Assessment</h4>
              <p>
                You will be invited at our head office to take a skills and
                knowledge assessment.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="feature-card-widget-2 wow fadeInUp text-start py-5"
              data-wow-delay="0.7s"
            >
              <Image src={icon4} className="img-fluid"
                
                alt="icon svg" />
              <h4>Final Interview</h4>
              <p>
                If you can pass all stages we will invite you for a final
                interview with our CEO.
              </p>
            </div>
          </div>
        </div>

        <div className="row our-offer gy-4 gy-md-0">
          <div className="col-md-6">
            <div
              className="single-offer-box wow fadeInRight"
              data-wow-delay="0.1s"
            >
              <h2>Our Offer</h2>
              <p>
                You will be invited at our head office to take a skills and
                knowledge assessment.
              </p>
              <Link href="/">
                <span>Read more</span> <i className="arrow_right"></i>
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="single-offer-box wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <h2>FAQ</h2>
              <p>
                Find the answers to frequently asked questions about working at
                AfrAsia.
              </p>
              <Link href="/">
                <span>Read more</span> <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
