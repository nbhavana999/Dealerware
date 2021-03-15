import React from "react";
import "../cssFiles/header.scss";
import menu from "../icons/menuIcon.png";
function Header() {
  return (
    <div data-testid="ancestor" className="header">
      <img src={menu} alt="menu" />
      <div className="fontSizeForNav">SILVERCAR</div>
      <div className="fontSizeForNavFooter">by Audi</div>
      <div className="design"></div>
      <div className="pillDesign">Sign Up | Log in</div>
      <div className="helpSection">Help</div>
    </div>
  );
}

export default Header;
