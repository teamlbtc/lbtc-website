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
                  <br />
                  <br />
                  <br />
                  <ul class="abt-cnt-lst">
                    <li style={{textAlign: "justify"}}>
                      <i class="flaticon-telephone thm-clr"></i>
                      <a href="tel:+919353218818">+91 93532 18818</a>
                    </li>

                    <li style={{textAlign: "justify"}}>
                      <i class="fa fa-map-marker thm-clr"></i>
                      <a href="https://www.google.com/maps?ll=12.928404,77.528416&z=12&t=m&hl=en-US&gl=IN&mapclient=embed&saddr&daddr=Let%27s+Be+The+Change,+25th+Main+Road,+1062,+15th+Cross+Rd,+Banashankari+Stage+II,+Bengaluru,+Karnataka+560070&dirflg=d">
                        No. 1062, 15th Cross,
                        <br /> 25th Main, Banashankari II Stage, Bengaluru -
                        560070
                      </a>
                    </li>
                  </ul>
                  <div class="cnt-sclx">
                    <a
                          class="facebook"
                          href="https://www.facebook.com/TeamLBTC/"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                          without
                          rel="noopener noreferrer"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a
                          class="twitter"
                          href="https://twitter.com/TeamLBTC"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                          without
                          rel="noopener noreferrer"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a
                          class="instagram"
                          href="https://www.instagram.com/team_lbtc/"
                          title="Instagram"
                          itemprop="url"
                          target="_blank"
                          without
                          rel="noopener noreferrer"
                        >
                          <i class="fa fa-instagram"></i>
                        </a>
                    </div>
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
                      <a href="#end" title="" itemprop="url">
                        Covid-19 Work
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-lg-4">
                <p class="cpyrgt-p" itemprop="description">
                  Copyright {new Date().getFullYear()} &copy;{" "}
                  <a href="index.html" title="Team LBTC" itemprop="url">
                    Team LBTC <br />
                  </a>{" "}
                </p>
                <div class="ftr-sbscrb thm-layer opcAdi">
                  <p itemprop="description">
                    Feel free to get in touch with us{" "}
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
