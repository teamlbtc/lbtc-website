import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import "../events/events.min.scss";

const Events = () => {
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
                    <Link to="events/event-1">
                      <img
                        src={require("../events/Images/EventImages/3.jpg")}
                        alt="evnt-img1-1.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">08.03.2020</span>
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
                      <Link to="events/event-1">Cleanathon At Nagarbhavi!</Link>
                    </h4>
                    <p itemprop="description">
                      Let us gather once again, to show society that not all
                      heroes wear capes. They wear Masks and Gloves.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="events/event-1">
                        <a className="thm-btn2" title="" itemprop="url">
                          {" "}
                          <Link
                            to="events/event-1"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>

                        <span>Nagarbhavi, Bengaluru.</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx rev">
                  <div className="evnt-thmb">
                    <Link to="/events/event-2">
                      <img
                        src={require("../events/Images/EventImages/2.jpg")}
                        alt="evnt-img1-2.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">01.03.2020</span>
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
                      <Link to="/events/event-2">
                        Cleanathon at Satellite Town!
                      </Link>
                    </h4>
                    <p itemprop="description">
                      Hey, Change Warriors! It’s time to gather once more, to
                      get a Black Spot on our lens scope and make sure we take
                      care of it right away!
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-2">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link
                            to="/events/event-2"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href=" https://goo.gl/maps/uX1xmDjKHGLzqCAJ7">
                            Satellite Town, Bengaluru
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <Link to="/events/event-3">
                      <img
                        src={require("../events/Images/EventImages/5.jpg")}
                        alt="evnt-img1-3.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">22.02.2020</span>
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
                      <Link to="/events/event-3">
                        Tree Protection Drive at Hebbal Flyover!
                      </Link>
                    </h4>
                    <p itemprop="description">
                      Once again, we gather in our mission to strive for a
                      cleaner and greener Bengaluru!
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-3">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link
                            to="/events/event-3"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://goo.gl/maps/b3oNWp7hNeX4RPnP8">
                            Hebbal Flyover Bengaluru
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx rev">
                  <div className="evnt-thmb">
                    <Link to="/events/event-4">
                      <img
                        src={require("../events/Images/EventImages/1.jpg")}
                        alt="evnt-img1-4.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">16.02.2020</span>
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
                      <Link to="/events/event-4">
                        Cleanathon in Electronic City!
                      </Link>
                    </h4>
                    <p itemprop="description">
                      All of you, the Change Warriors, it’s time to come
                      together once more for another contribution towards a
                      greener Bengaluru.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-4">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link
                            to="/events/event-4"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://www.google.com/maps?q=+12.835393,+77.683463">
                            Electronic City, Bengaluru
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <Link to="/events/event-5">
                      <img
                        src={require("../events/Images/EventImages/13.jpg")}
                        alt="evnt-img1-5.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">09.02.2020</span>
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
                      <Link to="/events/event-5">Cleanathon In Oklipuram!</Link>
                    </h4>
                    <p itemprop="description">
                      Everyone who wants to contribute 3 hours for the
                      betterment of society can join us this Sunday morning. A
                      major #Cleanathon event happening in #Oklipuram
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-5">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link
                            to="/events/event-5"
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
                    <a className="page-link prev" title="" itemprop="url">
                      <Link to="/events">
                        <i className="fa fa-angle-left"></i>
                      </Link>
                    </a>
                  </li>
                  <li className="page-item active">
                    {" "}
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item">
                    <Link to="/events2">
                      <a className="page-link" title="" itemprop="url">
                        2
                      </a>
                    </Link>
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
                    <Link to="/events2">
                      <a className="page-link next" title="" itemprop="url">
                        <i className="fa fa-angle-right"></i>
                      </a>
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
export default Events;
