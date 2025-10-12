"use client";
;
import { Parallax } from "react-scroll-parallax";

export default function BlogBreadcrumb() {
  return (
    <section className="blog-banner-area">
      <div className="banner-shapes">
        <div className="shape">
          <Parallax
            translateX={["-500px", "0px"]}
            translateY={["500px", "0px"]}
            rotateY={[0, 0]}
          >
            <img src="/images/blog/banner-shape1.svg" alt="" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["500px", "0px"]}
            translateY={["-500px", "0px"]}
            rotateY={[0, 0]}
          >
            <img src="/images/blog/banner-shape2.svg" alt="" />
          </Parallax>
        </div>
        <div className="shape">
          <Parallax
            translateX={["-500px", "0px"]}
            translateY={["500px", "0px"]}
            rotateY={[0, 0]}
          >
            <img src="/images/blog/banner-shape3.svg" alt="" />
          </Parallax>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="banner-title">Blog</h1>

            <form className="form-group">
              <input type="search" placeholder="Search for topic..." />
              <button type="submit" className="btn btn-red">
                Search
              </button>

              <div className="mt-20 search-tags">
                <span className="tags-label">Popular Categories:</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Development Tips</a>
                  </li>
                  <li>
                    <a href="/">Product Update</a>
                  </li>
                  <li>
                    <a href="/">Case Study</a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
