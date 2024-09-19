"use client";
import React from "react";
import Tippy from "@tippyjs/react";

export default function ContactMap() {
  const locations = [
    { id: 1, country: "United States", address: "102 street 1234 Don" },
    { id: 2, country: "United States", address: "102 street 1234 Don" },
    { id: 3, country: "United States", address: "102 street 1234 Don" },
    { id: 4, country: "United States", address: "102 street 1234 Don" },
    { id: 5, country: "United States", address: "102 street 1234 Don" },
    { id: 6, country: "United States", address: "102 street 1234 Don" },
  ];
  return (
    <section className="map-area section-padding-xl bg-white-800">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="map">
              <div className="map-image">
                <img src="/images/map.svg" alt="Map" />
              </div>
              {locations.map((location) => (
                <div key={location.id} className="map-marking-item">
                  <div className="map-marking-point">
                    <Tippy
                      content={
                        <div id="map" className="tippy-box map-address">
                          <div className="tippy-content d-flex align-items-center">
                            <div className="flag">
                              <img src="/images/flag.png" alt="Flag" />
                            </div>
                            <div className="address-info">
                              <h6>{location.country}</h6>
                              <span>{location.address}</span>
                            </div>
                          </div>
                        </div>
                      }
                      placement="top"
                      trigger="click"
                    >
                      <div className="marking-point"></div>
                    </Tippy>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
