"use client";
import Link from "next/link";
import React, { useState } from "react";

const jobs = [
  {
    id: "motion-graphic-designer",
    title: "Motion Graphic Designer",
    location: "Bulgaria",
    link: "https://careers.siteground.com/#automation-qa-engineer-bulgaria",
    responsibilities: [
      "Based on user stories and acceptance criteria identify tests scenarios and verification points",
      "Implement test scripts, execute and maintain existing ones",
      "Design and maintain an efficient test environment.",
    ],
    requirements: [
      "Experience in web applications test automation",
      "Knowledge of OOP concepts",
      "Experience with Java, PHP, or JavaScript",
      "Experience with version control systems (git)",
      "Basic knowledge of SQL",
      "Experience with Linux or other Unix based OS.",
    ],
    niceToHave: [
      "Experience with containers (Docker/Amazon ECS/Kubernetes)",
      "Experience in Jira and Jira API Integration.",
    ],
    offers: [
      "Working with the latest technologies",
      "Attending IT conferences worldwide",
      "Competitive salary with achievement bonus",
      "Opportunity for personal and professional growth",
      "Fast-paced and constantly changing environment",
      "Young and diverse team of passionate and self-motivated professionals",
      "Friendly company culture built entirely around people's happiness",
      "Excellent working conditions with lots of benefits",
      "Reduced working hours every Friday.",
    ],
  },
];
export default function WebDesign() {
  const [openJobs, setOpenJobs] = useState({}); // State to handle open status for each job
  const [tooltipText, setTooltipText] = useState({});

  const toggleDetails = (id) => {
    setOpenJobs((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the value for the specific job id
    }));
  };
  const copyToClipboard = (id, link) => {
    navigator.clipboard.writeText(link).then(
      () => {
        // Change tooltip text to "Copied!" on success
        setTooltipText((prev) => ({
          ...prev,
          [id]: "Copied!",
        }));

        // Reset the tooltip text after a short delay
        setTimeout(() => {
          setTooltipText((prev) => ({
            ...prev,
            [id]: "Copy to clipboard",
          }));
        }, 2000);
      },
      () => {
        // Handle error if copying fails
        setTooltipText((prev) => ({
          ...prev,
          [id]: "Failed to copy",
        }));
      }
    );
  };
  return (
    <div
      id="information-systems-operations"
      className="department"
      data-department="information-systems-operations"
    >
      <h3>Web Design</h3>
      {jobs.map((job) => (
        <div
          key={job.id}
          id={job.id}
          className={`job wow fadeInUp ${openJobs[job.id] ? "active" : ""}`}
          data-wow-delay="0.1s"
          data-location={job.location}
        >
          <div className="job__header" onClick={() => toggleDetails(job.id)}>
            <div>
              <div className="job__title">
                <h4>{job.title}</h4>
                <div className="job__link">
                  <input
                    type="text"
                    name={`copy-${job.id}`}
                    defaultValue={job.link}
                    className="copy-link hidden-input"
                  />
                  <button
                    id={`copy-${job.id}`}
                    className="copy-button"
                    onClick={() => copyToClipboard(job.id, job.link)}
                  >
                    <span className="tooltip-text">
                      {tooltipText[job.id] || "Copy to clipboard"}
                    </span>
                    Get Link
                  </button>
                </div>
              </div>
              <span className="job__location">{job.location}</span>
            </div>
            <span className="btn btn--details">
              {openJobs[job.id] ? "Close Details" : "View Details"}
            </span>
          </div>

          {openJobs[job.id] && ( // Render content only if the job is open
            <div className="job__content">
              <h5>WHAT YOU’LL DO:</h5>
              <ul>
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
              <h5>WHAT DO YOU NEED TO SUCCEED:</h5>
              <ul>
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <h5>NICE TO HAVE:</h5>
              <ul>
                {job.niceToHave.map((nice, index) => (
                  <li key={index}>{nice}</li>
                ))}
              </ul>
              <h5>WHAT WE OFFER:</h5>
              <ul>
                {job.offers.map((offer, index) => (
                  <li key={index}>{offer}</li>
                ))}
              </ul>

              <Link className="btn btn--apply" href="/job-details">
                Apply For This Job
              </Link>
            </div>
          )}
        </div>
      ))}
      <p className="no-jobs-found">
        There are no jobs available for the selected region!
      </p>
    </div>
  );
}
