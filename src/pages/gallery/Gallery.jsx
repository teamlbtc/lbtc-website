import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import "../gallery/gallery.min.scss";
import "../blog/blog.min.scss";
import { Link } from "react-router-dom";
import { FooterMain } from "../../components/FooterMain/FooterMain";

const Gallery = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <main>
        <HeaderBar></HeaderBar>

        <MenuBar></MenuBar>

        <StickyHeader></StickyHeader>

        {/* <ResponsiveHeader></ResponsiveHeader> */}
        <MenuBarX></MenuBarX>
        <section>
          <div class="block no-padding aboutpaddingnotreqd">
            <div class="pg-tp-bg">
              <img
                src={require("../aboutus/AboutUs-Main-3.jpg")}
                alt="Main-Background.jpg"
                itemprop="image"
              />
            </div>
          </div>
        </section>
        <section>
          <div class="gray-bg3 brdcrmb-wrp">
            <div class="container">
              <div class="brdcrmb-inr flex justify-content-between">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="" title="" itemprop="url">
                      Home
                    </Link>
                  </li>
                  <li class="breadcrumb-item active">Gallery</li>
                </ol>
              </div>
            </div>
          </div>
          <section>
            <div className="block blockx" style={{ padding: "1rem" }}>
              <div className="container">
                <div className="abt-pg-wrp">
                  <h2 itemprop="headline">Gallery</h2>
                </div>
              </div>
            </div>
          </section>
          <div class="block">
            <div class="container">
              <div class="gal-wrp text-center remove-ext1">
                <div class="row mrg20">
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="row mrg20">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/Images/gallery1page/1.jpg")}
                            alt="gal-img2-1.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">
                            Covid Relief
                            <br /> Project
                          </h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/Images/gallery1page/8.jpg")}
                            alt="gal-img2-2.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Cleanathon</h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/Images/gallery1page/7.jpg")}
                            alt="gal-img2-3.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">
                            Kids <br /> Engagement
                          </h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/Images/gallery1page/4.jpg")}
                            alt="gal-img2-4.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Surveying</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="gal-itm">
                      <img
                        src={require("../gallery/Images/gallery1page/1L.jpg")}
                        alt="gal-img2-5.jpg"
                        itemprop="image"
                      />
                      <h4 itemprop="headline">Covid Relief Project</h4>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="row mrg20">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/Images/gallery1page/3.jpg")}
                            alt="gal-img2-6.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Cleanathon</h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/Images/gallery1page/9.jpg")}
                            alt="gal-img2-7.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Street Play</h4>
                        </div>
                      </div>
                      <div class="col-md-12 col-sm-12 col-lg-12">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/Images/gallery1page/2L.jpg")}
                            alt="gal-img2-8.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Community Interaction</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="row mrg20">
                      <div class="col-md-12 col-sm-12 col-lg-12">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/Images/gallery1page/4L.jpg")}
                            alt="gal-img2-9.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Waste Management Workshop</h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/Images/gallery1page/10.jpg")}
                            alt="gal-img2-10.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Awareness Session</h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/Images/gallery1page/11.jpg")}
                            alt="gal-img2-11.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Covid Relief Team</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pgntin-wrp">
                <ul class="pagination">
                  <li class="page-item">
                    <Link
                      to="/gallery-3"
                      class="page-link next"
                      title=""
                      itemprop="url"
                    >
                      <i class="fa fa-angle-left"></i>
                    </Link>
                  </li>
                  <li class="page-item active">
                    <span class="page-link">1</span>
                  </li>
                  <li class="page-item">
                    <Link
                      to="/gallery-1"
                      class="page-link"
                      style={{ color: "#1b6dae" }}
                    >
                      2
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link
                      to="/gallery-2"
                      class="page-link"
                      style={{ color: "#1b6dae" }}
                    >
                      3
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link
                      to="/gallery-3"
                      class="page-link"
                      style={{ color: "#1b6dae" }}
                    >
                      4
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link
                      to="/gallery-1"
                      class="page-link next"
                      href="#top"
                      title=""
                      itemprop="url"
                    >
                      <i class="fa fa-angle-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FooterMain></FooterMain>
      </main>
    </div>
  );
};

export default Gallery;
