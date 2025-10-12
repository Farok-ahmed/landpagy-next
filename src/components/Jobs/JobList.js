import Link from "next/link";
;

export default function JobList() {
  return (
    <div className="job-post-widget">
      <div className="mt-4 sidebar-header d-flex justify-content-between align-items-center mt-lg-0">
        <div className="sidebar-title">
          <h4 className="wow fadeInRight">25 job offers</h4>
        </div>

        <div className="sorting-select wow fadeInLeft me-1">
          <select id="sort-select" className="nice-select-common">
            <option defaultValue="SortBy Newest">SortBy Newest</option>
            <option defaultValue="SortBy Oldest">SortBy Oldest</option>
            <option defaultValue="SortBy Popular">SortBy Popular</option>
            <option defaultValue="SortBy Trending">SortBy Trending</option>
          </select>
        </div>
      </div>

      <div className="single-job-post me-1 wow fadeInUp mt-25">
        <div className="post-header">
          <div>
            <h6 className="job-title">
              <Link href="/job-details">Manager- Products & Marketing</Link>
            </h6>
            <div className="flex-wrap d-flex">
              <div className="job-location me-lg-3 me-2">
                <i className="icon_pin_alt"></i>NY, United States
              </div>
              <div className="job-catagory">
                <span>Branch Banking</span> | Full-time
              </div>
            </div>
          </div>
          <div className="timestamp">Jan 30, 2021</div>
        </div>
        <div className="post-content">
          <p>
            As a Teller at Capital you are the face of the credit union. It's
            more than just processing financial transactions. It's building
            lasting relationships and helping others to ...
          </p>
        </div>
      </div>
      <div
        className="single-job-post me-1 wow fadeInUp mt-25"
        data-wow-delay="0.1s"
      >
        <div className="post-header">
          <div>
            <h6 className="job-title">
              <Link href="/job-details">
                Officer Admin and Finance (LRS Position)
              </Link>
            </h6>
            <div className="flex-wrap d-flex">
              <div className="job-location me-lg-3 me-2">
                <i className="icon_pin_alt"></i>NY, United States
              </div>
              <div className="job-catagory">
                <span>Administration</span> | Full-time
              </div>
            </div>
          </div>
          <div className="timestamp">Jan 30, 2021</div>
        </div>
        <div className="post-content">
          <p>
            As a Teller at Capital you are the face of the credit union. It's
            more than just processing financial transactions. It's building
            lasting relationships and helping others to ...
          </p>
        </div>
      </div>

      <div
        className="single-job-post me-1 wow fadeInUp mt-25"
        data-wow-delay="0.3s"
      >
        <div className="post-header">
          <div>
            <h6 className="job-title">
              <Link href="/job-details">
                Head of Information and Technology
              </Link>
            </h6>
            <div className="flex-wrap d-flex">
              <div className="job-location me-lg-3 me-2">
                <i className="icon_pin_alt"></i>NY, United States
              </div>
              <div className="job-catagory">
                <span>Technology</span> | Full-time
              </div>
            </div>
          </div>
          <div className="timestamp">Jan 30, 2021</div>
        </div>
        <div className="post-content">
          <p>
            As a Teller at Capital you are the face of the credit union. It's
            more than just processing financial transactions. It's building
            lasting relationships and helping others to ...
          </p>
        </div>
      </div>
      <div
        className="single-job-post me-1 wow fadeInUp mt-25"
        data-wow-delay="0.5s"
      >
        <div className="post-header">
          <div>
            <h6 className="job-title">
              <Link href="/job-details">Assistant Accounts Officer</Link>
            </h6>
            <div className="flex-wrap d-flex">
              <div className="job-location me-lg-3 me-2">
                <i className="icon_pin_alt"></i>NY, United States
              </div>
              <div className="job-catagory">
                <span>Accounts Officer</span> | Full-time
              </div>
            </div>
          </div>
          <div className="timestamp">Jan 30, 2021</div>
        </div>
        <div className="post-content">
          <p>
            As a Teller at Capital you are the face of the credit union. It's
            more than just processing financial transactions. It's building
            lasting relationships and helping others to ...
          </p>
        </div>
      </div>
      <div
        className="single-job-post me-1 wow fadeInUp mt-25"
        data-wow-delay="0.6s"
      >
        <div className="post-header">
          <div>
            <h6 className="job-title">
              <Link href="/job-details">
                Manager- Products & Marketing, Retail Business
              </Link>
            </h6>
            <div className="flex-wrap d-flex">
              <div className="job-location me-lg-3 me-2">
                <i className="icon_pin_alt"></i>NY, United States
              </div>
              <div className="job-catagory">
                <span>Administration</span> | Full-time
              </div>
            </div>
          </div>
          <div className="timestamp">Jan 30, 2021</div>
        </div>
        <div className="post-content">
          <p>
            As a Teller at Capital you are the face of the credit union. It's
            more than just processing financial transactions. It's building
            lasting relationships and helping others to ...
          </p>
        </div>
      </div>
      <div
        className="single-job-post me-1 wow fadeInUp mt-25"
        data-wow-delay="0.7s"
      >
        <div className="post-header">
          <div>
            <h6 className="job-title">
              <Link href="/job-details">
                Assistant Branch Manager II (Senior)
              </Link>
            </h6>
            <div className="flex-wrap d-flex">
              <div className="job-location me-lg-3 me-2">
                <i className="icon_pin_alt"></i>NY, United States
              </div>
              <div className="job-catagory">
                <span>Branch Banking</span> | Full-time
              </div>
            </div>
          </div>
          <div className="timestamp">Jan 30, 2021</div>
        </div>
        <div className="post-content">
          <p>
            As a Teller at Capital you are the face of the credit union. It's
            more than just processing financial transactions. It's building
            lasting relationships and helping others to ...
          </p>
        </div>
      </div>
      <div
        className="single-job-post me-1 wow fadeInUp mt-25"
        data-wow-delay="0.8s"
      >
        <div className="post-header">
          <div>
            <h6 className="job-title">
              <Link href="/job-details">
                Manager- Products & Marketing, Retail Business
              </Link>
            </h6>
            <div className="flex-wrap d-flex">
              <div className="job-location me-lg-3 me-2">
                <i className="icon_pin_alt"></i>NY, United States
              </div>
              <div className="job-catagory">
                <span>Branch Banking</span> | Full-time
              </div>
            </div>
          </div>
          <div className="timestamp">Jan 30, 2021</div>
        </div>
        <div className="post-content">
          <p>
            As a Teller at Capital you are the face of the credit union. It's
            more than just processing financial transactions. It's building
            lasting relationships and helping others to ...
          </p>
        </div>
      </div>
      <div
        className="single-job-post me-1 wow fadeInUp mt-25"
        data-wow-delay="0.9s"
      >
        <div className="post-header">
          <div>
            <h6 className="job-title">
              <Link href="/job-details">
                Accounts Payable/Receivable Manager
              </Link>
            </h6>
            <div className="flex-wrap d-flex">
              <div className="job-location me-lg-3 me-2">
                <i className="icon_pin_alt"></i>NY, United States
              </div>
              <div className="job-catagory">
                <span>Accounts Officer</span> | Full-time
              </div>
            </div>
          </div>
          <div className="timestamp">Jan 30, 2021</div>
        </div>
        <div className="post-content">
          <p>
            As a Teller at Capital you are the face of the credit union. It's
            more than just processing financial transactions. It's building
            lasting relationships and helping others to ...
          </p>
        </div>
      </div>

      <div className="text-center mt-70 wow fadeInUp">
        <a href="/" className="btn">
          More jobs
        </a>
      </div>
    </div>
  );
}
