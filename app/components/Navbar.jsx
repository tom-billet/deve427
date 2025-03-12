import { Link } from "react-router-dom";
import '../app.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Boutique</h1>
        <ul className="nav-links">
          <li>
            <Link to="/products" className="nav-link">Produits</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">Panier</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
