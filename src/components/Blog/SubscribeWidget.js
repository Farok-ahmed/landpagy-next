;

export default function SubscribeWidget() {
  return (
    <div className="subscribe-widget mb-40">
      <h4 className="widget-title">Subscribe to our blog</h4>
      <p className="widget-para">Get the latest posts in your email</p>
      <form className="form-group">
        <input type="email" placeholder="Enter your email" />
        <button type="submit" className="btn btn-red">
          Subscribe
        </button>
      </form>
    </div>
  );
}
