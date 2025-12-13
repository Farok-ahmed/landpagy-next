import Link from "next/link";
;

export default function TagWidget() {
  return (
    <div className="tag-widget mb-45">
      <h4 className="widget-title">Tags</h4>
      <ul className="list-unstyled tag-list">
        <li>
          <Link href="/">WordPress</Link>
        </li>
        <li>
          <Link href="/">web design</Link>
        </li>
        <li>
          <Link href="/">ui/ux</Link>
        </li>
        <li>
          <Link href="/">saas</Link>
        </li>
        <li>
          <Link href="/">software</Link>
        </li>
        <li>
          <Link href="/">creative</Link>
        </li>
        <li>
          <Link href="/">product</Link>
        </li>
        <li>
          <Link href="/">development</Link>
        </li>
        <li>
          <Link href="/">design</Link>
        </li>
        <li>
          <Link href="/">sequrity</Link>
        </li>
        <li>
          <Link href="/">agency</Link>
        </li>
      </ul>
    </div>
  );
}
