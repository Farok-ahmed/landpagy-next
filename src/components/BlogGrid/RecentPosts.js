import Link from "next/link";
import React from "react";

export default function RecentPosts() {
  return (
    <div className="recent-news-widget mb-50">
      <h4 className="widget-title">Reacent News</h4>
      <div className="news-item">
        <img src="/images/blog/news1.png" alt="" />
        <div className="news-body">
          <Link href="/blog-details">
            <h5 className="news-title">
              Is It Worth Buying A Premium Form Builder.
            </h5>
          </Link>
          <p className="news-date">
            <i className="far fa-calendar-alt"></i>January 14, 2020
          </p>
        </div>
      </div>
      <div className="news-item">
        <img src="/images/blog/news2.png" alt="" />
        <div className="news-body">
          <Link href="/blog-details">
            <h5 className="news-title">10 Classic Summer Vacations</h5>
          </Link>
          <p className="news-date">
            <i className="far fa-calendar-alt"></i>January 14, 2020
          </p>
        </div>
      </div>
      <div className="news-item">
        <img src="/images/blog/news3.png" alt="" />
        <div className="news-body">
          <Link href="/blog-details">
            <h5 className="news-title">
              How To Easily Add weForms Widget Using Elementor
            </h5>
          </Link>
          <p className="news-date">
            <i className="far fa-calendar-alt"></i>January 14, 2020
          </p>
        </div>
      </div>
      <div className="news-item">
        <img src="/images/blog/news4.png" alt="" />
        <div className="news-body">
          <Link href="/blog-details">
            <h5 className="news-title">
              How to Create GDPR Consent Form In WordPress
            </h5>
          </Link>
          <p className="news-date">
            <i className="far fa-calendar-alt"></i>January 14, 2020
          </p>
        </div>
      </div>
    </div>
  );
}
