"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import appIntegrate7Png from "@/assets/images/home_3/app-integrate-7.png";
import appIntegrate3Png from "@/assets/images/home_3/app-integrate-3.png";
import appIntegrate5Png from "@/assets/images/home_3/app-integrate-5.png";
import appIntegrate6Png from "@/assets/images/home_3/app-integrate-6.png";
import appIntegrate2Png from "@/assets/images/home_3/app-integrate-2.png";
import appIntegrate4Png from "@/assets/images/home_3/app-integrate-4.png";
import appIntegrate8Png from "@/assets/images/home_3/app-integrate-8.png";
import appIntegrate9Png from "@/assets/images/home_3/app-integrate-9.png";
import appIntegrate1Png from "@/assets/images/home_3/app-integrate-1.png";


export default function IntegrationTwo() {
  const [timeCount, setTimeCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeCount((prevCount) => prevCount + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const rotateApps = () => {
      const apps = document.querySelectorAll(".integreted-app .app");
      apps.forEach((app) => {
        const transform = window.getComputedStyle(app).transform;
        const matrixValues = transform.match(/matrix.*\((.+)\)/);
        let translateX = 0;
        let translateY = 0;

        if (matrixValues && matrixValues[1]) {
          const values = matrixValues[1].split(", ");
          translateX = parseFloat(values[4]);
          translateY = parseFloat(values[5]);
        }

        app.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(-${
          45 * timeCount
        }deg)`;
      });

      const integretedApp = document.querySelector(".integreted-app");
      integretedApp.style.transform = `rotate(${45 * timeCount}deg)`;
    };

    rotateApps();
  }, [timeCount]);
  return (
    <section className="app-itegretion-area">
      <div className="container">
        <div className="row align-items-center gy-lg-0 gy-4">
          <div className="order-2 col-lg-6 order-lg-1">
            <h2>Easily integrate with your favorite apps</h2>
            <p>
              Nullam lacinia suscipit metus, metus ut dictum tincidunt
              condimentum et. Proin diam sed consectetur interdum. Donec
              lobortis turpis ut quam congue magna
            </p>
            <ul className="supported">
              <li>
                <i className="icon_check"></i> Semper vel egestas
              </li>
              <li>
                <i className="icon_check"></i> Orci lacus velit augue
              </li>
            </ul>
            <Link href="/contact-one" className="btn">
              Start your free trial
            </Link>
          </div>
          <div className="order-1 col-lg-5 offset-xl-1 order-lg-2">
            <div className="mx-auto integreted-app">
              <div className="app">
                <Image src={appIntegrate1Png} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate2Png} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate3Png} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate4Png} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate5Png} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate6Png} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate7Png} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate8Png} alt="app" />
              </div>
              <div className="main app">
                <Image src={appIntegrate9Png} alt="app" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
