import Image from "next/image";
import topPost from "@/assets/images/blog_grid/top_post.jpg";
import ansley from "@/assets/images/blog_grid/ansley.jpg";
;

export default function FullWidthPost() {
  return (
    <section className="blog_top_post_area">
      <div className="container blog-grid-container">
        <div className="row blog_top_post flex-row-reverse shadow">
          <div className="col-lg-7 p_top_img">
            <Image src={topPost} className="p_img"
              
              alt="" />
          </div>
          <div className="col-lg-5 p-0">
            <div className="b_top_post_content">
              <div className="post_tag">
                <a href="/">9 Min Read</a>
                <a className="c_blue" href="/">
                  WordPress
                </a>
              </div>
              <a href="/">
                <h3>10 WordPress Security Issues And How to Fix Them</h3>
              </a>
              <p>
                Tinkety tonk old fruit bodge on your bike mate car boot my good
                sir jolly good such a fibber up the kyver golly gosh David, naff
                chap.!
              </p>
              <a href="/" className="learn_btn">
                Continue Reading<i className="arrow_right"></i>
              </a>
              <div className="media post_author">
                <div className="round_img">
                  <Image src={ansley} alt="" />
                </div>
                <div className="media-body author_text">
                  <h4>Jason Response</h4>
                  <div className="date">Sep 14, 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
