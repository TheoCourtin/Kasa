import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>

      <nav className="navigation">
        <ul>
          <NavLink
            to="/"            
            className={(nav) => (nav.isActive ? "nav-active": undefined)}
            end
          >
            <li>accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active": undefined)}
          >
            
            <li>à propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;