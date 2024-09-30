import React from "react";
import "./Navbar.css";
import { Logo } from "../../assets/Icons";
import { Switch } from "../index";

const Navbar = () => {
  return (
    <header className="header__container">
      <div className="header-logo__container">
        <Logo />
        <h3>AniDen</h3>
      </div>
      <Switch />
    </header>
  );
};

export default Navbar;
