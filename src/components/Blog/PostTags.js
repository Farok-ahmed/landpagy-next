import Link from "next/link";
;

export default function PostTags() {
  return (
    <div className="tag-widget mb-50">
      <ul className="list-unstyled tag-list">
        <li>
          <p>Tags :</p>
        </li>
        <li>
          <Link href="/">WordPress</Link>
        </li>
        <li>
          <Link href="/">web design</Link>
        </li>
        <li>
          <Link href="/">software</Link>
        </li>
      </ul>
    </div>
  );
}
