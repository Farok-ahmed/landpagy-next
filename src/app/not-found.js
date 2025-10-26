import error404Svg from "@/assets/images/404/404.svg";
import shape1Svg from "@/assets/images/404/shape1.svg";
import shape2Svg from "@/assets/images/404/shape2.svg";
import shape3Svg from "@/assets/images/404/shape3.svg";
import shape4Svg from "@/assets/images/404/shape4.svg";
import shape5Svg from "@/assets/images/404/shape5.svg";
import shape6Svg from "@/assets/images/404/shape6.svg";
import shape7Svg from "@/assets/images/404/shape7.svg";
import shape8Svg from "@/assets/images/404/shape8.svg";
import Image from "next/image";
import Link from "next/link";


export default function NotFound() {
  return (
    <section className="wrapper-404 pt-180 pb-140">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={shape1Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape2Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape3Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape4Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape5Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape6Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape7Svg} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape8Svg} alt="Shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wrapp-404 text-center">
              <Image
                className="mb-60 mx-auto"
                src={error404Svg}
                alt="404"
              />
              <p className="text-404 mb-50">
                We’re sorry the page you’re looking for seems lost in the space
              </p>
              <Link href="/" className="btn btn-red">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
