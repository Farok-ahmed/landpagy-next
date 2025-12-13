import Link from "next/link";
;

export default function CommunityLinks() {
  return (
    <div className="community-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="community-wrapper">
              <div className="community-text">
                <h3>Get help from Landpagy Community</h3>
                <p>
                  Connect with Landpagy users of all levels to learn, support &
                  inspire one another
                </p>
              </div>
              <div className="community-social">
                <div className="community-social-item">
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                    <span>Join 50k+ Landpagy Users on Facebook</span>
                  </Link>
                </div>
                <div className="community-social-item">
                  <Link href="/">
                    <i className="fab fa-meetup"></i>
                    <span>Meet & Collaborate With Local Landpagy Users</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
