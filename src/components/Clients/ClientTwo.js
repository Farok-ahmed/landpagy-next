import Link from "next/link";
;

export default function ClientTwo() {
  return (
    <section className="clients-soft2 pt-110 pb-110">
      <div className="container container-soft2">
        <div className="row">
          <h2 className="section-title wow fadeIn">
            Join the 10,000 happy teams already using Landpagy!
          </h2>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.1s">
              <img src="/images/brand/brand-6.svg" alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.3s">
              <img src="/images/brand/brand-7.svg" alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.5s">
              <img src="/images/brand/brand-8.svg" alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.7s">
              <img src="/images/brand/brand-9.svg" alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="0.9s">
              <img src="/images/brand/brand-10.svg" alt="brand" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="client-image wow fadeInRight" data-wow-delay="1.1s">
              <img src="/images/brand/brand-11.svg" alt="brand" />
            </div>
          </div>
        </div>

        <div className="client-meta">
          <ul className="client-review-icon">
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
          </ul>
          <div className="client-review-number">
            <span>4.9</span> Stars
          </div>
          <div className="client-review">
            <span>5121+</span> Reviews
          </div>
        </div>

        <div className="text-center row">
          <Link className="customer-more" href="/testimonials">
            More customer stories <i className="arrow_right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
