import React from "react";
import { Link } from "react-router-dom";
import "../ResponsiveHeader/responsiveheader.min.scss";

function ResponsiveHeader() {
  return (
    <div className="App">
      <div className="rspns-hdr">
        <div className="rspns-lg-mnu-br">
          <div className="container">
            <div className="logo">
              <Link to="">
                <img
                  src={require("../ResponsiveHeader/logobbx.png")}
                  alt="logo2.png"
                  itemprop="image"
                />
              </Link>
            </div>
            <span className="rspns-mnu-btn">
              <i className="fa fa-align-justify"></i>
            </span>
          </div>
          <div className="rspns-mnu">
            <span className="rspns-cls-btn">
              <i className="fa fa-times"></i>
            </span>
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
        </div>
        <div className="rspns-lnks-br adjustmenutemp">
          <div className="rspns-lnks-lst">
            <Link to="/about">
            <a
              title=""
              itemprop="url"
            >
              <i className="fa fa-user"></i>
              <span>About</span>
              </a></Link>
            <Link to="/gallery">
            <a
              
              title=""
              itemprop="url"
            >
              <i className="fa fa-image"></i>
              <span>Gallery</span>
              </a></Link>
            <Link to="/events">
            <a title="" itemprop="url">
              <i className="fa fa-calendar "></i>
              <span>Events</span>
              </a></Link>
          </div>
          <div className="rspns-lnks-lst">
            <Link to="/contact">
            <a
              
              title=""
              itemprop="url"
            >
              <i className="fa fa-phone"></i>
              <span>Contact</span>
              </a></Link>
            <Link to="/blog">
            <a
              
              title=""
              itemprop="url"
            >
              <i className="fa fa-rss"></i>
              <span>Blog</span>
              </a></Link>
            <a
              href="https://bengaluruveeraru.org/ourwork/index.html"
              title=""
              itemprop="url"
            >
              <i className="fa fa-globe"></i>
              <span>Covid-19</span>
            </a>
          </div>
          
        </div>
        <a
          className="thm-btn adjustdonatetemp"
          href="https://milaap.org/fundraisers/cleanathon-by-lbtc"
          title=""
          itemprop="url"
        >
          Donate<span></span>
        </a>
      </div>
    </div>
  );
}

export default ResponsiveHeader;
