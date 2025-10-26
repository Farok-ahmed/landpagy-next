import React from "react";
import Image from "next/image";
import news3Png from "@/assets/images/blog/news3.png";
import news1Png from "@/assets/images/blog/news1.png";
import news2Png from "@/assets/images/blog/news2.png";
import news4Png from "@/assets/images/blog/news4.png";


export default function RecentNews() {
  return (
    <div className="recent-news-widget mb-50">
      <h4 className="widget-title">Reacent News</h4>
      <div className="news-item">
        <Image src={news1Png} alt="" />
        <div className="news-body">
          <a href="/">
            <h5 className="news-title">
              Is It Worth Buying A Premium Form Builder.
            </h5>
          </a>
          <p className="news-date">
            <i className="far fa-calendar-alt"></i>January 14, 2020
          </p>
        </div>
      </div>
      <div className="news-item">
        <Image src={news2Png} alt="" />
        <div className="news-body">
          <a href="/">
            <h5 className="news-title">10 Classic Summer Vacations</h5>
          </a>
          <p className="news-date">
            <i className="far fa-calendar-alt"></i>January 14, 2020
          </p>
        </div>
      </div>
      <div className="news-item">
        <Image src={news3Png} alt="" />
        <div className="news-body">
          <a href="/">
            <h5 className="news-title">
              How To Easily Add weForms Widget Using Elementor
            </h5>
          </a>
          <p className="news-date">
            <i className="far fa-calendar-alt"></i>January 14, 2020
          </p>
        </div>
      </div>
      <div className="news-item">
        <Image src={news4Png} alt="" />
        <div className="news-body">
          <a href="/">
            <h5 className="news-title">
              How to Create GDPR Consent Form In WordPress
            </h5>
          </a>
          <p className="news-date">
            <i className="far fa-calendar-alt"></i>January 14, 2020
          </p>
        </div>
      </div>
    </div>
  );
}
