import React from "react";

export default function JobSummary() {
  return (
    <div className="right-sidebar-widget sticky_sidebar_widget">
      <div className="single-sidebar-widget mt-25 widget-border">
        <div className="widget-title">
          <h5>Job Summary</h5>
        </div>
        <div className="widget-content pt-15 pb-25 pr-25 pl-25">
          <ul>
            <li>
              <span className="name">Published on:</span>
              <span className="value">31 Jan 2021</span>
            </li>
            <li>
              <span className="name">Vacancy:</span>
              <span className="value">Not specific</span>
            </li>
            <li>
              <span className="name">Employment Status:</span>
              <span className="value">Full-time</span>
            </li>
            <li>
              <span className="name">Experience:</span>
              <span className="value">2 to 3 year(s)</span>
            </li>
            <li>
              <span className="name">Age:</span>
              <span className="value">Age at most 28 years</span>
            </li>
            <li>
              <span className="name">Job Location:</span>
              <span className="value">Dhaka</span>
            </li>
            <li>
              <span className="name">Salary:</span>
              <span className="value">Negotiable</span>
            </li>
            <li>
              <span className="name">Application Deadline:</span>
              <span className="value">17 Feb 2021</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
