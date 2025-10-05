"use client";
import React, {
  useEffect,
  useCallback,
  useState,
  useMemo,
  useRef,
} from "react";

export default function DealTab() {
  const [activeTab, setActiveTab] = useState("#payment-track-one");
  const timerRef = useRef(null); // Use a ref for the timer

  const tabs = useMemo(
    () => [
      {
        id: "#payment-track-one",
        imgSrc: [
          "/images/home_3/fast-deal-4.png",
          "/images/home_3/fast-deal-5.png",
        ],
      },
      {
        id: "#payment-track-two",
        imgSrc: [
          "/images/home_3/fast-deal-6.png",
          "/images/home_3/fast-deal-7.png",
        ],
      },
      {
        id: "#payment-track-three",
        imgSrc: [
          "/images/home_3/fast-deal-4.png",
          "/images/home_3/fast-deal-5.png",
        ],
      },
    ],
    []
  );

  const startAutoTabSwitch = useCallback(() => {
    const nextTab = () => {
      timerRef.current = setTimeout(() => {
        setActiveTab((prevTab) => {
          const currentIndex = tabs.findIndex((tab) => tab.id === prevTab);
          const nextIndex = (currentIndex + 1) % tabs.length;
          return tabs[nextIndex].id;
        });
        nextTab(); // Recursively set the next tab after the timeout
      }, 5000);
    };
    nextTab();
  }, [tabs]);

  useEffect(() => {
    startAutoTabSwitch();
    return () => {
      clearTimeout(timerRef.current); // Cleanup the timeout when the component unmounts or dependencies change
    };
  }, [startAutoTabSwitch]); // Only depend on the function, not on state

  const handleTabClick = (tabId) => {
    clearTimeout(timerRef.current); // Clear the current timer when a tab is clicked
    setActiveTab(tabId);
    startAutoTabSwitch(); // Restart the auto-switching after a manual click
  };

  return (
    <section className="deal-fast-area pt-140 pb-140">
      <div className="container">
        <div className="section-title-center">
          <h2 className="wow fadeInUp">Make more deals faster</h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Over a dozen reusable components built to provide iconography,
            dropdowns, input groups, navigation, alerts, and much more.
          </p>
        </div>
        <div className="row gy-4 gy-lg-0">
          <div className="col-lg-5">
            <div
              className="info-card me-lg-5 nav-tabs nav automated-tab"
              role="tablist"
            >
              {tabs.map((tab, index) => (
                <a
                  key={tab.id}
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                  href={tab.id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab.id);
                  }}
                >
                  <div className="icon">
                    <img
                      src={`/images/home_3/fast-deal-${index + 1}.svg`}
                      alt="Track key events icon"
                    />
                  </div>
                  <div className="info-txt">
                    <h6>Track key events</h6>
                    <p>
                      Set up key events to track onboarding and maintenance
                      here.
                    </p>
                  </div>
                  <div className="progress-bar"></div>
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-7 ps-lg-0">
            <div className="tab-content">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${
                    activeTab === tab.id ? "show active" : ""
                  }`}
                  id={tab.id.substring(1)}
                  role="tabpanel"
                >
                  <div className="main-img" data-wow-delay="0.1s">
                    {tab.imgSrc.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`Payment track ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
