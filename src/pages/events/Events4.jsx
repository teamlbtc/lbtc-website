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
                    <Link to="events/event-16">
                      <img
                        src={require("../events/Images/EventImages/17.jpg")}
                        alt="evnt-img1-1.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">29.09.2018</span>
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
                      <Link to="events/event-16">
                        Cleanathon partnering with Residents of Hara Vijaya
                        Apartment
                      </Link>
                    </h4>
                    <p itemprop="description">
                      We are fixing the 50 meters garbage dump next to Hara
                      Vijaya Apartment, Ittamadu, BSK 3rd Stage, teaming with
                      the residents of the apartment.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="events/event-16">
                        <a className="thm-btn2" title="" itemprop="url">
                          {" "}
                          <Link
                            to="events/event-16"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://maps.google.com/?q=%2012.927312,%2077.543944">
                            Next to Hara Vijaya Valley View Apartment, Ittamadu,
                            Banashankari 3rd Stage, Bengaluru 560085
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx rev">
                  <div className="evnt-thmb">
                    <Link to="/events/event-17">
                      <img
                        src={require("../events/Images/EventImages/8.jpg")}
                        alt="evnt-img1-2.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">05.08.2018</span>
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
                      <Link to="/events/event-17">
                        Cleanathon in association with Go Native
                      </Link>
                    </h4>
                    <p itemprop="description">
                      On the Friendship Day we are fixing the 50 meters garbage
                      dump in association with Go Native behind Prestige
                      Brooklyn Heights, Banashankari, Bengaluru.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-17">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link
                            to="/events/event-17"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://maps.google.com/?q=%2012.915338,%2077.574715">
                            Next to Prestige Brooklyn Heights Banashankari,
                            Bangalore
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <Link to="/events/event-18">
                      <img
                        src={require("../events/Images/EventImages/9.jpg")}
                        alt="evnt-img1-3.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">05.07.2018</span>
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
                      <Link to="/events/event-18">Team LBTC turns 5!</Link>
                    </h4>
                    <p itemprop="description">
                      We invite you to join us as we celebrate the 5th Birthday
                      of TeamLBTC on the 5th of July, 2018.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-18">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link
                            to="/events/event-18"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>
                          <a href="https://goo.gl/maps/uJZC2KsJtzL2">
                            Kappanna Angala
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx rev">
                  <div className="evnt-thmb">
                    <Link to="/events/event-19">
                      <img
                        src={require("../events/Images/EventImages/19.jpg")}
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
                      <Link to="/events/event-19">Cleanathon</Link>
                    </h4>
                    <p itemprop="description">
                      Bengaluru’s first Biggest Cleanathon conducted during the
                      celebration of Daan Utsav (Joy of Giving Week), at
                      Kempegowda Bus Station (a.k.a. Majestic), involving over
                      450 people, on the occasion of Gandhi Jayanthi.
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="/events/event-19">
                        <a className="thm-btn2" title="" itemprop="url">
                          <Link
                            to="/events/event-19"
                            style={{ textDecoration: "none" }}
                          >
                            Join The Movement
                          </Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>Kempegowda Bus Station</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pgntin-wrp text-center">
                <ul className="pagination">
                  <li className="page-item">
                    <Link to="/events3">
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

                  <li className="page-item active">
                    <span className="page-link">4</span>
                  </li>

                  <li className="page-item">
                    <Link
                      to="/events4"
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
