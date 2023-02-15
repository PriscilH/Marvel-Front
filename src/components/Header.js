import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Marvel_Logo.svg.png";

const Header = () => {
  return (
    <header>
      <div className="Header">
        <div className="Logo">
          <Link to="/">
            <img src={logo} alt="Logo Marvel" />
          </Link>
        </div>
        <nav className="Nav">
        <button><Link to="/comics">COMICS</Link></button>
        <button><Link to="/characters">CHARACTERS</Link></button>
        <button><Link to="/favs">FAVORITES</Link></button>
        </nav>
        <div className="Login">
          <button className="Logbutton">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;