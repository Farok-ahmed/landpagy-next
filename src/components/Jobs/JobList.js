"use client";
import Link from "next/link";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function JobList() {
  // GSAP animation refs
  const titleRef = useGsapReveal({ animation: 'fadeInRight' });
  const sortRef = useGsapReveal({ animation: 'fadeInLeft' });
  const job1Ref = useGsapReveal({ animation: 'fadeInUp' });
  const job2Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.1 });
  const job3Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.3 });
  const job4Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.5 });
  const job5Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.6 });
  const job6Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.7 });
  const job7Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.8 });
  const job8Ref = useGsapReveal({ animation: 'fadeInUp', delay: 0.9 });
  const moreJobsRef = useGsapReveal({ animation: 'fadeInUp' });

  return (
    <div className="job-post-widget">
      <div className="mt-4 sidebar-header d-flex justify-content-between align-items-center mt-lg-0">
        <div className="sidebar-title" ref={titleRef}>
          <h4>25 job offers</h4>
        </div>

        <div className="sorting-select me-1" ref={sortRef}>
          <select id="sort-select" className="nice-select-common">
            <option defaultValue="SortBy Newest">SortBy Newest</option>
            <option defaultValue="SortBy Oldest">SortBy Oldest</option>
            <option defaultValue="SortBy Popular">SortBy Popular</option>
            <option defaultValue="SortBy Trending">SortBy Trending</option>
          </select>
        </div>
      </div>

      <div className="single-job-post me-1 mt-25" ref={job1Ref}>
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
       className="single-job-post me-1 mt-25"
        ref={job2Ref}
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
       className="single-job-post me-1 mt-25"
        ref={job3Ref}
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
       className="single-job-post me-1 mt-25"
        ref={job4Ref}
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
       className="single-job-post me-1 mt-25"
        ref={job5Ref}
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
       className="single-job-post me-1 mt-25"
        ref={job6Ref}
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
       className="single-job-post me-1 mt-25"
        ref={job7Ref}
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
       className="single-job-post me-1 mt-25"
        ref={job8Ref}
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

      <div className="text-center mt-70" ref={moreJobsRef}>
        <Link href="/" className="btn">
          More jobs
        </Link>
      </div>
    </div>
  );
}
