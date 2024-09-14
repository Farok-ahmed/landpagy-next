import React from "react";

export default function JobCategory() {
  return (
    <div className="single-sidebar-widget mt-60 widget-border">
      <div className="catagory-list-widget">
        <div className="widget-title">
          <h5>Job Category</h5>
        </div>
        <div className="widget-content">
          <ul className="catagory-list py-3">
            <li className="catagory-item">
              <a href="/" className="catagory-link active">
                <span className="text">All Category</span>
                <span className="number">(25)</span>
              </a>
            </li>
            <li className="catagory-item">
              <a href="/" className="catagory-link">
                <span className="text">Administration</span>
                <span className="number">(05)</span>
              </a>
            </li>
            <li className="catagory-item">
              <a href="/" className="catagory-link">
                <span className="text">Asset Management</span>
                <span className="number">(03)</span>
              </a>
            </li>
            <li className="catagory-item">
              <a href="/" className="catagory-link">
                <span className="text">Accounts Officer</span>
                <span className="number">(04)</span>
              </a>
            </li>
            <li className="catagory-item">
              <a href="/" className="catagory-link">
                <span className="text">Branch Banking</span>
                <span className="number">(10)</span>
              </a>
            </li>
            <li className="catagory-item">
              <a href="/" className="catagory-link">
                <span className="text">Technology</span>
                <span className="number">(03)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
