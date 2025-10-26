"use client";

import Slider from "react-slick";
import Link from "next/link";

import Image from "next/image";
import border from "@/assets/images/home_10/shapes/border.svg";

const clients = [
  {
    imgSrc: "/images/home_10/client-1.png",
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    name: "Moshrarf Hossan",
    role: "Ui / Ux Designer",
  },
  {
    imgSrc: "/images/home_10/client-2.png",
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    name: "Eh Jewel",
    role: "Spider Themes, CEO",
  },
  {
    imgSrc: "/images/home_10/client-3.png",
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    name: "Arif Rahman",
    role: "Junior web developer",
  },
  {
    imgSrc: "/images/home_10/client-1.png",
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    name: "Moshrarf Hossan",
    role: "Ui / Ux Designer",
  },
  {
    imgSrc: "/images/home_10/client-2.png",
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    name: "Eh Jewel",
    role: "Spider Themes, CEO",
  },
  {
    imgSrc: "/images/home_10/client-3.png",
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    name: "Arif Rahman",
    role: "Junior web developer",
  },
];

export default function AppTestimonial() {
  const slickOptions = {
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="app-testimonial-area pt-120 pb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2
              className="section-title cloud-heading-2 wow fadeInDown mb-55"
              data-wow-delay="0.2s"
            >
              What Our {""}
              <span>
                Client
                <Image src={border} className="border-shape"
                  
                  alt="Border" />
              </span>
              {""} Say
            </h2>
          </div>
        </div>
        <Slider {...slickOptions} className="app-client-slider">
          {clients.map((client, index) => (
            <div key={index}>
              <div className="single-client">
                <img
                  className="img-fluid rounded-circle"
                  src={client.imgSrc}
                  alt="client"
                />
                <p className="quote">{client.quote}</p>
                <div className="client-info">
                  <div>
                    <p>{client.name}</p>
                    <span className="role">{client.role}</span>
                  </div>
                  <div className="rating">
                    <Link href="/">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="/">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="/">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="/">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="/">
                      <i className="icon_star"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
