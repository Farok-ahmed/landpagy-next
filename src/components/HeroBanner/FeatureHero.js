import banner from "@/assets/images/banner/banner.png";
import Image from "next/image";
;

export default function FeatureHero() {
  return (
    <section className="banner-area feature-banner">
      <div className="container">
        <div className="row flex-sm-row flex-column-reverse">
          <div className="col-md-6">
            <div className="section-title-left">
              <h2>Simplify your project management.</h2>
              <p>
                We're here every step of the way making sure you and your team
                deliver. We're here every step of the way making sure you and
                your team deliver
              </p>
              <button type="submit" className="btn btn-red">
                Book A Demo
              </button>
            </div>
          </div>
          <div className="mb-8 col-md-6 d-xl-none">
            <div className="banner-right-image">
              <Image src={banner} alt="Illustrator " />
            </div>
          </div>
        </div>
        <div className="banner-right-two d-none d-xl-block">
          <Image src={banner} alt="Illustrator " />
        </div>
      </div>
    </section>
  );
}
