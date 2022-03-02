import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../component-styles/Navbar.css";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Logo from "../../assets/RoboVITics-Logo.svg";
import styled from "styled-components";
import Circle from "../../assets/PageSVGs/Header/Circle.svg";
import Icon from "../../assets/PageSVGs/Header/icon.svg";

const Image = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  right: ${(props) => props.right};

  @media only screen and (max-width: 610px) {
    height: ${(props) => props.sm};
  }
`;

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
    
  };
  
  const helperTwo = () => window.scrollTo({ top: 700, behavior: "smooth" });
  const helperThree = () => window.scrollTo({ top: 1500, behavior: "smooth" });
  const helperFour = () => window.scrollTo({ top: 2200, behavior: "smooth" });
  const helperFive = () => window.scrollTo({ top: 2900, behavior: "smooth" });
  const helperSix = () => window.scrollTo({ top: 5350, behavior: "smooth" });
  const helperSeven = () => window.scrollTo({ top: 7100, behavior: "smooth" });
  const helperEight = () => window.scrollTo({ top: 7900, behavior: "smooth" });

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <Image
            src={Circle}
            alt="circle"
            top={"0%"}
            right={"0%"}
            height={"19vh"}
            sm={"3vh"}
          />
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={Logo} alt="logo" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <img src={Icon} alt="icon" />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                    helperTwo();
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/domain"
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                    helperThree();
                  }}
                >
                  Domains
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/speakers"
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                    helperFour();
                  }}
                >
                  Speakers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/timeline"
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                    helperFive();
                  }}
                >
                  Timeline
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/prizes"
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                    helperSix();
                  }}
                >
                  Prizes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/faqs"
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                    helperSeven();
                  }}
                >
                  FAQ's
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sponsors"
                  className="nav-links"
                  onClick={() => {
                    closeMobileMenu();
                    helperEight();
                  }}
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
