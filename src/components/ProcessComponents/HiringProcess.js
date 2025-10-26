import Image from "next/image";
import shape11 from "@/assets/images/process/shape11.svg";
import shape12 from "@/assets/images/process/shape12.svg";
import shape13 from "@/assets/images/process/shape13.svg";
import shape14 from "@/assets/images/process/shape14.svg";
;

export default function HiringProcess() {
  return (
    <section className="process-area-2 overflow-hidden pt-55">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2
              className="heading-3 text-center mb-90 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              Hiring Made Easy
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="process-item-2 wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <Image src={shape11} className="line-1"
                
                alt="Shape" />
              <Image src={shape12} className="line-2"
                
                alt="Shape" />
              <span className="item-number">1</span>
              <h3 className="item-title">Talk to Our Industry Experts</h3>
              <p className="item-text">
                An expert on our team will work with you to understand your
                goals, technical needs, and team dynamics.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
            <div
              className="process-item-2 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <Image src={shape13} className="line-3"
                
                alt="Shape" />
              <span className="item-number">2</span>
              <h3 className="item-title">Work With Selected Talent</h3>
              <p className="item-text">
                Within days, we'll introduce you to the right talent for your
                project. Average time to match is under 24 hours.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-lg-0 mt-5 mx-auto">
            <div
              className="process-item-2 wow fadeInLeft"
              data-wow-delay="0.5s"
            >
              <Image src={shape14} className="line-4"
                
                alt="Shape" />
              <span className="item-number">3</span>
              <h3 className="item-title">The Right Fit, Guaranteed</h3>
              <p className="item-text">
                Work with your new team member on a trial basis (pay only if
                satisfied), ensuring you hire the right people for the job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
