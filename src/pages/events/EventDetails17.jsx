import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";

function EventDetails17() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        {/* <ResponsiveHeader></ResponsiveHeader> */}
        <MenuBarX></MenuBarX>
        <MenuBar></MenuBar>

        <section>
          <div class="block no-padding">
            <div class="pg-tp-bg">
              <img src={require("../aboutus/AboutUs-Main-3.jpg")} />
            </div>
          </div>
        </section>

        <div class="gray-bg3 brdcrmb-wrp">
          <div class="container">
            <div class="brdcrmb-inr flex justify-content-between">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="" title="" itemprop="url">
                    Home
                  </Link>
                </li>
                <li class="breadcrumb-item">
                  <Link to="/events" title="" itemprop="url">
                    Event
                  </Link>
                </li>
                <li class="breadcrumb-item active">Event Details</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div class="block">
            <div class="container">
              <div class="evnt-dtl-thmb">
                <img
                  src={require("../events/Images/EventImages/8.jpg")}
                  alt="evnt-dtl-img1-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="evnt-dtl-wrp">
                <div class="evnt-dtl-inf">
                  <h1 itemprop="headline">
                    Cleanathon in association with Go Native
                  </h1>
                  <div class="evnt-orgn">
                    <img
                      src={require("../events/Images/Authors/Author-LBTC.png")}
                      alt="evnt-orgn1-1.jpg"
                      itemprop="image"
                    />
                    <div class="evnt-orgn-inf">
                      <h6 itemprop="headline">LBTC</h6>
                      <span>Organizer</span>
                    </div>
                  </div>

                  <div class="evnt-dtl-inf-inr">
                    <div class="evnt-dtl-dt">
                      <i class="fa fa-calendar"></i>

                      <span>
                        Event Date<i class="thm-clr">05.08.2018</i>
                      </span>
                      <span>
                        Event Time<i class="thm-clr">08:30-12:30</i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="evnt-dtl-desc">
                  <p itemprop="description">Cleanathon #298</p>
                  <p itemprop="description">
                    On the Friendship Day we are fixing the 50 meters garbage
                    dump in association with Go Native behind Prestige Brooklyn
                    Heights, Banashankari, Bengaluru.
                  </p>
                  <p itemprop="description">#Warriors Assemble</p>
                  <p itemprop="description">
                    {" "}
                    Date : 8/3/2020 Time : 8:30 A.M – 12:30 P.M
                  </p>
                  <p itemprop="description">
                    Location: Next to Prestige Brooklyn Heights Banashankari,
                    Bangalore
                  </p>
                  <p itemprop="description">
                    Location Link :{" "}
                    <a href="https://goo.gl/maps/FP2GKwyA5eR2">
                      https://goo.gl/maps/FP2GKwyA5eR2
                    </a>
                  </p>
                  <p itemprop="description">#TeamLBTC</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default EventDetails17;
