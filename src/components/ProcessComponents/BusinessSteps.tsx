"use client";
import icon6 from "@/assets/images/process/icon6.svg";
import icon7 from "@/assets/images/process/icon7.svg";
import icon8 from "@/assets/images/process/icon8.svg";
import icon9 from "@/assets/images/process/icon9.svg";
import shape10 from "@/assets/images/process/shape10.svg";
import shape8 from "@/assets/images/process/shape8.svg";
import shape9 from "@/assets/images/process/shape9.svg";
import { useGsapMultiple } from "@/hooks/useGsapReveal";
import Image from "next/image";

export default function BusinessSteps() {
  const refs = useGsapMultiple(5, [
    { animation: 'fadeInUp', delay: 0.1 },
    { animation: 'fadeInLeft', delay: 0.2 },
    { animation: 'fadeInLeft', delay: 0.4 },
    { animation: 'fadeInLeft', delay: 0.6 },
    { animation: 'fadeInLeft', delay: 0.8 },
  ]);
  return (
    <section className="process-area-4 overflow-hidden pt-110 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2
              ref={refs[0]}
             className="heading-3 text-center mb-90"
            >
              Our approach to reach your business goals
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div
              ref={refs[1]}
             className="process-item-4"
            >
              <Image src={shape8} alt="Border"
               className="line-1" />
              <Image src={icon6} alt="Icon"
               className="item-icon mx-auto" />
              <h3 className="item-title">Ideate</h3>
              <p className="item-text">
                Turn your idea from concept to most valuable player.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              ref={refs[2]}
             className="process-item-4"
            >
              <Image src={shape9} alt="Border"
               className="line-2" />
              <Image src={icon7} alt="Icon"
               className="item-icon mx-auto" />
              <h3 className="item-title">Design</h3>
              <p className="item-text">
                Sketch out the product to align the user needs
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              ref={refs[3]}
             className="process-item-4"
            >
              <Image src={shape10} alt="Border"
               className="line-3" />
              <Image src={icon8} alt="Icon"
               className="item-icon mx-auto" />
              <h3 className="item-title">Develop</h3>
              <p className="item-text">
                Convert the designs into a live application
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              ref={refs[4]}
             className="process-item-4"
            >
              <Image src={icon9} alt="Icon"
               className="item-icon mx-auto" />
              <h3 className="item-title">Deploy</h3>
              <p className="item-text">
                Launching the application to the market
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
