"use client";

import { useGsapReveal } from "@/hooks/useGsapReveal";
import Link from "next/link";
import Slider from "react-slick";

import border from "@/assets/images/home_10/shapes/border.svg";
import Image from "next/image";

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
  const headingRef = useGsapReveal({ animation: 'fadeInDown', delay: 0.2 });

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
              ref={headingRef}
             className="section-title cloud-heading-2 mb-55"
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
                <Image
                  className="img-fluid rounded-circle"
                  src={client.imgSrc}
                  alt="client"
                  width={80}
                  height={80}
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
