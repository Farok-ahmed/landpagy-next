;

import Link from "next/link";
import BlogPost from "./BlogPost";

const blogPosts = [
  {
    imageSrc: "/images/blog_grid/blog_grid_post1.jpg",
    readTime: "18 Min Read",
    category: "WordPress",
    title: "Is Your Store Safe From Magento Killer?",
    excerpt:
      "The pressure to keep our skills sharp is constant. Mastering new skills may...",
    author: {
      name: "Jason Response",
      imageSrc: "/images/blog_grid/author_1.jpg",
      date: "Sep 14, 2020",
    },
  },
  {
    imageSrc: "/images/blog_grid/blog_grid_post2.jpg",
    readTime: "18 Min Read",
    category: "Docy",
    title: "70 Best Startups You Need to Watch Out for",
    excerpt:
      "The pressure to keep our skills sharp is constant. Mastering new skills may...",
    author: {
      name: "Druid Wensleydale",
      imageSrc: "/images/blog_grid/author_2.jpg",
      date: "Sep 14, 2020",
    },
  },
  {
    imageSrc: "/images/blog_grid/blog_grid_post3.jpg",
    readTime: "10 Min Read",
    category: "Laravel",
    title: "Create Conditional Logic Forms & Publish",
    excerpt:
      "The pressure to keep our skills sharp is constant. Mastering new skills may...",
    author: {
      name: "Douglas Lyphe",
      imageSrc: "/images/blog_grid/author_3.jpg",
      date: "Nov 10, 2020",
    },
  },
  {
    imageSrc: "/images/blog_grid/blog_grid_post4.jpg",
    readTime: "18 Min Read",
    category: "WooCommerce",
    title: "How to Use Forms for Enhancing UX In WordPress",
    excerpt:
      "The pressure to keep our skills sharp is constant. Mastering new skills may...",
    author: {
      name: "Indigo Violet",
      imageSrc: "/images/blog_grid/author_4.jpg",
      date: "March 23, 2020",
    },
  },
  {
    imageSrc: "/images/blog_grid/blog_grid_post5.jpg",
    readTime: "10 Min Read",
    category: "Magento",
    title: "Create A WordPress Multi Step Form With weForms",
    excerpt:
      "The pressure to keep our skills sharp is constant. Mastering new skills may...",
    author: {
      name: "Niles Peppertrout",
      imageSrc: "/images/blog_grid/author_5.jpg",
      date: "Oct 12, 2020",
    },
  },
  {
    imageSrc: "/images/blog_grid/blog_grid_post6.jpg",
    readTime: "14 Min Read",
    category: "Laravel",
    title: "The Grand Ecommerce Giveaway Worth",
    excerpt:
      "The pressure to keep our skills sharp is constant. Mastering new skills may...",
    author: {
      name: "Hanson Deck",
      imageSrc: "/images/blog_grid/author_6.jpg",
      date: "Sep 17, 2020",
    },
  },
];

export default function CategoryGrid() {
  return (
    <section className="doc_blog_grid_area">
      <div className="blog_grid_inner bg_color">
        <div className="container blog-grid-container">
          <ul className="nav blog_tab">
            <li className="nav-item">
              <Link className="nav-link active" href="/blog">
                Updates
              </Link>
            </li>
            <li className="nav-item cat-woocommerce">
              <Link className="nav-link" href="/blog">
                WooCommerce
              </Link>
            </li>
            <li className="nav-item cat-startups">
              <Link className="nav-link" href="/blog">
                Startups
              </Link>
            </li>
            <li className="nav-item cat-laravel">
              <Link className="nav-link" href="/blog">
                Laravel
              </Link>
            </li>
            <li className="nav-item cat-wordpress">
              <Link className="nav-link" href="/blog">
                WordPress
              </Link>
            </li>
            <li className="nav-item cat-megento">
              <Link className="nav-link" href="/blog">
                Megento
              </Link>
            </li>
            <li className="nav-item cat-startups">
              <Link className="nav-link" href="/blog">
                Startups
              </Link>
            </li>
            <li className="nav-item cat-Docy">
              <Link className="nav-link" href="/blog">
                Docy
              </Link>
            </li>
            <li className="nav-item cat-others">
              <Link className="nav-link" href="/blog">
                Others
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container blog-grid-container">
        <div className="row blog_grid_tab">
          <BlogPost posts={blogPosts} />
        </div>
      </div>
    </section>
  );
}
