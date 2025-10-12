;

export default function DownloadHRM() {
  return (
    <section className="mobile-app-area-two pt-120 pb-120">
      <div className="bg-shapes">
        <div className="shape">
          <img src="/images/home_4/mobile-shape1.svg" alt="shape" />
        </div>
        <div className="shape">
          <img src="/images/home_4/mobile-shape2.svg" alt="shape" />
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-6">
            <div className="section-title-wrap">
              <h2 className="section-title wow fadeInUp">
                Ridiculously easy to use. Anywhere, Anytime.
              </h2>
              <p
                className="section-title-para wow fadeInUp"
                data-wow-delay="0.2s"
              >
                The intuitive mobile app allows employees and managers to learn
                how to use the app quickly.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-6">
            <div className="store-wrap text-md-end">
              <a
                href="/"
                className="app-store-link wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                <i className="fab fa-google-play"></i>
                <p>
                  <span>GET IT ON</span>Google Play
                </p>
              </a>
              <a
                href="/"
                className="app-store-link ms-lg-4 ms-0 mt-lg-0 mt-3 wow fadeInRight"
                data-wow-delay="0.4s"
              >
                <i className="fab fa-apple"></i>
                <p>
                  <span>Available on the</span>Apple Store
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
