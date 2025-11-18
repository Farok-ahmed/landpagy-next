"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import GLightbox from "glightbox";
import Image from "next/image";
import shape5 from "@/assets/images/shape/shape-5.svg";
import thumb from "@/assets/images/thumb.png";
import playButton from "@/assets/images/play-button.png";
import shape17 from "@/assets/images/shape/shape17.svg";

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
                <Image src={shape5} alt="Shape" />
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
              <Image src={thumb} alt="Thumb" />
              <a
                href="https://youtu.be/WdS4Z5Kfjgw"
               className="play-buttons"
                data-fancybox
              >
                <Image src={playButton} alt="Play Button" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="block-item-wrapper">
              <div className="block-article">
                <div className="block-icon">
                  <Image src={shape17} alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <Link href="/">How to getting started with Landpagy</Link>
                  </h4>
                  <div className="meta-teg">
                    <span>product guide</span>
                  </div>
                </div>
              </div>
              <div className="block-article">
                <div className="block-icon">
                  <Image src={shape17} alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <Link href="/">How to use code and webhooks?</Link>
                  </h4>
                  <div className="meta-teg">
                    <span>Help doc</span>
                    <span>
                      <Link href="/">Create Lands</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="block-article">
                <div className="block-icon">
                  <Image src={shape17} alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <Link href="/">
                      How do you Understand tasks at the same time?
                    </Link>
                  </h4>
                  <div className="meta-teg">
                    <span>Help doc</span>
                    <span>
                      <Link href="/">Manage Lands</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="block-article">
                <div className="block-icon">
                  <Image src={shape17} alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <Link href="/">
                      How do you identify key concepts in research?
                    </Link>
                  </h4>
                  <div className="meta-teg">
                    <span>Help doc</span>
                    <span>
                      <Link href="/">Create Lands</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="block-article">
                <div className="block-icon">
                  <Image src={shape17} alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <Link href="/">What is a lands management system?</Link>
                  </h4>
                  <div className="meta-teg">
                    <span>Help doc</span>
                    <span>
                      <Link href="/">Manage Lands</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="block-article">
                <div className="block-icon">
                  <Image src={shape17} alt="Shape" />
                </div>
                <div className="block-text">
                  <h4>
                    <Link href="/">How to getting started with Landpagy</Link>
                  </h4>
                  <div className="meta-teg">
                    <span>Help doc</span>
                    <span>
                      <Link href="/">Account & Billing</Link>
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
