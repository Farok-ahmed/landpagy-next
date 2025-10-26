import Link from "next/link";
import Image from "next/image";
import post1 from "@/assets/images/blog/post1.jpg";
import post2 from "@/assets/images/blog/post2.jpg";
import post3 from "@/assets/images/blog/post3.jpg";
import post4 from "@/assets/images/blog/post4.jpg";
import post5 from "@/assets/images/blog/post5.jpg";
import post6 from "@/assets/images/blog/post6.jpg";
import post7 from "@/assets/images/blog/post7.jpg";
import post8 from "@/assets/images/blog/post8.jpg";
import post9 from "@/assets/images/blog/post9.jpg";
;


export default function BlogPosts() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="top-post-item mb-30">
            <Image src={post1} alt="Blog Post" />
            <div className="post-content">
              <a href="/" className="cate-btn">
                Development Tips
              </a>
              <h4 className="post-title">
                <Link href="/blog-details">
                  {" "}
                  How Landpagy Improved Development Process{" "}
                </Link>
              </h4>
              <p className="post-para">
                Cup of char brilliant horse play bro bread sloshed lavatory
                only...
              </p>
              <div className="d-flex justify-content-between">
                <div className="post-author">
                  <a href="/blog-details" className="auth-name">
                    <i className="far fa-user-circle"></i> Zain Siphron
                  </a>
                </div>
                <div className="post-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> March 18, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="post-item">
            <Image src={post2} alt="Blog Post" />
            <div className="post-content">
              <a href="/" className="cate-btn">
                Product Update
              </a>
              <h4 className="post-title">
                <Link href="/blog-details">
                  {" "}
                  How Landpagy elevated the design.{" "}
                </Link>
              </h4>
              <p className="post-para">
                Cup of char brilliant horse play bro bread sloshed lavatory
                only...
              </p>
              <div className="d-flex justify-content-between">
                <div className="post-author">
                  <a href="/" className="auth-name">
                    <i className="far fa-user-circle"></i> Zain Siphron
                  </a>
                </div>
                <div className="post-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> March 18, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="post-item">
            <Image src={post3} alt="Blog Post" />
            <div className="post-content">
              <a href="/" className="cate-btn">
                Case Study
              </a>
              <h4 className="post-title">
                <Link href="/blog-details">
                  {" "}
                  How Ceros launched Sketch, Photoshop.{" "}
                </Link>
              </h4>
              <p className="post-para">
                Cup of char brilliant horse play bro bread sloshed lavatory
                only...
              </p>
              <div className="d-flex justify-content-between">
                <div className="post-author">
                  <a href="/" className="auth-name">
                    <i className="far fa-user-circle"></i> Zain Siphron
                  </a>
                </div>
                <div className="post-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> March 18, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="post-item">
            <Image src={post4} alt="Blog Post" />
            <div className="post-content">
              <a href="/" className="cate-btn">
                Development Tips
              </a>
              <h4 className="post-title">
                <Link href="/blog-details">
                  {" "}
                  How Landpagy elevated the design.{" "}
                </Link>
              </h4>
              <p className="post-para">
                Cup of char brilliant horse play bro bread sloshed lavatory
                only...
              </p>
              <div className="d-flex justify-content-between">
                <div className="post-author">
                  <a href="/" className="auth-name">
                    <i className="far fa-user-circle"></i> Juhan Ahamed
                  </a>
                </div>
                <div className="post-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> March 18, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="post-item">
            <Image src={post5} alt="Blog Post" />
            <div className="post-content">
              <a href="/" className="cate-btn">
                Creative
              </a>
              <h4 className="post-title">
                <Link href="/blog-details">
                  {" "}
                  How Ceros launched Sketch, Photoshop.{" "}
                </Link>
              </h4>
              <p className="post-para">
                Cup of char brilliant horse play bro bread sloshed lavatory
                only...
              </p>
              <div className="d-flex justify-content-between">
                <div className="post-author">
                  <a href="/" className="auth-name">
                    <i className="far fa-user-circle"></i> Eh Jewel
                  </a>
                </div>
                <div className="post-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> March 18, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="post-item">
            <Image src={post6} alt="Blog Post" />
            <div className="post-content">
              <a href="/" className="cate-btn">
                Product Update
              </a>
              <h4 className="post-title">
                <Link href="/blog-details">
                  {" "}
                  How Landpagy elevated the design.{" "}
                </Link>
              </h4>
              <p className="post-para">
                Cup of char brilliant horse play bro bread sloshed lavatory
                only...
              </p>
              <div className="d-flex justify-content-between">
                <div className="post-author">
                  <a href="/" className="auth-name">
                    <i className="far fa-user-circle"></i> Zain Siphron
                  </a>
                </div>
                <div className="post-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> March 18, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="post-item">
            <Image src={post7} alt="Blog Post" />
            <div className="post-content">
              <a href="/" className="cate-btn">
                Case Study
              </a>
              <h4 className="post-title">
                <Link href="/blog-details">
                  {" "}
                  How Ceros launched Sketch, Photoshop.{" "}
                </Link>
              </h4>
              <p className="post-para">
                Cup of char brilliant horse play bro bread sloshed lavatory
                only...
              </p>
              <div className="d-flex justify-content-between">
                <div className="post-author">
                  <a href="/" className="auth-name">
                    <i className="far fa-user-circle"></i> Zain Siphron
                  </a>
                </div>
                <div className="post-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> March 18, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="post-item">
            <Image src={post8} alt="Blog Post" />
            <div className="post-content">
              <a href="/" className="cate-btn">
                Development Tips
              </a>
              <h4 className="post-title">
                <Link href="/blog-details">
                  {" "}
                  How Landpagy elevated the design.{" "}
                </Link>
              </h4>
              <p className="post-para">
                Cup of char brilliant horse play bro bread sloshed lavatory
                only...
              </p>
              <div className="d-flex justify-content-between">
                <div className="post-author">
                  <a href="/" className="auth-name">
                    <i className="far fa-user-circle"></i> Juhan Ahamed
                  </a>
                </div>
                <div className="post-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> March 18, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="post-item">
            <Image src={post9} alt="Blog Post" />
            <div className="post-content">
              <a href="/" className="cate-btn">
                Creative
              </a>
              <h4 className="post-title">
                <Link href="/blog-details">
                  {" "}
                  How Ceros launched Sketch, Photoshop.{" "}
                </Link>
              </h4>
              <p className="post-para">
                Cup of char brilliant horse play bro bread sloshed lavatory
                only...
              </p>
              <div className="d-flex justify-content-between">
                <div className="post-author">
                  <a href="/" className="auth-name">
                    <i className="far fa-user-circle"></i> Eh Jewel
                  </a>
                </div>
                <div className="post-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> March 18, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
