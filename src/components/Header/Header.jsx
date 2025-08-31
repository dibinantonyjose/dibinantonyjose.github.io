import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <h1>Dibin Jose</h1>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/blogs">
            <li>Blogs</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
