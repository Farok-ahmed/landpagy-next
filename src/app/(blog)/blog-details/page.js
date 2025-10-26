import BlogCommentForm from "@/components/Blog/BlogCommentForm";
import BlogDetailsBreadcrumb from "@/components/Blog/BlogDetailsBreadcrumb";
import CommentCard from "@/components/Blog/CommentCard";
import LinkShare from "@/components/Blog/LinkShare";
import PostDetailContent from "@/components/Blog/PostDetailContent";
import PostTags from "@/components/Blog/PostTags";
import RelatedPost from "@/components/Blog/RelatedPost";
import RecentPosts from "@/components/BlogGrid/RecentPosts";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import HeaderOne from "@/components/Layout/Header/HeaderOne";
import Image from "next/image";
import facebookIcon from "@/assets/images/blog/facebook-icon.svg";
import twitterIcon from "@/assets/images/blog/twitter-icon.svg";
import youtubeIcon from "@/assets/images/blog/youtube-icon.svg";
import insta1 from "@/assets/images/blog/insta1.png";
import insta2 from "@/assets/images/blog/insta2.png";
import insta3 from "@/assets/images/blog/insta3.png";
import insta4 from "@/assets/images/blog/insta4.png";
import insta5 from "@/assets/images/blog/insta5.png";
import insta6 from "@/assets/images/blog/insta6.png";
;

export default function BlogDetails() {
  return (
    <div>
      <HeaderOne />
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
                    <a href="/">
                      <Image src={facebookIcon} alt="Facebook Icon"
                        className="social-icon" />
                      <h6 className="item-number">815.5K</h6>
                      <p className="item-title">Fans</p>
                    </a>
                  </div>
                  <div className="social-item">
                    <a href="/">
                      <Image src={twitterIcon} alt="Twitter Icon"
                        className="social-icon" />
                      <h6 className="item-number">107.2K</h6>
                      <p className="item-title">Followers</p>
                    </a>
                  </div>
                  <div className="social-item">
                    <a href="/">
                      <Image src={youtubeIcon} alt="Youtube Icon"
                        className="social-icon" />
                      <h6 className="item-number">90.6K</h6>
                      <p className="item-title">Subscribers</p>
                    </a>
                  </div>
                </div>

                <div className="categorie-widget mb-50">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="list-unstyled categorie-list">
                    <li>
                      <a href="/">
                        Development Tips <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Product Update <span>(9)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Case Study <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Creative <span>(07)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Inspiration <span>(06)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Landpagy <span>(11)</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Lifestyle <span>(05)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <RecentPosts />

                <div className="tag-widget mb-45">
                  <h4 className="widget-title">Tags</h4>
                  <ul className="list-unstyled tag-list">
                    <li>
                      <a href="/">WordPress</a>
                    </li>
                    <li>
                      <a href="/">web design</a>
                    </li>
                    <li>
                      <a href="/">ui/ux</a>
                    </li>
                    <li>
                      <a href="/">saas</a>
                    </li>
                    <li>
                      <a href="/">software</a>
                    </li>
                    <li>
                      <a href="/">creative</a>
                    </li>
                    <li>
                      <a href="/">product</a>
                    </li>
                    <li>
                      <a href="/">development</a>
                    </li>
                    <li>
                      <a href="/">design</a>
                    </li>
                    <li>
                      <a href="/">sequrity</a>
                    </li>
                    <li>
                      <a href="/">agency</a>
                    </li>
                  </ul>
                </div>

                <div className="instagram-widget">
                  <h4 className="widget-title">Instragram</h4>
                  <div className="instagram-items">
                    <a href="/" className="instagram-item">
                      <Image src={insta1} alt="" />
                    </a>
                    <a href="/" className="instagram-item">
                      <Image src={insta2} alt="" />
                    </a>
                    <a href="/" className="instagram-item">
                      <Image src={insta3} alt="" />
                    </a>
                    <a href="/" className="instagram-item">
                      <Image src={insta4} alt="" />
                    </a>
                    <a href="/" className="instagram-item">
                      <Image src={insta5} alt="" />
                    </a>
                    <a href="/" className="instagram-item">
                      <Image src={insta6} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterOne />
    </div>
  );
}
