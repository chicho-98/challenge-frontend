import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>Movies CRUD</h2>
      <nav>
        <Link to={"/movies"} className="link">
          <div>Movies</div>
        </Link>
        <Link to={"/actors"} className="link">
          <div>Actors</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
