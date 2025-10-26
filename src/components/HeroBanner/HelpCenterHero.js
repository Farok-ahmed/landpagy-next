import Image from "next/image";
import helpCenterShape from "@/assets/images/shape/help-center-shape.png";
import helpCenterShape2 from "@/assets/images/shape/help-center-shape2.png";
import helpCenterShape3 from "@/assets/images/shape/help-center-shape3.png";
import helpCenterShape4 from "@/assets/images/shape/help-center-shape4.png";
import shape16 from "@/assets/images/shape/shape16.svg";
;

export default function HelpCenterHero() {
  return (
    <section className="banner-area help-page-banner">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="banner-left">
              <h1>How can we help you?</h1>
              <form className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email to book demo"
                />
                <button type="submit" className="btn btn-red">
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <ul className="popular-article">
                <li className="mr-1">Popular help articles:</li>
                <li>
                  <a href="/">Create Lands,</a>
                </li>
                <li>
                  <a href="/">Understand tasks,</a>
                </li>
                <li>
                  <a href="/">Troubleshoot error codes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Image src={helpCenterShape} className="help-center-shape"
        
        alt="" />
      <Image src={helpCenterShape2} className="help-center-shape2"
        
        alt="" />
      <Image src={helpCenterShape3} className="help-center-shape3"
        
        alt="" />
      <Image src={helpCenterShape4} className="help-center-shape4"
        
        alt="" />
      <Image src={shape16} className="shape16 animate__animated wow animate__fadeInTopLeft animate__slow"
        
        alt="" />
    </section>
  );
}
