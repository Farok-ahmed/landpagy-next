"use client";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import right from "@/assets/images/home_9/shapes/right.svg";
import Image from "next/image";

export default function CloudTestimonial() {
  const [activeTab, setActiveTab] = useState<string>("user1");
  const users = useMemo(
    () => [
      {
        id: "user1",
        logo: "user-logo1.svg",
        quote:
          "With Landpagy, educators can collaborate securely with colleagues on any device and platform — across campus and across the world.",
        name: "Marcus Levin, Designer",
      },
      {
        id: "user2",
        logo: "user-logo2.svg",
        quote:
          "With Landpagy, educators can collaborate securely with colleagues on any device and platform — across campus and across the world.",
        name: "Sarah Johnson, Project Manager",
      },
      {
        id: "user3",
        logo: "user-logo3.svg",
        quote:
          "With Landpagy, educators can collaborate securely with colleagues on any device and platform — across campus and across the world.",
        name: "David Brown, IT Specialist",
      },
      {
        id: "user4",
        logo: "user-logo4.svg",
        quote:
          "With Landpagy, educators can collaborate securely with colleagues on any device and platform — across campus and across the world.",
        name: "Emily Davis, Team Lead",
      },
      {
        id: "user5",
        logo: "user-logo5.svg",
        quote:
          "With Landpagy, educators can collaborate securely with colleagues on any device and platform — across campus and across the world.",
        name: "Michael Wilson, Customer Support",
      },
      {
        id: "user6",
        logo: "user-logo6.svg",
        quote:
          "With Landpagy, educators can collaborate securely with colleagues on any device and platform — across campus and across the world.",
        name: "Laura Martinez, Operations Manager",
      },
      {
        id: "user7",
        logo: "user-logo7.svg",
        quote:
          "With Landpagy, educators can collaborate securely with colleagues on any device and platform — across campus and across the world.",
        name: "James Anderson, Analyst",
      },
      {
        id: "user8",
        logo: "user-logo8.svg",
        quote:
          "With Landpagy, educators can collaborate securely with colleagues on any device and platform — across campus and across the world.",
        name: "Olivia Thompson, Developer",
      },
    ],
    []
  );

  // Function to start the automatic tab switching
  const startAutoTabSwitch = useCallback(() => {
    const index = users.findIndex((user) => user.id === activeTab);
    const nextIndex = (index + 1) % users.length;

    const timer = setTimeout(() => {
      setActiveTab(users[nextIndex].id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeTab, users]);

  // Using useEffect to trigger the automatic tab switching
  useEffect(() => {
    const cleanup = startAutoTabSwitch();
    return cleanup;
  }, [activeTab, startAutoTabSwitch]);

  // Handle manual tab click
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className="cloud-testimonial-area pt-125">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="text-center col-lg-12">
            <h2 className="testimonial-title cloud-heading-2 mb-30">
              More than{" "}
              <span className="highlighted-text">
                10,000
                <svg
                  width="175"
                  height="70"
                  viewBox="0 0 175 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                   className="animatable draw"
                    d="M2.74687 18.4067C73.9377 -29.3958 233.396 32.857 150.873 62.1057C102.25 79.3392 -15.2107 62.8661 2.7469 30.511C14.4708 9.3874 95.2742 -7.64876 152.309 30.511"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>{" "}
              Teams use Landpagy Business
            </h2>
            <Link href="/" className="testimonial-btn mb-70">
              Learn more about our customers{" "}
              <Image src={right} className="icon"
                
                alt="Icon" />
            </Link>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="row">
          {/* Left Column Tabs */}
          <div className="col-lg-4 gx-lg-0">
            <div className="nav nav-tabs cloud-team-tab" role="tablist">
              {users.slice(0, 4).map((user) => (
                <button
                  key={user.id}
                 className={`nav-link ${
                    activeTab === user.id ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(user.id)}
                >
                  <Image
                    src={`/images/home_9/users/${user.logo}`}
                    alt={user.name}
                    width={60}
                    height={60}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Middle Column Content */}
          <div className="col-lg-4 gx-lg-0">
            <div className="tab-content cloud-team-content">
              {users.map((user) => (
                <div
                  key={user.id}
                 className={`tab-pane fade ${
                    activeTab === user.id ? "show active" : ""
                  }`}
                >
                  <div className="user-content">
                    <div className="progress-bar-container">
                      <div
                       className="progress-bar"
                        // Key changes on activeTab to restart animation
                      ></div>
                    </div>
                    <div className="user-img">
                      <Image
                        src={`/images/home_9/users/${user.logo}`}
                        alt={user.name}
                        width={80}
                        height={80}
                      />
                    </div>
                    <p className="user-quote">{user.quote}</p>
                    <p className="user-name">{user.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Tabs */}
          <div className="col-lg-4 gx-lg-0">
            <div
             className="nav nav-tabs cloud-team-tab column-2nd"
              role="tablist"
            >
              {users.slice(4).map((user) => (
                <button
                  key={user.id}
                 className={`nav-link ${
                    activeTab === user.id ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(user.id)}
                >
                  <Image
                    src={`/images/home_9/users/${user.logo}`}
                    alt={user.name}
                    width={60}
                    height={60}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
