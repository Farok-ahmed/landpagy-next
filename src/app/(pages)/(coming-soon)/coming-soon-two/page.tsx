import Link from "next/link";
import Image from "next/image";
import shape1 from "@/assets/images/comming_soon/shape1.svg";
import shape2 from "@/assets/images/comming_soon/shape2.svg";
import shape3 from "@/assets/images/comming_soon/shape3.svg";
import shape4 from "@/assets/images/comming_soon/shape4.svg";
import shape5 from "@/assets/images/comming_soon/shape5.svg";
import logo5 from "@/assets/images/logo-5.svg";

export default function ComingSoonTwo() {
  return (
    <section className="comming-soon-wrapper comming-soon-2 pt-100">
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
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="comming-soon-inner">
              <Link href="/" className="logo">
                <Image src={logo5} alt="Logo" />
              </Link>

              <h1 className="page-title">COMING SOON</h1>
              <p className="title-text">
                Subscribe to the newslater to stay in the latest updates.
              </p>

              <form className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email to book demo"
                />
                <button type="submit" className="btn btn-red">
                  Submit
                </button>
              </form>

              <ul className="social-list">
                <li>
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
