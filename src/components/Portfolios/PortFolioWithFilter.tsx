"use client";
import { useGsapMultiple } from "@/hooks/useGsapReveal";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import softItem1 from "@/assets/images/home_7/soft-item1.jpg";
import softItem2 from "@/assets/images/home_7/soft-item2.jpg";
import softItem3 from "@/assets/images/home_7/soft-item3.jpg";
import softItem4 from "@/assets/images/home_7/soft-item4.jpg";
import softItem5 from "@/assets/images/home_7/soft-item5.jpg";
import softItem6 from "@/assets/images/home_7/soft-item6.jpg";
import softItem7 from "@/assets/images/home_7/soft-item7.jpg";
import softItem8 from "@/assets/images/home_7/soft-item8.jpg";
import softItem9 from "@/assets/images/home_7/soft-item9.jpg";
import imagesLoaded from "imagesloaded";
import Isotope from "isotope-layout";
import Image from "next/image";

export default function PortFolioWithFilter() {
  const refs = useGsapMultiple(2, [
    { animation: 'fadeInUp' },
    { animation: 'fadeInUp', delay: 0.2 },
  ]);

  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState<string>("*");

  useEffect(() => {
    isotope.current = new Isotope(".software-list", {
      itemSelector: ".software-item",
      percentPosition: true,
      masonry: {
        columnWidth: 0,
      },
      transitionDuration: "0.5s",
    });

    // Initialize imagesLoaded
    imagesLoaded(".software-list").on("progress", () => {
      if (isotope.current) {
        isotope.current.layout();
      }
    });
  }, []);
  // handling filter key change
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);
  return (
    <section className="software-area pb-105">
      <div className="container container-soft2">
        <div className="row">
          <div className="col-12">
            <div className="section-title-center">
              <h2 ref={refs[0]}>
                70+ Pre-Built Demos for a Quick Start
              </h2>
              <p ref={refs[1]}>
                Featuring over 70 complete website packs including home pages,
                landing pages and sales pages all designed in a clear and
                user-friendly style.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center col-md-12">
            <ul className="software-titles">
              <li
               className={`${filterKey === "*" ? "active" : ""}`}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </li>
              <li
               className={`${filterKey === "creative" ? "active" : ""}`}
                onClick={handleFilterKeyChange("creative")}
              >
                Creative
              </li>
              <li
               className={`${filterKey === "business" ? "active" : ""}`}
                onClick={handleFilterKeyChange("business")}
              >
                Business
              </li>
              <li
               className={`${filterKey === "blog" ? "active" : ""}`}
                onClick={handleFilterKeyChange("blog")}
              >
                Blog/Magazine
              </li>
              <li
               className={`${filterKey === "portfolio" ? "active" : ""}`}
                onClick={handleFilterKeyChange("portfolio")}
              >
                Portfolio
              </li>
              <li
               className={`${filterKey === "new" ? "active" : ""}`}
                onClick={handleFilterKeyChange("new")}
              >
                New
              </li>
              <li
               className={`${filterKey === "shop" ? "active" : ""}`}
                onClick={handleFilterKeyChange("shop")}
              >
                Shop
              </li>
            </ul>
          </div>
        </div>
        <div className="grid row software-list">
          <div className="col-md-4 col-6 creative business new software-item">
            <div className="">
              <div className="item-img">
                <p className="new-text">New</p>
                <Image src={softItem1} alt="Decorative image" />
                <div className="item-hover">
                  <Link href="/" className="item-link">
                    View Demo
                  </Link>
                  <Link href="/" className="item-link">
                    View Details
                  </Link>
                </div>
              </div>
              <h4 className="item-title">Business</h4>
            </div>
          </div>
          <div className="col-md-4 col-6 business portfolio software-item">
            <div className="">
              <div className="item-img">
                <Image src={softItem2} alt="Decorative image" />
                <div className="item-hover">
                  <Link href="/" className="item-link">
                    View Demo
                  </Link>
                  <Link href="/" className="item-link">
                    View Details
                  </Link>
                </div>
              </div>
              <h4 className="item-title">Portfolio</h4>
            </div>
          </div>
          <div className="col-md-4 col-6 blog shop software-item">
            <div className="">
              <div className="item-img">
                <Image src={softItem3} alt="Decorative image" />
                <div className="item-hover">
                  <Link href="/" className="item-link">
                    View Demo
                  </Link>
                  <Link href="/" className="item-link">
                    View Details
                  </Link>
                </div>
              </div>
              <h4 className="item-title">Restaurant</h4>
            </div>
          </div>
          <div className="col-md-4 col-6 shop software-item business new">
            <div className="">
              <div className="item-img">
                <p className="new-text">New</p>
                <Image src={softItem4} alt="Decorative image" />
                <div className="item-hover">
                  <Link href="/" className="item-link">
                    View Demo
                  </Link>
                  <Link href="/" className="item-link">
                    View Details
                  </Link>
                </div>
              </div>
              <h4 className="item-title">ECommerce</h4>
            </div>
          </div>
          <div className="col-md-4 col-6 shop portfolio software-item">
            <div className="">
              <div className="item-img">
                <Image src={softItem5} alt="Decorative image" />
                <div className="item-hover">
                  <Link href="/" className="item-link">
                    View Demo
                  </Link>
                  <Link href="/" className="item-link">
                    View Details
                  </Link>
                </div>
              </div>
              <h4 className="item-title">Point of Sale</h4>
            </div>
          </div>
          <div className="col-md-4 col-6 blog software-item">
            <div className="">
              <div className="item-img">
                <Image src={softItem6} alt="Decorative image" />
                <div className="item-hover">
                  <Link href="/" className="item-link">
                    View Demo
                  </Link>
                  <Link href="/" className="item-link">
                    View Details
                  </Link>
                </div>
              </div>
              <h4 className="item-title">CRM</h4>
            </div>
          </div>
          <div className="col-md-4 col-6 new blog software-item">
            <div className="">
              <div className="item-img">
                <p className="new-text">New</p>
                <Image src={softItem7} alt="Decorative image" />
                <div className="item-hover">
                  <Link href="/" className="item-link">
                    View Demo
                  </Link>
                  <Link href="/" className="item-link">
                    View Details
                  </Link>
                </div>
              </div>
              <h4 className="item-title">Forum</h4>
            </div>
          </div>
          <div className="col-md-4 col-6 business software-item">
            <div className="">
              <div className="item-img">
                <Image src={softItem8} alt="Decorative image" />
                <div className="item-hover">
                  <Link href="/" className="item-link">
                    View Demo
                  </Link>
                  <Link href="/" className="item-link">
                    View Details
                  </Link>
                </div>
              </div>
              <h4 className="item-title">HRM</h4>
            </div>
          </div>
          <div className="col-md-4 col-6 new business software-item">
            <div className="">
              <div className="item-img">
                <p className="new-text">New</p>
                <Image src={softItem9} alt="Decorative image" />
                <div className="item-hover">
                  <Link href="/" className="item-link">
                    View Demo
                  </Link>
                  <Link href="/" className="item-link">
                    View Details
                  </Link>
                </div>
              </div>
              <h4 className="item-title">Banking</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
