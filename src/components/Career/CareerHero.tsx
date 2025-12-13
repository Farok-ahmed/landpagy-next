import Link from "next/link";
;

export default function CareerHero() {
  return (
    <section className="breadcrumb-area">
      <div
       className="breadcrumb-widget pt-100 pb-115"
        style={{ background: "url(/images/breadcrumb.png)" }}
      >
        <div className="container blog-grid-container">
          <div className="row pb-100 pb-sm-0">
            <div className="col-md-12">
              <div className="breadcrumb-content pt-170 pb-125">
                <h1>Build your Career</h1>
                <ul>
                  <li>
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <Link href="/">pages</Link>
                  </li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container blog-grid-container">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="floated-widget search-job">
              <div className="d-flex justify-content-between flex-wrap">
                <h4 className="mb-0">Search for jobs</h4>
                <p>25 Jobs available</p>
              </div>
              <div className="px-3">
                <div className="row search-box align-items-center py-2 mt-30 gy-md-0 gy-3">
                  <div className="col-lg-6 col-md-5 border-end">
                    <div className="input-field">
                      <span>
                        <i className="icon_toolbox_alt"></i>
                      </span>
                      <input
                       className="form-control"
                        type="text"
                        placeholder="Job title, keywords or company"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-field">
                      <span>
                        {" "}
                        <i className="icon_pin_alt"></i>
                      </span>
                      <input
                       className="form-control"
                        type="text"
                        placeholder="Town or region"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 text-md-end text-center pe-2">
                    <Link href="/" className="custom-btn theme-btn-primary_alt theme-btn">
                      Search
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
