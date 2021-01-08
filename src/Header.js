import React from "react";
import "./Header.css";
// 🌙

function Header() {
  return (
    <div className="header">
      <h1>Where in the world?</h1>
      <div className="header__darkmode">
        <span>🔆</span>
        <h5>Dark Mode</h5>
      </div>
    </div>
  );
}

export default Header;
