import React from "react";
import { Link } from "react-router-dom";

export const TiyIndia = () => {
  return (
    <section>
      <div className="block remove-gap">
        <div
          className="fixed-bg shp-bg back-post-lftbtm"
          style={{
            backgroundImage: "url(../../assets/images/bg-shp1.png)",
          }}
        ></div>
        <div className="container">
          <div className="abt-wrp3">
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="abt-img">
                  <img
                    src={require("./MainImg.png")}
                    alt="orgn-mckp1.png"
                    itemprop="image"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="abt-desc3">
                  <h2 itemprop="headline">Buy Sustainable Products</h2>
                  <p itemprop="description">
                    Buy sustainable toys. Find many toys made with organic,
                    renewable, and other eco-friendly materials!
                  </p>
                  <br />

                  <a
                    href="https://tiyindia.in/"
                    className="thm-btn"
                    title=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Know More<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
