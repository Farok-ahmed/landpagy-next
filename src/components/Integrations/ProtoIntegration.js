"use client";
import React, { useEffect, useState } from "react";

export default function ProtoIntegration() {
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
    <section className="app-itegretion-area app-itegretion-two bg-proto">
      <div className="container">
        <div className="row align-items-center gy-lg-0 gy-4">
          <div className="col-lg-6 pe-lg-5 order-2 order-lg-1">
            <div
              className="section-title-left wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <h2>Integrate with your favorite apps</h2>
              <p>
                By combining Landpagy prototyping strength and your current
                design, agile and user testing tools, you’ll be able to rapidly
                build engaging prototypes.
              </p>
            </div>
          </div>
          <div className="col-lg-5 offset-xl-1 order-1 order-lg-2">
            <div className="integreted-app mx-auto">
              <div className="app">
                <img src="/images/home_6/apps/app1.svg" alt="app" />
              </div>
              <div className="app">
                <img src="/images/home_6/apps/app2.svg" alt="app" />
              </div>
              <div className="app">
                <img src="/images/home_6/apps/app3.svg" alt="app" />
              </div>
              <div className="app">
                <img src="/images/home_6/apps/app4.svg" alt="app" />
              </div>
              <div className="app">
                <img src="/images/home_6/apps/app5.svg" alt="app" />
              </div>
              <div className="app">
                <img src="/images/home_6/apps/app6.svg" alt="app" />
              </div>
              <div className="app">
                <img src="/images/home_6/apps/app7.svg" alt="app" />
              </div>
              <div className="app">
                <img src="/images/home_6/apps/app8.svg" alt="app" />
              </div>
              <div className="main app">
                <img src="/images/home_6/apps/app-main.svg" alt="app" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
