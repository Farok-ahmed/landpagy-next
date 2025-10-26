import Image from "next/image";
import service1 from "@/assets/images/services/service1.png";
import service2 from "@/assets/images/services/service2.png";
import service3 from "@/assets/images/services/service3.png";
import service4 from "@/assets/images/services/service4.png";


export default function ServiceList() {
  return (
    <section className="services-wrapp-area pt-130">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center section-title">
              <span>Our services</span>
              <h2>We’v been providing our services with proud since 2001.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container items-wrapp">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="services-img">
              <Image src={service1} alt="Service " />
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-content">
              <button className="item-btn">Mobile App</button>
              <h3 className="item-title">Mobile Application Design & Dev.</h3>
              <p className="item-text">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <div className="services-content">
              <button className="item-btn">UI/UX</button>
              <h3 className="item-title">Web Application Development</h3>
              <p className="item-text">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-img">
              <Image src={service2} alt="Service " />
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="services-img">
              <Image src={service3} alt="Service " />
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-content">
              <button className="item-btn">Wordpress</button>
              <h3 className="item-title">E-Commerce Development</h3>
              <p className="item-text">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <div className="services-content">
              <button className="item-btn">Marketing</button>
              <h3 className="item-title">Social & Online Marketing.</h3>
              <p className="item-text">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-img">
              <Image src={service4} alt="Service " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
