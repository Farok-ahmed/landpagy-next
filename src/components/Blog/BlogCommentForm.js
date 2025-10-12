;

export default function BlogCommentForm() {
  return (
    <div className="blog-comment-box">
      <h2 className="form-title">Leave a Reply</h2>
      <p className="form-para">
        Your email address will not be published. Required fields are marked *
      </p>
      <form className="row" action="#" method="post">
        <div className="col-md-6 form-group">
          <input type="text" className="form-control" id="name" required="" />
          <label className="floating-label">Full Name *</label>
        </div>
        <div className="col-md-6 form-group">
          <input type="email" className="form-control" id="email" required="" />
          <label className="floating-label">Email *</label>
        </div>
        <div className="col-md-12 form-group">
          <input type="text" className="form-control" id="web" required="" />
          <label className="floating-label">Website (Optional)</label>
        </div>
        <div className="col-md-12 form-group">
          <textarea className="form-control message" required=""></textarea>
          <label className="floating-label">Comment type...</label>
        </div>
        <div className="col-md-12 form-group check-input">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            name="flexCheckDefault"
            value=""
          />
          <label htmlFor="flexCheckDefault" className="form-check-label">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <div className="col-md-12 form-group">
          <button className="btn btn-red" type="submit">
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}
