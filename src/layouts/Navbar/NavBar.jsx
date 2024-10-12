import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faBagShopping } from "@fortawesome/free-solid-svg-icons";
// import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/new_logo.png";
import "./nav.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          draggable="false"
          src="https://a.storyblok.com/f/293555/1080x1080/0b2d722996/new_logo.png"
          alt="Logo"
        />
        <p className="win">Diamond Jewellery Company</p>
        <p className="mob">DJC</p>
      </div>

      <div className="icon">
        <div className="search-bar">
          <input type="text" placeholder="" />
          {/* <FontAwesomeIcon icon={faSearch} className="search-icon" /> */}
        </div>
        {/* <FontAwesomeIcon icon={faBars} /> */}
        <span>
          {/* <FontAwesomeIcon icon={faHeart} /> */}
        </span>
        <span>
          {/* <FontAwesomeIcon icon={faBagShopping} /> */}
        </span>
        <span>
          {/* <FontAwesomeIcon icon={faUser} /> */}
        </span>
        <p className="username">username</p>
      </div>
    </nav>
  );
}

export default NavBar;
