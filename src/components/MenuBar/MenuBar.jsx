import React from "react";
import { Link } from "react-router-dom";
import "../MenuBar/menubar.min.scss";

function MenuBar() {
  return (
    <header class="style1 v2 stick flex makethebarfix">
      <div class="container">
        <div class="wb-lgmnu-wrp flex justify-content-between">
          <Link to="">
            <div class="logo">
              <img
                src={require("../MenuBar/LBTC-Header-Logo-CS.png")}
                alt="MenuBar-Logo.png"
                itemprop="image"
              />
            </div>
          </Link>

          {/* <Link to="">
            <div class="logo">
              <img
                src={require("../MenuBar/kannada-logo.png")}
                alt="MenuBar-Logo.png"
                itemprop="image"
              />
            </div>
          </Link> */}

          {/* <div className="tp-scl">
            <a
              href="https://www.facebook.com/TeamLBTC/"
              title="Facebook"
              itemprop="url"
              target="_blank"
            >
              <i class="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/team_lbtc/"
              title="Instagram"
              itemprop="url"
              target="_blank"
            >
              <i class="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.twitter.com/teamlbtc/"
              title="Twitter"
              itemprop="url"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </div> */}
          <nav>
            <div>
              <ul>
                <li>
                  <img
                    className="kannadatextfinal"
                    src={require("../MenuBar/kannada-logo.png")}
                    alt="MenuBar-Logo.png"
                    itemprop="image"
                  />
                </li>
                <li class="menu-item-has-children">
                  <Link to="/about">About</Link>
                </li>
                <li class="menu-item-has-children">
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li class="menu-item-has-children">
                  <Link to="/supporters">Supporters</Link>
                </li>
                {/* <li>
                  <Link to="/finance">Funds</Link>
                </li> */}
                <li class="menu-item-has-children">
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/covid19">Covid-19</Link>
                </li>
              </ul>
              <a
                class="thm-btn yellowcolor"
                href="https://www.ketto.org/fundraiser/westandtogether-oxygen-support-for-10k-vulnerable-families?payment=form"
                title=""
                itemprop="url"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Donate<span></span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default MenuBar;
