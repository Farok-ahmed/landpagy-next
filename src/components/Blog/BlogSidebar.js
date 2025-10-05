import React from "react";
import SubscribeWidget from "./SubscribeWidget";
import SocialLinks from "./SocialLinks";
import CategoryWidget from "./CategoryWidget";
import RecentNews from "./RecentNews";
import TagWidget from "./TagWidget";
import InstagramWidget from "./InstagramWidget";

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
