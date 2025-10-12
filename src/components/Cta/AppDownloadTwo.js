;

export default function AppDownloadTwo({ hasSpace }) {
  return (
    <section className="app-cta-area">
      <div className="container">
        <div
          className={`app-cta-bg ${
            hasSpace ? "mt-80 mb-80 mt-lg-150 mb-lg-150" : ""
          }`}
        >
          <div className="row align-items-center">
            <div className="col-lg-7 wow fadeInDown" data-wow-delay="0.2s">
              <div className="app-cta-content">
                <h2 className="cta-title cloud-heading-2 mb-60">
                  Join the revolution. Download the app today!
                </h2>
                <a
                  href="/"
                  className="app-store-link wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <i className="fab fa-google-play"></i>
                  <p>
                    <span>GET IT ON</span>Google Play
                  </p>
                </a>
                <a
                  href="/"
                  className="app-store-link ml-25 wow fadeInRight"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInRight",
                  }}
                >
                  <i className="fab fa-apple"></i>
                  <p>
                    <span>Available on the</span>Apple Store
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="app-cta-images">
                <img
                  src="/images/home_10/cta-img1.svg"
                  alt=""
                  className="img wow fadeInRight"
                  data-wow-delay="0.1s"
                />
                <img
                  src="/images/home_10/cta-img2.svg"
                  alt=""
                  className="img wow fadeInRight"
                  data-wow-delay="0.5s"
                />
                <img
                  src="/images/home_10/cta-img3.svg"
                  alt=""
                  className="img wow fadeInLeft"
                  data-wow-delay="0.7s"
                />
                <img
                  src="/images/home_10/cta-img4.svg"
                  alt=""
                  className="img wow fadeInDown"
                  data-wow-delay="0.9s"
                />
                <img
                  src="/images/home_10/cta-img5.svg"
                  alt=""
                  className="img wow fadeInDown"
                  data-wow-delay="0.3s"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
