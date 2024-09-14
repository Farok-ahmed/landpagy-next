import React from "react";

export default function SocialLinks() {
  return (
    <div className="social-link-widget mb-55">
      <div className="social-item">
        <a href="/">
          <img
            src="/images/blog/facebook-icon.svg"
            alt="Facebook Icon"
            className="social-icon"
          />
          <h6 className="item-number">815.5K</h6>
          <p className="item-title">Fans</p>
        </a>
      </div>
      <div className="social-item">
        <a href="/">
          <img
            src="/images/blog/twitter-icon.svg"
            alt="Twitter Icon"
            className="social-icon"
          />
          <h6 className="item-number">107.2K</h6>
          <p className="item-title">Followers</p>
        </a>
      </div>
      <div className="social-item">
        <a href="/">
          <img
            src="/images/blog/youtube-icon.svg"
            alt="Youtube Icon"
            className="social-icon"
          />
          <h6 className="item-number">90.6K</h6>
          <p className="item-title">Subscribers</p>
        </a>
      </div>
    </div>
  );
}
