;

export default function BlogNewsLetter() {
  return (
    <section className="doc_action_area_three">
      <img
        className="p_absolute shadows"
        src="/images/blog_grid/shadow_action.png"
        alt=""
      />
      <img
        className="p_absolute b_man"
        src="/images/blog_grid/man.png"
        alt=""
      />
      <div className="container blog-grid-container">
        <div className="row">
          <div className="col-lg-5">
            <div className="action_content">
              <h2>
                Want to read more about your favourite <span>topic?</span>
              </h2>
              <p>Get regular updates in your inbox</p>
            </div>
          </div>
          <div className="col-md-10 col-lg-6 offset-lg-1">
            <form
              action="#"
              className="footer_subscribe_form action_subscribe_form"
            >
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email Address"
                />
                <button className="s_btn" type="submit">
                  Subcribe Now <i className="arrow_right"></i>
                </button>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  I agree to the Docy Terms & Conditions
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
