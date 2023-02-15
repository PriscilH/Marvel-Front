import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Marvel_Logo.svg.png";

const Header = () => {
  return (
    <header>
      <div className="Header">
        <div className="Authentification">
        <button className="Signbutton">
            SIGN IN | JOIN
        </button>
        <div className="Logo">
          <Link to="/">
            <img src={Logo} alt="Logo Marvel" />
          </Link>
        </div>
        <button className="Subbutton">
            MARVEL UNLIMITTED SUBSCRIBE
          </button>
        </div>
        <div className="Trait"></div>
        <nav className="Nav">
        <button><Link to="/comics">COMICS</Link></button>
        <button><Link to="/characters">CHARACTERS</Link></button>
        <button><Link to="/favs">FAVORITES</Link></button>
        </nav>
      </div>
    </header>
  );
};

export default Header;