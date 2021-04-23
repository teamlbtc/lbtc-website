import React from "react";
import "../AboutUs/aboutus.min.scss";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section>
      <div className="block abt-us">
        <div className="container">
          <div className="abt-wrp2">
            <div className="row align-items-center">
              <div className="col-md-7 col-sm-12 col-lg-7">
                <div className="abt-img-wrp">
                  <img
                    src={require("../AboutUs/AboutUs.jpg")}
                    alt="abt-img2-1.jpg"
                    itemprop="image"
                  />
                  <div className="abt-inf text-center greenwhitebox">
                    <span className="thm-clr">
                      <i className="counter">100</i>+
                    </span>
                    <p className="thm-clr" itemprop="description">
                      Wards Cleaned Till Date
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 col-lg-5">
                <div className="abt-desc">
                  <h2 itemprop="headline">About Us</h2>
                  <p itemprop="description">
                    Let's Be The Change (#TeamLBTC) is a non-profit organization
                    which aims to build a cleaner, healthier and more
                    sustainable society by working in synergy with the citizens and the
                    Government.
                    <br /> <br /> LBTC provides it's volunteers a platform
                    filled with zest to contribute more to the society along
                    with a sense of accomplishment and satisfaction.
                  </p>
                  <br />

                  <a className="thm-btn" itemprop="url">
                    <Link
                      to="/about"
                      className="learnmorebutton"
                      style={{ textDecoration: "none" }}
                    >
                      Learn More<span></span>
                    </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
