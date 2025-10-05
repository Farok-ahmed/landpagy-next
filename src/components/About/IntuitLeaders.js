import React from "react";

export default function IntuitLeaders() {
  return (
    <section className="team-leader-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="section-title-left">
              <h2>Intuit Leaders</h2>
              <p>
                The executive leadership team is led by CEO EH Jewel succeeding
                Executive Chairman of the Board, Landpagy
              </p>
            </div>
          </div>
        </div>

        <div className="row gy-lg-0 gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="team-leader-item text-center">
              <div className="item-img">
                <img src="/images/about_2/leader1.png" alt="" />
              </div>
              <h4 className="item-title">EH Jewel</h4>
              <p className="item-sub-title">CEO, Spider Themes</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-leader-item text-center">
              <div className="item-img">
                <img src="/images/about_2/leader2.png" alt="" />
              </div>
              <h4 className="item-title">Mina Panna</h4>
              <p className="item-sub-title">HR Manager</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-leader-item text-center">
              <div className="item-img">
                <img src="/images/about_2/leader3.png" alt="" />
              </div>
              <h4 className="item-title">Ariful Haque</h4>
              <p className="item-sub-title">UX/UI Designer</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-leader-more">
              <div>
                <p className="item-name">Intuit Executive Leadership</p>
                <a href="/" className="item-link">
                  Learn More <i className="arrow_triangle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
