import Link from "next/link";
;

export default function LinkShare() {
  return (
    <ul className="share-link">
      <li>
        <span>Share Now</span>
      </li>
      <li>
        <Link href="/">
          <i className="fab fa-facebook-f"></i>
        </Link>
      </li>
      <li>
        <Link href="/">
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </li>
      <li>
        <Link href="/">
          <i className="fab fa-instagram"></i>
        </Link>
      </li>
      <li>
        <Link href="/">
          <i className="fab fa-twitter"></i>
        </Link>
      </li>
    </ul>
  );
}
