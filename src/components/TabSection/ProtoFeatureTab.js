

const ProtoFeatureTab = () => {
  return (
    <section className="features-area-13 pt-135 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title-center">
              <h2 className="wow fadeInUp">Kick-start your next web project</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Pick a template and customize it with our powerful editor by
                adding or removing pages, blocks, and elements.
              </p>
            </div>
          </div>
        </div>

        <div className="row gy-4 gy-lg-0">
          <div className="col-lg-5">
            <div
              className="features-list nav-tabs nav automated-tab2"
              role="tablist"
            >
              <a
                href="/"
                className="nav-link active"
                aria-selected="true"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#proto-track-one"
                data-wow-delay="0.1s"
              >
                <span className="circle"></span> Ideations
              </a>
              <a
                href="/"
                className="nav-link"
                aria-selected="false"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#proto-track-two"
                data-wow-delay="0.3s"
              >
                <span className="circle"></span> Import & Export
              </a>
              <a
                href="/"
                className="nav-link"
                aria-selected="false"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#proto-track-three"
                data-wow-delay="0.5s"
              >
                <span className="circle"></span> Visualize fast
              </a>
              <a
                href="/"
                className="nav-link"
                aria-selected="false"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#proto-track-four"
                data-wow-delay="0.5s"
              >
                <span className="circle"></span> User Testing
              </a>
            </div>
          </div>
          <div className="col-lg-7 ps-lg-0">
            <div className="features-right tab-content ml-90">
              <div
                className="tab-pane fade show active"
                id="proto-track-one"
                role="tabpanel"
              >
                <div className="main-img" data-wow-delay="0.1s">
                  <img
                    className="fea-img"
                    src="/images/home_6/fea-img.jpg"
                    alt="Ideations"
                  />
                  <div className="features-shapes">
                    <div className="shape">
                      <img src="/images/home_6/fea-shape1.svg" alt="Shape1" />
                    </div>
                    <div className="shape">
                      <img src="/images/home_6/fea-shape2.svg" alt="Shape2" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="proto-track-two"
                role="tabpanel"
              >
                <div className="main-img" data-wow-delay="0.1s">
                  <img
                    className="fea-img"
                    src="/images/home_6/fea-img2.png"
                    alt="Import & Export"
                  />
                  <div className="features-shapes">
                    <div className="shape">
                      <img src="/images/home_6/fea-shape1.svg" alt="Shape1" />
                    </div>
                    <div className="shape">
                      <img src="/images/home_6/fea-shape2.svg" alt="Shape2" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="proto-track-three"
                role="tabpanel"
              >
                <div className="main-img" data-wow-delay="0.1s">
                  <img
                    className="fea-img"
                    src="/images/home_6/fea-img3.png"
                    alt="Visualize fast"
                  />
                  <div className="features-shapes">
                    <div className="shape">
                      <img src="/images/home_6/fea-shape1.svg" alt="Shape1" />
                    </div>
                    <div className="shape">
                      <img src="/images/home_6/fea-shape2.svg" alt="Shape2" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="proto-track-four"
                role="tabpanel"
              >
                <div className="main-img" data-wow-delay="0.1s">
                  <img
                    className="fea-img"
                    src="/images/home_6/fea-img2.png"
                    alt="User Testing"
                  />
                  <div className="features-shapes">
                    <div className="shape">
                      <img src="/images/home_6/fea-shape1.svg" alt="Shape1" />
                    </div>
                    <div className="shape">
                      <img src="/images/home_6/fea-shape2.svg" alt="Shape2" />
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
};

export default ProtoFeatureTab;
