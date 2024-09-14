import React from "react";
import { Link } from "react-router-dom";
import { demoLinks, elementsLinks, pagesLinks } from "../../../utils/data";

export default function CareerHeader() {
  return (
    <header className="header-area">
      <nav className="navbar navbar-expand-lg menu_three sticky-nav job-menu">
        <div className="container-fluid">
          <Link className="navbar-brand header_logo" to="/">
            <img className="main_logo" src="/images/logo.svg" alt="logo" />
            <img className="white_logo" src="/images/logo-5.svg" alt="logo" />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="menu_toggle">
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="hamburger-cross">
                <span></span>
                <span></span>
              </span>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <ul className="mx-auto navbar-nav menu">
              <li className="nav-item dropdown submenu mega-home ">
                <Link to="/" className="nav-link dropdown-toggle">
                  Home
                </Link>
                <i
                  className="arrow_carrot-right mobile_dropdown_icon"
                  aria-hidden="false"
                  data-bs-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu">
                  {demoLinks.map((item, index) => (
                    <li className={`nav-item `} key={index}>
                      <Link to={item.to} className="nav-link">
                        <img src={item.imgSrc} alt={item.alt} />
                        <span>{item.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown submenu ">
                <Link to="/" className="nav-link dropdown-toggle">
                  Pages
                </Link>
                <i
                  className="arrow_carrot-right mobile_dropdown_icon"
                  aria-hidden="false"
                  data-bs-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu">
                  {pagesLinks.pages.map((item, index) => (
                    <li
                      key={index}
                      className={`nav-item ${
                        item.submenu ? "dropdown submenu" : ""
                      }`}
                    >
                      {item.submenu ? (
                        <>
                          <a href="/" className="nav-link">
                            {item.name}
                          </a>
                          <i
                            className="arrow_carrot-right mobile_dropdown_icon"
                            aria-hidden="false"
                            data-bs-toggle="dropdown"
                          ></i>
                          <ul className="dropdown-menu">
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex} className="nav-item">
                                <Link to={subItem.link} className="nav-link">
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link to={item.link} className="nav-link">
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item dropdown submenu mega-menu ">
                <a href="/" className="nav-link dropdown-toggle">
                  Elements
                </a>
                <i
                  className="arrow_carrot-right mobile_dropdown_icon"
                  aria-hidden="false"
                  data-bs-toggle="dropdown"
                ></i>
                <ul className="container dropdown-menu">
                  {elementsLinks.container.map((item, index) => (
                    <li key={index} className="nav-item">
                      <a href="/" className="nav-link">
                        {item.name}
                      </a>
                      <i
                        className="arrow_carrot-right mobile_dropdown_icon"
                        aria-hidden="false"
                        data-bs-toggle="dropdown"
                      ></i>
                      <ul className="dropdown-menu">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="nav-item">
                            <Link to={subItem.link} className="nav-link">
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item dropdown submenu ">
                <Link to="/career" className="nav-link dropdown-toggle ">
                  Jobs
                </Link>
                <i
                  className="arrow_carrot-right mobile_dropdown_icon"
                  aria-hidden="false"
                  data-bs-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu">
                  <li className="nav-item ">
                    <Link to="/career" className="nav-link">
                      Career
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/jobs" className="nav-link">
                      Jobs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/job-details" className="nav-link">
                      Job Application
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown submenu ">
                <Link to="/" className="nav-link dropdown-toggle">
                  Blog
                </Link>
                <i
                  className="arrow_carrot-right mobile_dropdown_icon"
                  aria-hidden="false"
                  data-bs-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link to="/blog" className="nav-link">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog-details" className="nav-link">
                      Blog Single
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog-grid" className="nav-link">
                      Extended Grid
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="right-nav">
              <Link to="/" className="language-bar mr-50">
                <span className="active">En.</span> <span>Ru</span>
              </Link>
              <Link to="/sign-in">Sign in</Link>
              <Link className="btn btn-red" to="/sign-up">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
