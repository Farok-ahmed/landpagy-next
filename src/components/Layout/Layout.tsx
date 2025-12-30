"use client";
import scroll from "@/assets/images/scroll.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const pathname = usePathname();

  // Function to handle scroll to top
  const scrollToTop = useCallback((): void => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Toggle the visibility of the scroll-to-top button based on scroll position
  const toggleVisibility = useCallback((): void => {
    if (typeof window === "undefined") return;
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  // Handle sticky navigation
  const handleScroll = useCallback((): void => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;
    const stickyNav = document.querySelector(".sticky-nav");
    if (stickyNav) {
      stickyNav.classList.toggle("navbar_fixed", window.scrollY > 0);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useLayoutEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

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
