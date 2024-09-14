import React, { useEffect } from "react";
import GLightbox from "glightbox";

export default function HelpDoc() {
  useEffect(() => {
    // eslint-disable-next-line
    let lightbox = GLightbox({
      selector: ".play-buttons",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  return (
    <section className="block-area section-padding-xl">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-9">
            <div className="block-heading">
              <div className="block-icon">
                <img src="/images/shape/shape-5.svg" alt="Shape" />
              </div>
              <div className="block-title">
                <h2>Getting Started</h2>
                <span>
                  Everything you need to get up and running on Landpagy.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="block-thum">
              <img src="/images/thumb.png" alt="Thumb" />
              <a
                href="https://youtu.be/WdS4Z5Kfjgw"
                className="play-buttons"
                data-fancybox
              >
                <img src="/images/play-button.png" alt="Play Button" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="block-item-wrapper">
              <div className="block-article">
                <div className="block-icon">
                  <img src="/images/shape/shape17.svg" alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <a href="/">How to getting started with Landpagy</a>
                  </h4>
                  <div className="meta-teg">
                    <span>product guide</span>
                  </div>
                </div>
              </div>
              <div className="block-article">
                <div className="block-icon">
                  <img src="/images/shape/shape17.svg" alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <a href="/">How to use code and webhooks?</a>
                  </h4>
                  <div className="meta-teg">
                    <span>Help doc</span>
                    <span>
                      <a href="/">Create Lands</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="block-article">
                <div className="block-icon">
                  <img src="/images/shape/shape17.svg" alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <a href="/">
                      How do you Understand tasks at the same time?
                    </a>
                  </h4>
                  <div className="meta-teg">
                    <span>Help doc</span>
                    <span>
                      <a href="/">Manage Lands</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="block-article">
                <div className="block-icon">
                  <img src="/images/shape/shape17.svg" alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <a href="/">
                      How do you identify key concepts in research?
                    </a>
                  </h4>
                  <div className="meta-teg">
                    <span>Help doc</span>
                    <span>
                      <a href="/">Create Lands</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="block-article">
                <div className="block-icon">
                  <img src="/images/shape/shape17.svg" alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <a href="/">What is a lands management system?</a>
                  </h4>
                  <div className="meta-teg">
                    <span>Help doc</span>
                    <span>
                      <a href="/">Manage Lands</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="block-article">
                <div className="block-icon">
                  <img src="/images/shape/shape17.svg" alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <a href="/">How to getting started with Landpagy</a>
                  </h4>
                  <div className="meta-teg">
                    <span>Help doc</span>
                    <span>
                      <a href="/">Account & Billing</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
