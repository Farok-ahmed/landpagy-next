import React from "react";

export default function LinkShare() {
  return (
    <ul className="share-link">
      <li>
        <span>Share Now</span>
      </li>
      <li>
        <a href="/">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
    </ul>
  );
}
