import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <h1>Dibin Jose</h1>
        <ul aria-label="main navigation links">
          <li className="link-class">
            <Link to="/">Home</Link>
          </li>
          <li className="link-class">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="link-class">
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
