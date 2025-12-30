"use client";
import appIntegrate1 from "@/assets/images/home_3/app-integrate-1.png";
import appIntegrate2 from "@/assets/images/home_3/app-integrate-2.png";
import appIntegrate3 from "@/assets/images/home_3/app-integrate-3.png";
import appIntegrate4 from "@/assets/images/home_3/app-integrate-4.png";
import appIntegrate5 from "@/assets/images/home_3/app-integrate-5.png";
import appIntegrate6 from "@/assets/images/home_3/app-integrate-6.png";
import appIntegrate7 from "@/assets/images/home_3/app-integrate-7.png";
import appIntegrate8 from "@/assets/images/home_3/app-integrate-8.png";
import appIntegrate9 from "@/assets/images/home_3/app-integrate-9.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function IntegrationTwo() {
  const [timeCount, setTimeCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeCount((prevCount) => prevCount + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const rotateApps = (): void => {
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

        (app as HTMLElement).style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(-${
          45 * timeCount
        }deg)`;
      });

      const integretedApp = document.querySelector(".integreted-app");
      if (integretedApp) {
        (integretedApp as HTMLElement).style.transform = `rotate(${45 * timeCount}deg)`;
      }
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
                <Image src={appIntegrate1} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate2} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate3} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate4} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate5} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate6} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate7} alt="app" />
              </div>
              <div className="app">
                <Image src={appIntegrate8} alt="app" />
              </div>
              <div className="main app">
                <Image src={appIntegrate9} alt="app" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
