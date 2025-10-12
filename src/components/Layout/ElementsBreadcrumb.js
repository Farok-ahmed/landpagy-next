;

export default function ElementsBreadcrumb({ title, description, wider }) {
  return (
    <section className="process-banner-area pt-150 pb-150">
      <img
        className="shape"
        src="/images/about_2/shape/about-shape.png"
        alt="shapes"
      />
      <div className="container">
        <div className="row">
          {wider ? (
            <div className="col-lg-10 offset-lg-1 text-center">
              <h1
                className="banner-title wow fadeInUp mt-100 mb-20"
                data-wow-delay="0.1s"
              >
                {title}
              </h1>
              <p className="banner-text wow fadeInUp" data-wow-delay="0.3s">
                {description}
              </p>
            </div>
          ) : (
            <div className="col-lg-8 offset-lg-2">
              <h1
                className="banner-title text-center wow fadeInUp mt-100"
                data-wow-delay="0.1s"
              >
                {title}
              </h1>
              {description && (
                <p className="banner-text wow fadeInUp" data-wow-delay="0.3s">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
