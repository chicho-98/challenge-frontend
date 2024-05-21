import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <h2>Movies CRUD</h2>
        <nav>
            <Link to={"/movies"}><div>Movies</div></Link>
            <Link to={"/actors"}><div>Actors</div></Link>
        </nav>
    </header>
  )
}

export default Header