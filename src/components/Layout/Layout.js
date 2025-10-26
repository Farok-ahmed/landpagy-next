"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ParallaxProvider } from "react-scroll-parallax";
import dynamic from "next/dynamic";
import { animationUtils } from "@/utils";
import Image from "next/image";
import scroll from "@/assets/images/scroll.svg";

export default function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Toggle the visibility of the scroll-to-top button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const stickyNav = document.querySelector(".sticky-nav");
      if (stickyNav) {
        stickyNav.classList.toggle("navbar_fixed", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [router.pathname]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      animationUtils.animaiton(); // Call the animation function only in the browser
    }
  }, []);

  return (
    <>
      <ParallaxProvider>
        <div className="position-relative">
          {children}
          {isVisible && (
            <button className="scrollToTop" onClick={scrollToTop}>
              <Image src={scroll} alt="Scroll to Top" />
            </button>
          )}
        </div>
      </ParallaxProvider>
    </>
  );
}
