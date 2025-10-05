const demoLinks = [
  {
    to: "/",
    imgSrc: "/images/home_demos/project.png",
    alt: "Demo",
    text: "Project Management",
  },
  {
    to: "/home-sc",
    imgSrc: "/images/home_demos/software.png",
    alt: "Demo",
    text: "Software Company",
  },
  {
    to: "/home-sc-two",
    imgSrc: "/images/home_demos/software-2.png",
    alt: "Demo",
    text: "Software Demo Landing",
  },
  {
    to: "/home-payment",
    imgSrc: "/images/home_demos/payment.png",
    alt: "Demo",
    text: "Payment Processing",
  },
  {
    to: "/home-billing",
    imgSrc: "/images/home_demos/billing.png",
    alt: "Demo",
    text: "Account Billing Software",
  },
  {
    to: "/home-cloud",
    imgSrc: "/images/home_demos/cloud.png",
    alt: "Demo",
    text: "Cloud Saas",
  },
  {
    to: "/home-app",
    imgSrc: "/images/home_demos/app.png",
    alt: "Demo",
    text: "Mobile App Landing",
  },
  {
    to: "/home-hrm",
    imgSrc: "/images/home_demos/hrm.png",
    alt: "Demo",
    text: "HRM Software",
  },
  {
    to: "/home-pos",
    imgSrc: "/images/home_demos/pos.png",
    alt: "Demo",
    text: "POS Software",
  },
  {
    to: "/home-prototype",
    imgSrc: "/images/home_demos/proto.png",
    alt: "Demo",
    text: "Prototype",
  },
  {
    to: "/home-help-center",
    imgSrc: "/images/home_demos/help.png",
    alt: "Demo",
    text: "Help Center",
  },
];

const elementsLinks = {
  container: [
    {
      name: "Elements 01",
      submenu: [
        { name: "Accordions", link: "/accordions" },
        { name: "Team", link: "/team" },
        { name: "Integration", link: "/integrations" },
        { name: "Clients", link: "/clients" },
      ],
    },
    {
      name: "Elements 02",
      submenu: [
        { name: "Testimonials", link: "/testimonials" },
        { name: "Video", link: "/videos" },
        { name: "Contact Form", link: "/contact-forms" },
        { name: "Process", link: "/process" },
      ],
    },
    {
      name: "Elements 03",
      submenu: [
        { name: "Pricing Table", link: "/pricing-table-one" },
        { name: "Pricing Table 2", link: "/pricing-table-two" },
        { name: "Subscribe", link: "/subscribe" },
        { name: "Tab", link: "/tabs" },
      ],
    },
    {
      name: "Elements 04",
      submenu: [
        { name: "Timeline Stories", link: "/timeline-stories" },
        { name: "Get App", link: "/get-app" },
        { name: "Google Map", link: "/google-maps" },
        { name: "Countdown Timer", link: "/coming-soon-four" },
      ],
    },
    {
      name: "Elements 05",
      submenu: [
        { name: "Fun Fact", link: "/fun-facts" },
        { name: "FAQ's", link: "/faqs" },
        { name: "Features", link: "/features" },
      ],
    },
  ],
};

const pagesLinks = {
  pages: [
    { name: "Product", link: "/product" },
    { name: "Services", link: "/services" },
    { name: "404", link: "/not-found" },
    {
      name: "About",
      submenu: [
        { name: "About One", link: "/about-one" },
        { name: "About Two", link: "/about-two" },
      ],
    },
    {
      name: "Contact",
      submenu: [
        { name: "Contact One", link: "/contact-one" },
        { name: "Contact Two", link: "/contact-two" },
      ],
    },
    {
      name: "Coming Soon",
      submenu: [
        { name: "Coming Soon One", link: "/coming-soon-one" },
        { name: "Coming Soon Two", link: "/coming-soon-two" },
        { name: "Coming Soon Three", link: "/coming-soon-three" },
        { name: "Coming Soon Four", link: "/coming-soon-four" },
      ],
    },
  ],
};

const blogLinks = {
  blogs: [
    { name: "Blog", link: "/blog" },
    { name: "Blog Single", link: "/blog-details" },
    { name: "Extended Grid", link: "/blog-grid" },
  ],
};
const jobLinks = {
  jobs: [
    { name: "Career", link: "/career" },
    { name: "Jobs", link: "/jobs" },
    { name: "Job Application", link: "/job-details" },
  ],
};

export { demoLinks, elementsLinks, pagesLinks, blogLinks, jobLinks };
