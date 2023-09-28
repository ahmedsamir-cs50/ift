import React from "react";
import { useState } from "react";
import { Container, div, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../Assests/menu.png";
import logo from "../../Assests/IFT-Corporation-Egypt-16132-1617184983.png";
import "./nav.css";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [collapse, setcollapse] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  });

  const handlecollapse = () => {
    setcollapse(!collapse);
  };

  return (
    <>
    
      <div className={nav ? "StickyNav" : "nav"}>
        <div
      
          className="logo d-flex align-items-center justify-content-center ms-5"
        >
          <Link to="/" className="brandName">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div  className="icons">
          <div>
            <img
              className="nav-button"
              onClick={handlecollapse}
              src={menu}
              alt=""
            ></img>
          </div>
        </div>

        <div
       
          className={collapse ? "Nav-links-Collapsed " : "Nav-links  mr-5"}
        >
          <ul className=" d-flex align-items-center justify-content-evenly">
            <li>About</li>
            <li>Services</li>
            <li>News</li>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      
    </>
  );
};

export default NavBar;
