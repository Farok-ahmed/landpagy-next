;
import CategoryWidget from "./CategoryWidget";
import InstagramWidget from "./InstagramWidget";
import RecentNews from "./RecentNews";
import SocialLinks from "./SocialLinks";
import SubscribeWidget from "./SubscribeWidget";
import TagWidget from "./TagWidget";

export default function BlogSidebar() {
  return (
    <div className="blog-sidebar ml-40">
      <SubscribeWidget />
      <SocialLinks />
      <CategoryWidget />
      <RecentNews />
      <TagWidget />
      <InstagramWidget />
    </div>
  );
}
