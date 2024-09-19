"use client";
import React from "react";
import CountUp from "react-countup";

export default function AppCounter() {
  return (
    <section className="app-counter-area pt-100 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="app-counter-item">
              <img
                className="icon"
                src="/images/home_10/icons/icon4.svg"
                alt="Icon"
              />
              <p className="item-amout">
                <span className="counter">
                  <CountUp start={0} end={22} delay={1} duration={2.5} />
                </span>
                k +
              </p>
              <p className="item-title">Active Users</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="app-counter-item">
              <img
                className="icon"
                src="/images/home_10/icons/icon5.svg"
                alt="Icon"
              />
              <p className="item-amout">
                <span className="counter">
                  {" "}
                  <CountUp start={0} end={22} delay={1} duration={2.5} />
                </span>
                k +
              </p>
              <p className="item-title">Total Download</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="app-counter-item">
              <img
                className="icon"
                src="/images/home_10/icons/icon6.svg"
                alt="Icon"
              />
              <p className="item-amout">
                <span className="counter">
                  <CountUp start={0} end={22} delay={1} duration={2.5} />
                </span>
                k +
              </p>
              <p className="item-title">Customars</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="app-counter-item">
              <img
                className="icon"
                src="/images/home_10/icons/icon7.svg"
                alt="Icon"
              />
              <p className="item-amout">
                <span className="counter">
                  <CountUp start={0} end={130} delay={1} duration={2.5} />
                </span>
              </p>
              <p className="item-title">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
