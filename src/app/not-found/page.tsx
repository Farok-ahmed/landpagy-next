import Link from "next/link";
import Image from "next/image";
import shape1 from "@/assets/images/404/shape1.svg";
import shape2 from "@/assets/images/404/shape2.svg";
import shape3 from "@/assets/images/404/shape3.svg";
import shape4 from "@/assets/images/404/shape4.svg";
import shape5 from "@/assets/images/404/shape5.svg";
import shape6 from "@/assets/images/404/shape6.svg";
import shape7 from "@/assets/images/404/shape7.svg";
import shape8 from "@/assets/images/404/shape8.svg";
import _404 from "@/assets/images/404/404.svg";


export default function NotFoundPage() {
  return (
    <section className="wrapper-404 pt-180 pb-140">
      <div className="bg-shapes">
        <div className="shape">
          <Image src={shape1} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape2} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape3} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape4} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape5} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape6} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape7} alt="Shape" />
        </div>
        <div className="shape">
          <Image src={shape8} alt="Shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wrapp-404 text-center">
              <Image src={_404} className="mb-60 mx-auto"
                
                alt="404" />
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
