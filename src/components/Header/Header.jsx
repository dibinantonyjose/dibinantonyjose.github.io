import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <h1>Dibin Jose</h1>
        <ul>
          <Link to="/">
            <li className="link-class">Home</li>
          </Link>
          <Link to="/projects">
            <li className="link-class">Projects</li>
          </Link>
          <Link to="/blogs">
            <li className="link-class">Blogs</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
