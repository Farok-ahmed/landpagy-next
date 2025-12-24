"use client";
import aboutShape from "@/assets/images/about_2/shape/about-shape.png";
import { useGsapMultiple } from "@/hooks/useGsapReveal";
import Image from "next/image";

interface ElementsBreadcrumbProps {
  title: string;
  description?: string;
  wider?: boolean;
}

export default function ElementsBreadcrumb({ title, description, wider }: ElementsBreadcrumbProps) {
  const refs = useGsapMultiple(4, [
    { animation: 'fadeInUp', delay: 0.1 },
    { animation: 'fadeInUp', delay: 0.3 },
    { animation: 'fadeInUp', delay: 0.1 },
    { animation: 'fadeInUp', delay: 0.3 },
  ]);
  return (
    <section className="process-banner-area pt-150 pb-150">
      <Image src={aboutShape} className="shape"
        
        alt="shapes" />
      <div className="container">
        <div className="row">
          {wider ? (
            <div className="col-lg-10 offset-lg-1 text-center">
              <h1
                ref={refs[0]}
               className="banner-title mt-100 mb-20"
              >
                {title}
              </h1>
              <p ref={refs[1]} className="banner-text">
                {description}
              </p>
            </div>
          ) : (
            <div className="col-lg-8 offset-lg-2">
              <h1
                ref={refs[2]}
               className="banner-title text-center mt-100"
              >
                {title}
              </h1>
              {description && (
                <p ref={refs[3]} className="banner-text">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
