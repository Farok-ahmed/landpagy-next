import Link from "next/link";
;

export default function Pagination() {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item active" aria-current="page">
          <span className="page-link">1</span>
        </li>
        <li className="page-item">
          <Link href="/" className="page-link">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link href="/" className="page-link">
            3
          </Link>
        </li>
        <li className="page-item">
          <Link href="/" className="page-link">
            <i className="fas fa-chevron-right"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
