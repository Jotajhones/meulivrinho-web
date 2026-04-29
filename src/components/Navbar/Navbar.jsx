import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Meu Livrinho</Link>
        <div className="nav-links">
          <Link to="/">Início</Link>
          <Link to="/quem-somos">Quem Somos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;