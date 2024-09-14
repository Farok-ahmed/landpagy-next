"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import dynamic from "next/dynamic";
// import { landpagyUtils } from "../../utils";
import { useRouter } from "next/navigation";
// Dynamically import landpagyUtils
const landpagyUtils = dynamic(
  () => import("../../utils").then((mod) => mod.landpagyUtils),
  {
    ssr: false, // Disable server-side rendering for this import
  }
);

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
    if (landpagyUtils) {
      // Check if landpagyUtils and animation function exist
      console.log("landpagyUtils:", landpagyUtils);
      // Assuming the method is animation, not animaiton
      if (landpagyUtils.animation) {
        landpagyUtils.animation(); // Call animation method if it exists
      } else {
        console.error("animation method not found in landpagyUtils");
      }
    }
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

  return (
    <>
      <div className="position-relative">
        {children}
        {isVisible && (
          <button className="scrollToTop" onClick={scrollToTop}>
            <img src="/images/scroll.svg" alt="Scroll to Top" />
          </button>
        )}
      </div>
    </>
  );
}
