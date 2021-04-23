import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import "../gallery/gallery.min.scss";
import "../blog/blog.min.scss";
import { Link } from "react-router-dom";

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
                            src={require("../gallery/Images/gallery4page/1.jpg")}
                            alt="gal-img2-1.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Cleanathon</h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/Images/gallery4page/8.jpg")}
                            alt="gal-img2-2.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Plog Run</h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/Images/gallery4page/7.jpg")}
                            alt="gal-img2-3.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Governing Council</h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/Images/gallery4page/4.jpg")}
                            alt="gal-img2-4.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Core Team</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="gal-itm">
                      <img
                        src={require("../gallery/Images/gallery4page/1L.jpg")}
                        alt="gal-img2-5.jpg"
                        itemprop="image"
                      />
                      <h4 itemprop="headline">Clay Ganesha Workshop 2018</h4>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="row mrg20">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/Images/gallery4page/3.jpg")}
                            alt="gal-img2-6.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Clay Ganesha Workshop 2017</h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/Images/gallery4page/9.jpg")}
                            alt="gal-img2-7.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">
                            Plog Run With West Block Blues
                          </h4>
                        </div>
                      </div>
                      <div class="col-md-12 col-sm-12 col-lg-12">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/Images/gallery4page/2L.jpg")}
                            alt="gal-img2-8.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Let's Plog Bengaluru Innaugration</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="row mrg20">
                      <div class="col-md-12 col-sm-12 col-lg-12">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/Images/gallery4page/4L.jpg")}
                            alt="gal-img2-9.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Tree Plantation Drive</h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/Images/gallery4page/10.jpg")}
                            alt="gal-img2-10.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">
                            Activity in Government Schools
                          </h4>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/Images/gallery4page/11.jpg")}
                            alt="gal-img2-11.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Awareness Stall</h4>
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
                      to="/gallery"
                      class="page-link next"
                      title=""
                      itemprop="url"
                    >
                      <i class="fa fa-angle-left"></i>
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link
                      to="/gallery"
                      class="page-link"
                      style={{ color: "#1b6dae" }}
                    >
                      1
                    </Link>
                  </li>
                  <li class="page-item active">
                    <span class="page-link">2</span>
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
                      to="/gallery-2"
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

        <Footer></Footer>
      </main>
    </div>
  );
};

export default Gallery;
