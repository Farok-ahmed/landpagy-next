import Image from "next/image";
import Link from "next/link";

import feaImages1 from "@/assets/images/home_6/fea-images1.svg";
import feaImages2 from "@/assets/images/home_6/fea-images2.svg";
import feaImagesShape1 from "@/assets/images/home_6/fea-images-shape1.svg";
import feaImagesShape2 from "@/assets/images/home_6/fea-images-shape2.svg";
import feaShape1 from "@/assets/images/home_6/fea-shape1.svg";
import feaImagesShape3 from "@/assets/images/home_6/fea-images-shape3.svg";
import feaImages3 from "@/assets/images/home_6/fea-images3.svg";
import feaImagesShape4 from "@/assets/images/home_6/fea-images-shape4.svg";
import feaImages4 from "@/assets/images/home_6/fea-images4.svg";
;

export default function ProtoFeatureTwo() {
  return (
    <section className="features-area-14 pt-150 pb-150">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row mb-160">
          <div className="col-xl-7 col-lg-6">
            <div
             className="fea-item pr-50"
             
            >
              <p className="item-subtitle">Design tool</p>
              <h4 className="item-title">
                From wireframe to mockup in one click
              </h4>
              <p className="item-text pr-115">
                Disable wireframe mode at any time to render your project as a
                high-fidelity mockup. Test different styles instantly with the
                power
              </p>
              <Link href="/" className="btn btn-yellow">
                Explore Wireframe
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="fea-right">
              <div className="fea-images">
                <Image src={feaImages1} alt="" />
              </div>
              <div className="fea-images">
                <Image src={feaImages2} alt="" />
              </div>
              <div className="fea-images"></div>
              <div className="fea-images"></div>
              <div className="fea-images">
                <Image src={feaImagesShape1} alt="" />
              </div>
              <div className="fea-images">
                <Image src={feaImagesShape2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center mb-100">
          <div className="col-lg-6">
            <div className="fea-left">
              <div className="bg-shapes">
                <div className="fea-images"></div>
                <div className="fea-images">
                  <Image src={feaShape1} alt="" />
                </div>
                <div className="fea-images">
                  <Image src={feaImagesShape2} alt="" />
                </div>
                <div className="fea-images">
                  <Image src={feaImagesShape3} alt="" />
                </div>
              </div>
              <Image src={feaImages3} className="fea-left-img"
               
                
                alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
             className="fea-item ml-65"
             
            >
              <p className="item-subtitle">Beyond Prototype</p>
              <h4 className="item-title">
                Create rich, interactive prototypes.
              </h4>
              <p className="item-text">
                If you and your team prefer to first sketch your ideas with pen
                and paper, Uizard can automatically transform them into
                customizable screens for your project.
              </p>
              <Link href="/" className="btn btn-yellow">
                Create Prototype
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="fea-item">
              <p className="item-subtitle">Get feedback instantly</p>
              <h4 className="item-title">Real-time collaboration</h4>
              <p className="item-text pr-50">
                Collaborating with your team in Uizard is fast and easy. Simply
                share a link to your project and start designing interactive
                prototypes collaboratively straight from your web browser.
              </p>
              <Link href="/" className="btn btn-yellow">
                Collaborate Now
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="fea-right-two ml-15">
              <div className="bg-shapes">
                <div className="fea-images">
                  <Image src={feaImagesShape4} alt="" />
                </div>
                <div className="fea-images">
                  <Image src={feaShape1} alt="" />
                </div>
                <div className="fea-images">
                  <Image src={feaImagesShape1} alt="" />
                </div>
              </div>
              <Image src={feaImages4} className="fea-right-img"
               
                
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
