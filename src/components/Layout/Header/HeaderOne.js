import Link from "next/link";
import {
  blogLinks,
  demoLinks,
  elementsLinks,
  jobLinks,
  pagesLinks,
} from "../../../utils/data";

import Logo from "@/assets/images/logo.svg";
import Image from "next/image";

export default function HeaderOne({ pricingTwoMenu }) {
  return (
    <header className="header-area">
      <nav
        className={`navbar navbar-expand-lg menu_three sticky-nav ${
          pricingTwoMenu ? "pricing-menu" : ""
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand header_logo" href="/">
            <Image className="main_logo" src={Logo} alt="logo" />
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
                <Link href="/" className="nav-link dropdown-toggle">
                  Home
                </Link>
                <i
                  className="arrow_carrot-right mobile_dropdown_icon"
                  aria-hidden="false"
                  data-bs-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu">
                  {demoLinks.map((item, index) => (
                    <li className={`nav-item`} key={index}>
                      <Link href={item.to} className="nav-link">
                        <Image src={item.imgSrc} alt={item.alt} />
                        <span>{item.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown submenu ">
                <Link href="/" className="nav-link dropdown-toggle">
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
                          <Link href="/" className="nav-link">
                            {item.name}
                          </Link>
                          <i
                            className="arrow_carrot-right mobile_dropdown_icon"
                            aria-hidden="false"
                            data-bs-toggle="dropdown"
                          ></i>
                          <ul className="dropdown-menu">
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex} className="nav-item">
                                <Link href={subItem.link} className="nav-link">
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link href={item.link} className="nav-link">
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown submenu mega-menu ">
                <Link href="/" className="nav-link dropdown-toggle">
                  Elements
                </Link>
                <i
                  className="arrow_carrot-right mobile_dropdown_icon"
                  aria-hidden="false"
                  data-bs-toggle="dropdown"
                ></i>
                <ul className="container dropdown-menu">
                  {elementsLinks.container.map((item, index) => (
                    <li key={index} className="nav-item">
                      <Link href="/" className="nav-link">
                        {item.name}
                      </Link>
                      <i
                        className="arrow_carrot-right mobile_dropdown_icon"
                        aria-hidden="false"
                        data-bs-toggle="dropdown"
                      ></i>
                      <ul className="dropdown-menu">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="nav-item">
                            <Link href={subItem.link} className="nav-link">
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
                <Link href="/" className="nav-link dropdown-toggle">
                  Jobs
                </Link>
                <i
                  className="arrow_carrot-right mobile_dropdown_icon"
                  aria-hidden="false"
                  data-bs-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu">
                  {jobLinks.jobs.map((item, index) => (
                    <li className="nav-item" key={index + 1}>
                      <Link href={item.link} className="nav-link">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown submenu ">
                <Link href="/" className="nav-link dropdown-toggle">
                  Blog
                </Link>
                <i
                  className="arrow_carrot-right mobile_dropdown_icon"
                  aria-hidden="false"
                  data-bs-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu">
                  {blogLinks.blogs.map((item, index) => (
                    <li className="nav-item" key={index + 1}>
                      <Link href={item.link} className="nav-link">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <div className="right-nav">
              <Link href="/" className="language-bar mr-50">
                <span className="active">En.</span> <span>Ru</span>
              </Link>
              <Link href="/sign-in">Sign in</Link>
              <Link className="btn btn-red" href="/sign-up">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
