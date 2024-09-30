import React from "react";
import "./Footer.css";
import { Logo } from "../../assets/Icons";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__deco"></div>
      <div className="footer__logo">
        <Logo />
        <h3>Aniden</h3>
      </div>
      <div className="footer__deco"></div>
    </footer>
  );
};

export default Footer;
