import React from "react";

export default function Pagination() {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item active" aria-current="page">
          <span className="page-link">1</span>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            <i className="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
