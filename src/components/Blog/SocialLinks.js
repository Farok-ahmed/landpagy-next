import Image from "next/image";
import facebookIcon from "@/assets/images/blog/facebook-icon.svg";
import twitterIcon from "@/assets/images/blog/twitter-icon.svg";
import youtubeIcon from "@/assets/images/blog/youtube-icon.svg";
;

export default function SocialLinks() {
  return (
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
  );
}
