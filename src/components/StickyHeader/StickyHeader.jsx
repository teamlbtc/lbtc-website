import React from "react";
import { Link } from "react-router-dom";

function StickyHeader() {
  return (
    <div className="App">
      <div className="sticky-header flex">
        <div className="container">
          <div className="wb-lgmnu-wrp flex justify-content-between">
            <div className="logo">
              <a href="index.html" title="Home" itemprop="url">
                <img
                  src={require("../../assets/images/logo2.png")}
                  alt="logo2.png"
                  itemprop="image"
                />
              </a>
            </div>
            <nav>
              <div>
                <ul>
                  <li className="menu-item-has-children">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyHeader;
