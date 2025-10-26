import Link from "next/link";
;

export default function CategoryWidget() {
  return (
    <div className="categorie-widget mb-50">
      <h4 className="widget-title">Categories</h4>
      <ul className="list-unstyled categorie-list">
        <li>
          <Link href="/">
            Development Tips <span>(10)</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            Product Update <span>(9)</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            Case Study <span>(12)</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            Creative <span>(07)</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            Inspiration <span>(06)</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            Landpagy <span>(11)</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            Lifestyle <span>(05)</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
