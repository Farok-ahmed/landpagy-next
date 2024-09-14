import { Link } from "react-router-dom";

const BlogPost = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <div className="col-lg-4 col-sm-6" key={index}>
          <div
            className={`blog_grid_post shadow-sm wow fadeInUp`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={post.imageSrc} alt="" />
            <div className="grid_post_content">
              <div className="post_tag">
                <Link to="/blog-details">{post.readTime}</Link>
                <Link
                  className={`cat-${post.category.toLowerCase()}`}
                  to="/blog-details"
                >
                  {post.category}
                </Link>
              </div>
              <Link to="/blog-details">
                <h4 className="b_title">{post.title}</h4>
              </Link>
              <p>{post.excerpt}</p>
              <div className="media post_author">
                <div className="round_img">
                  <img src={post.author.imageSrc} alt="" />
                </div>
                <div className="media-body author_text">
                  <h4>{post.author.name}</h4>
                  <div className="date">{post.author.date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogPost;
