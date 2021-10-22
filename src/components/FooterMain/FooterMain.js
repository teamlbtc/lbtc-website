import React from "react";
import "./FooterMain.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaPhone,
  FaRegAddressBook,
} from "react-icons/fa";

const FooterMain = () => {
  return (
    <footer class="sectionx bg-footer">
      <h4 style={{ color: "white", paddingBottom: "19px" }}>
        {" "}
        <img
          alt="logoFooter"
          src={require("./LBTC-Header-Logo-CS.png")}
        ></img>{" "}
        {"Let's Be The Change"}
        <br></br>
      </h4>
      <div class="containerx">
        <div class="col-lg-3">
          <div class="textcenter">
            <h6 class="footer-headingx text-uppercase text-white">INFO</h6>
            <ul class="list-unstyled footer-link mt-4">
              <li>
                <FaPhone></FaPhone>
                <a href="tel:+919353218818"> - +91 93532 18818</a>
              </li>
              <li>
                <FaRegAddressBook></FaRegAddressBook>
                <a href="https://goo.gl/maps/HhhVtD3ZP7QNRuze9">
                  - 95, 3nd, Main Rd, Anjaneya Nagar, Ittamadu, Banashankari 3rd
                  Stage, Banashankari, Bengaluru, Karnataka 560085
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="textcenter">
            <h6 class="footer-heading text-uppercase text-white">
              Quick Links
            </h6>
            <ul class="list-unstyled footer-link mt-4">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/newsletters">Newsletter</Link>
              </li>
              <li>
                <Link to="/supporters">Supporters</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/covid19">Covid-19</Link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="textcenter">
            <h6 class="footer-heading text-uppercase text-white">Contact Us</h6>
            <p class="contact-info mt-4">
              Contact us if need help with anything
            </p>
            <p class="contact-info">
              <Link to="/contact">Contact</Link>
            </p>
            <div class="mt-5">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <div class="fab google footer-social-icon">
                    <a
                      class="fab google footer-social-icon"
                      href="https://www.instagram.com/team_lbtc/"
                    >
                      <FaInstagram></FaInstagram>
                    </a>
                  </div>
                </li>
                <li class="list-inline-item">
                  <div class="fab facebook footer-social-icon">
                    <a
                      class="fab facebook footer-social-icon"
                      href="https://www.facebook.com/TeamLBTC/"
                    >
                      <FaFacebookF></FaFacebookF>
                    </a>
                  </div>
                </li>
                <li class="list-inline-item">
                  <div class="fab twitter footer-social-icon">
                    <a
                      class="fab twitter footer-social-icon"
                      href="https://twitter.com/TeamLBTC"
                    >
                      <FaTwitter></FaTwitter>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5">
        <p class="footer-alt mb-0 f-14">
          {new Date().getFullYear()} © LBTC, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterMain;