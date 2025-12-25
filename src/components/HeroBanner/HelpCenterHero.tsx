"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import helpCenterShape from "@/assets/images/shape/help-center-shape.png";
import helpCenterShape2 from "@/assets/images/shape/help-center-shape2.png";
import helpCenterShape3 from "@/assets/images/shape/help-center-shape3.png";
import helpCenterShape4 from "@/assets/images/shape/help-center-shape4.png";
import shape16 from "@/assets/images/shape/shape16.svg";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function HelpCenterHero() {
  const shape16Ref = useGsapReveal({ animation: 'fadeInLeft', delay: 0 });

  return (
    <section className="banner-area help-page-banner">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="banner-left">
              <h1>How can we help you?</h1>
              <form className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email to book demo"
                />
                <button type="submit" className="btn btn-red">
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <ul className="popular-article">
                <li className="mr-1">Popular help articles:</li>
                <li>
                  <Link href="/">Create Lands,</Link>
                </li>
                <li>
                  <Link href="/">Understand tasks,</Link>
                </li>
                <li>
                  <Link href="/">Troubleshoot error codes</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Image src={helpCenterShape} className="help-center-shape"
        
        alt="Decorative image" />
      <Image src={helpCenterShape2} className="help-center-shape2"
        
        alt="Decorative image" />
      <Image src={helpCenterShape3} className="help-center-shape3"
        
        alt="Decorative image" />
      <Image src={helpCenterShape4} className="help-center-shape4"
        
        alt="Decorative image" />
      <Image src={shape16} ref={shape16Ref as React.RefObject<HTMLImageElement>} className="shape16"
        
        alt="Decorative image" />
    </section>
  );
}
