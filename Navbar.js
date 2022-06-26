import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Logo from "./logo.png";
import "./App.css";
import "./index.css";
import "./media.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <BrowserRouter>
      <div className="menu">
        <nav className="navigation">
          <a href="/" className="brand-name">
            <img src={Logo} className="logo_img" alt="Logo" />
          </a>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {/* hamburger svg code... */}
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <button
                className="hamburger"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                X
              </button>
              <li>
                <Link
                  to="/Home"
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Work"
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  CV
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
}
