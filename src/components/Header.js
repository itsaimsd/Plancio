// Header.js
import React from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ({ toggleLeftSidebar }) => {
  return (
    <header className="header">
      <div className="header-left"> 
        <div className="menu-icon">
          <button onClick={toggleLeftSidebar} className="hamburger-icon">
            ☰
          </button>
        </div>
        <span className="logo-text">Plancio</span>
      </div>
      <div className="header-right">
        <FontAwesomeIcon icon={faSearch} className="icon" />

        {/* Custom Grid Icon as SVG for the 2x2 grid */}
        <svg
          className="icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="8" height="8" fill="#333" />
          <rect x="13" y="3" width="8" height="8" fill="#333" />
          <rect x="3" y="13" width="8" height="8" fill="#333" />
          <rect x="13" y="13" width="8" height="8" fill="#333" />
        </svg>

        <FontAwesomeIcon icon={faMoon} className="icon" />
      </div>
    </header>
  );
};

export default Header;
