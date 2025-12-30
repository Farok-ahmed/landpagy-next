import BlogCommentForm from "@/components/Blog/BlogCommentForm";
import BlogDetailsBreadcrumb from "@/components/Blog/BlogDetailsBreadcrumb";
import CommentCard from "@/components/Blog/CommentCard";
import LinkShare from "@/components/Blog/LinkShare";
import PostDetailContent from "@/components/Blog/PostDetailContent";
import PostTags from "@/components/Blog/PostTags";
import RelatedPost from "@/components/Blog/RelatedPost";
import RecentPosts from "@/components/BlogGrid/RecentPosts";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function BlogDetails() {
  return (
    <>
      <BlogDetailsBreadcrumb />
      <section className="blog-post-area pt-100 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-post-area">
                <LinkShare />
                {/* Post Detail Content */}
                <PostDetailContent />
                {/* Post Tags */}
                <PostTags />
                {/* Comment Card */}
                <CommentCard />
                {/* Related Post */}
                <RelatedPost />
                {/* Blog Comments Form*/}
                <BlogCommentForm />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-sidebar ml-40">
                <div className="subscribe-widget mb-40">
                  <h4 className="widget-title">Subscribe to our blog</h4>
                  <p className="widget-para">
                    Get the latest posts in your email
                  </p>
                  <form className="form-group">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit" className="btn btn-red">
                      Subscribe
                    </button>
                  </form>
                </div>

                <div className="social-link-widget mb-55">
                  <div className="social-item">
                    <Link href="/">
                      <Image
                        src="/images/blog/facebook-icon.svg"
                        alt="Facebook Icon"
                        className="social-icon"
                        width={32}
                        height={32}
                      />
                      <h6 className="item-number">815.5K</h6>
                      <p className="item-title">Fans</p>
                    </Link>
                  </div>
                  <div className="social-item">
                    <Link href="/">
                      <Image
                        src="/images/blog/twitter-icon.svg"
                        alt="Twitter Icon"
                        className="social-icon"
                        width={32}
                        height={32}
                      />
                      <h6 className="item-number">107.2K</h6>
                      <p className="item-title">Followers</p>
                    </Link>
                  </div>
                  <div className="social-item">
                    <Link href="/">
                      <Image
                        src="/images/blog/youtube-icon.svg"
                        alt="Youtube Icon"
                        className="social-icon"
                        width={32}
                        height={32}
                      />
                      <h6 className="item-number">90.6K</h6>
                      <p className="item-title">Subscribers</p>
                    </Link>
                  </div>
                </div>

                <div className="categorie-widget mb-50">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="list-unstyled categorie-list">
                    <li>
                      <Link href="/">
                        Development Tips <span>(10)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Product Update <span>(9)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Case Study <span>(12)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Creative <span>(07)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Inspiration <span>(06)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Landpagy <span>(11)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Lifestyle <span>(05)</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <RecentPosts />

                <div className="tag-widget mb-45">
                  <h4 className="widget-title">Tags</h4>
                  <ul className="list-unstyled tag-list">
                    <li>
                      <Link href="/">WordPress</Link>
                    </li>
                    <li>
                      <Link href="/">web design</Link>
                    </li>
                    <li>
                      <Link href="/">ui/ux</Link>
                    </li>
                    <li>
                      <Link href="/">saas</Link>
                    </li>
                    <li>
                      <Link href="/">software</Link>
                    </li>
                    <li>
                      <Link href="/">creative</Link>
                    </li>
                    <li>
                      <Link href="/">product</Link>
                    </li>
                    <li>
                      <Link href="/">development</Link>
                    </li>
                    <li>
                      <Link href="/">design</Link>
                    </li>
                    <li>
                      <Link href="/">sequrity</Link>
                    </li>
                    <li>
                      <Link href="/">agency</Link>
                    </li>
                  </ul>
                </div>

                <div className="instagram-widget">
                  <h4 className="widget-title">Instagram</h4>
                  <div className="instagram-items">
                    <Link href="/" className="instagram-item">
                      <Image
                        src="/images/blog/insta1.png"
                        alt=""
                        width={80}
                        height={80}
                      />
                    </Link>
                    <Link href="/" className="instagram-item">
                      <Image
                        src="/images/blog/insta2.png"
                        alt=""
                        width={80}
                        height={80}
                      />
                    </Link>
                    <Link href="/" className="instagram-item">
                      <Image
                        src="/images/blog/insta3.png"
                        alt=""
                        width={80}
                        height={80}
                      />
                    </Link>
                    <Link href="/" className="instagram-item">
                      <Image
                        src="/images/blog/insta4.png"
                        alt=""
                        width={80}
                        height={80}
                      />
                    </Link>
                    <Link href="/" className="instagram-item">
                      <Image
                        src="/images/blog/insta5.png"
                        alt=""
                        width={80}
                        height={80}
                      />
                    </Link>
                    <Link href="/" className="instagram-item">
                      <Image
                        src="/images/blog/insta6.png"
                        alt=""
                        width={80}
                        height={80}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
