import React from "react";
import '../Footer/footer.min.scss';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div class="block dark-layer opc3">
        <div
          class="fixed-bg drk-bg back-blend-darken"
          style={{ backgroundImage: "url(assets/images/prlx-bg2.jpg)" }}
        ></div>
        <div class="container">
          <div class="ftr-dta-wrp remove-ext10">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-lg-4">
                <div class="wdgt-bx">
                  <div class="logo">
                    <Link to="/">
                      <img
                        src={require("../Footer/LBTC-Footer-Logo-C.png")}
                        alt="Footer-Logo.png"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  {/* <p itemprop="description">
                    We believe cleanlinesss can be established and issues can be
                    solved when citizens take up initiatives and work in synergy
                    with the Government.
                  </p> */}
                  <br />
                  <br />
                  <br />
                  <ul class="abt-cnt-lst">
                    <li>
                      <i class="flaticon-telephone thm-clr"></i>
                      <a href="tel:+919353218818">+91 93532 18818</a>
                    </li>

                    <li>
                      <i class="fa fa-map-marker thm-clr"></i>
                      <a href="https://www.google.com/maps?ll=12.928404,77.528416&z=12&t=m&hl=en-US&gl=IN&mapclient=embed&saddr&daddr=Let%27s+Be+The+Change,+25th+Main+Road,+1062,+15th+Cross+Rd,+Banashankari+Stage+II,+Bengaluru,+Karnataka+560070&dirflg=d">
                        No. 1062, 15th Cross,
                        <br /> 25th Main, Banashankari II Stage, Bengaluru -
                        560070
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-lg-4">
                <div class="wdgt-bx">
                  <ul>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/events">Events</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#" title="" itemprop="url">
                        Covid-19 Work
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-lg-4">
                <p class="cpyrgt-p" itemprop="description">
                  Copyright 2020 &copy;{" "}
                  <a href="index.html" title="Team LBTC" itemprop="url">
                    Team LBTC <br />
                  </a>{" "}
                  {/* Powered By{" "}
                  <a
                    href="https://www.google.com"
                    title="Team LBTC"
                    itemprop="url"
                  >
                    HexClan Labs <br />
                  </a> */}
                </p>
                <div class="ftr-sbscrb thm-layer opcAdi">
                  {/* <div
                    class="fixed-bg thm-bg patern-bg"
                  ></div> */}
                  <p itemprop="description">
                    Feel free to get in touch with us{" "}
                    {/* <strong>update to you email.</strong> */}
                  </p>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
