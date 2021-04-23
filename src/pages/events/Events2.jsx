import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import "../events/events.min.scss";

const Events2 = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        {/* <ResponsiveHeader></ResponsiveHeader> */}
        <MenuBarX></MenuBarX>
        <MenuBar></MenuBar>
        <section>
          <div className="block no-padding aboutpaddingnotreqd">
            <div class="pg-tp-bg">
              <img src={require("../aboutus/AboutUs-Main-3.jpg")} />
            </div>
          </div>
        </section>

        <div className="gray-bg3 brdcrmb-wrp">
          <div className="container">
            <div className="brdcrmb-inr flex justify-content-between">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="" title="" itemprop="url">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Our Events</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div className="block blockx" style={{ padding: "1rem" }}>
            <div className="container">
              <div className="abt-pg-wrp">
                <h2 itemprop="headline">Events</h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="block">
            <div className="container">
              <div className="evnt-wrp remove-ext8">
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <Link to="events/event-6">
                      <img
                        src={require("../events/Images/EventImages/16.jpg")}
                        alt="evnt-img1-1.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">30.01.2020</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../events/Images/Authors/Author-LBTC.png")}
                          alt="evnt-orgn1-1.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">LBTC</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <Link to="events/event-6">
                        PlogRun on National Cleanliness Day!
                      </Link>
                    </h4>
                    <p itemprop="description">
                      Join us on the National Cleanliness Day (30th Jan) to Plog
                      in and around Cubbon Park.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="events/event-6">
                        <a className="thm-btn2" title="" itemprop="url">
                          {" "}
                          <Link
                            to="events/event-6"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://maps.google.com/?q=%2012.9763%C2%B0%20N,%2077.5929%C2%B0%20E">
                            Cubbon Park, Bengaluru
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx rev">
                  <div className="evnt-thmb">
                    <Link to="/events/event-7">
                      <img
                        src={require("../events/Images/EventImages/4.jpg")}
                        alt="evnt-img1-2.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">26.01.2020</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../events/Images/Authors/Author-LBTC.png")}
                          alt="evnt-orgn1-2.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">LBTC</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <Link to="/events/event-7">Republic Day Cleanathon!</Link>
                    </h4>
                    <p itemprop="description">
                      This REPUBLIC DAY TeamLBTC is teaming up with Hebbagodi
                      Nagarasabha to transform one of the most hazardous and
                      persistent Blackspot in this vicinity.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-7">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link
                            to="/events/event-7"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href=" https://goo.gl/maps/nEDxM1Uq4g2ZE4Z87?fbclid=IwAR1pI4XWWHhmcZAITt-QU3L82JKWjcdTqleTgIWNLtX10DTMZ6OS9ZIcZqw">
                            Bhavani Road, Hebbagodi, Bengaluru - 560099
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <Link to="/events/event-8">
                      <img
                        src={require("../events/Images/EventImages/18.jpg")}
                        alt="evnt-img1-3.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">01.12.2019</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../events/Images/Authors/Author-LBTC.png")}
                          alt="evnt-orgn1-3.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">LBTC</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <Link to="/events/event-8">
                        Cleanathon in Siddapura, Jayanagar, Bengaluru
                      </Link>
                    </h4>
                    <p itemprop="description">
                      Everyone who wants to take a big step towards betterment
                      of society and feel good about it.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-8">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link
                            to="/events/event-8"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://maps.google.com/?q=%2012.942395,%2077.594202">
                            #36/1, 1st Main Road, next to 8th Cross tank Garden
                            Someshwara Nagar Jayanagar, 1st Block, Someshwara
                            Nagar, Jayanagar, Bengaluru, Karnataka 560011
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx rev">
                  <div className="evnt-thmb">
                    <Link to="/events/event-9">
                      <img
                        src={require("../events/Images/EventImages/15.jpg")}
                        alt="evnt-img1-4.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">02.09.2019</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../events/Images/Authors/Author-LBTC.png")}
                          alt="evnt-orgn1-4.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">LBTC</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <Link to="/events/event-9">Bengaluru Veeraru</Link>
                    </h4>
                    <p itemprop="description">
                      It’s an initiative by BBMP to provide a platform to all
                      “Clean Bengaluru” visioned non-profit organisations to
                      solve the community problems. It runs on the combined
                      effort of organisations and residents of Bengaluru.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-9">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link
                            to="/events/event-9"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://www.bengaluruveeraru.org">
                            Bengaluru, India
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <Link to="/events/event-10">
                      <img
                        src={require("../events/Images/EventImages/14.jpg")}
                        alt="evnt-img1-5.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">31.08.2019</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../events/Images/Authors/Author-LBTC.png")}
                          alt="evnt-orgn1-5.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">LBTC</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <Link to="/events/event-10">
                        Clay Ganapathi Workshop 2019
                      </Link>
                    </h4>
                    <p itemprop="description">
                      As a tradition, idols of Lord Ganesha are hand made,
                      worshiped and are immersed in rivers, lakes or wells.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-10">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link
                            to="/events/event-10"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://maps.google.com/?q=%2012.983819,%2077.562687">
                            Oklipuram, Bengaluru.
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pgntin-wrp text-center">
                <ul className="pagination">
                  <li className="page-item">
                    <Link to="/events">
                      <a className="page-link prev" title="" itemprop="url">
                        <i className="fa fa-angle-left"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="page-item">
                    {" "}
                    <Link to="/events">
                      <a className="page-link" title="" itemprop="url">
                        1
                      </a>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">2</span>
                  </li>

                  <li className="page-item">
                    <Link to="/events3">
                      <a className="page-link" title="" itemprop="url">
                        3
                      </a>
                    </Link>
                  </li>

                  <li className="page-item">
                    <Link to="/events4">
                      <a className="page-link" title="" itemprop="url">
                        4
                      </a>
                    </Link>
                  </li>

                  <li className="page-item">
                    <Link
                      to="/events3"
                      className="page-link next"
                      title=""
                      itemprop="url"
                    >
                      <i className="fa fa-angle-right"></i>
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
export default Events2;
