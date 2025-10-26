import Image from "next/image";
import logo from "@/assets/images/logo/logo.png";
import logo2 from "@/assets/images/logo/logo-2.png";
import logo3 from "@/assets/images/logo/logo-3.png";
import logo4 from "@/assets/images/logo/logo-4.png";
import logo5 from "@/assets/images/logo/logo-5.png";
;

export default function IntegrationOne() {
  return (
    <section className="logo-grid-area wow fadeInUp animate__fast">
      <div className="container-fluid">
        <div className="logo-grid-wrapper">
          <div className="row flex-column-reverse flex-lg-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title-left">
                <h2 className="mt-n3">Connected to the tools you love</h2>
                <span>Easy way to integrate</span>
                <p>
                  We're here every step of the way making sure you and your team
                  deliver. We're here every step of the way making sure you and
                  your team deliver
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="logo-grid">
                <div className="row no-gutters">
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item">
                      <Image src={logo} alt="Logo grid " />
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item">
                      <Image src={logo2} alt="Logo grid " />
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item">
                      <Image src={logo3} alt="Logo grid " />
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item">
                      <Image src={logo4} alt="Logo grid " />
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item">
                      <Image src={logo5} alt="Logo grid " />
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item">
                      <Image src={logo} alt="Logo grid " />
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item">
                      <Image src={logo2} alt="Logo grid " />
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item">
                      <Image src={logo3} alt="Logo grid " />
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item">
                      <Image src={logo4} alt="Logo grid " />
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item">
                      <Image src={logo2} alt="Logo grid " />
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item">
                      <Image src={logo5} alt="Logo grid " />
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-4">
                    <div className="logo-grid-item logo-grid-text">
                      <h3 className="text-red m-auto">+30</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
