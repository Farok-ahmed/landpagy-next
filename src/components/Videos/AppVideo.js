import React, { useEffect } from "react";
import GLightbox from "glightbox";

export default function AppVideo() {
  useEffect(() => {
    // eslint-disable-next-line
    let lightbox = GLightbox({
      selector: ".play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  return (
    <section className="app-video-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="app-video-wrapp">
              <a
                className="play-btn"
                href="https://www.youtube.com/watch?v=eNrCEqucHb4"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
