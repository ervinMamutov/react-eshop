import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/smartphones">Smartphone</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/motorcycles">Motorcycles</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/mensShoes">Mens Shoes</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
