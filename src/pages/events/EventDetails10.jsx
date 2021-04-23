import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";

function EventDetails10() {
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
                  src={require("../events/Images/EventImages/14.jpg")}
                  alt="evnt-dtl-img1-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="evnt-dtl-wrp">
                <div class="evnt-dtl-inf">
                  <h1 itemprop="headline">
                    Clay Ganapathi Workshop 2019 | 31st August and 1st September
                    |
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
                        Event Date<i class="thm-clr">31.08.2018</i>
                      </span>
                      <span>
                        Event Time<i class="thm-clr">10:30-18:30</i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="evnt-dtl-desc">
                  <p itemprop="description">
                    As a tradition, idols of Lord Ganesha are hand made,
                    worshiped and are immersed in rivers, lakes or wells. This
                    event showcases the need for eco-friendly Ganesha idols.
                    Materials will be provided and the event is open for all age
                    groups. Have fun by creating your own Master Piece.
                  </p>

                  <p itemprop="description">
                    {" "}
                    Date : 31/8/2018 Time : 10:30 A.M – 6:30 P.M
                  </p>
                  <p itemprop="description">
                    Location Let’s Be The Change office
                  </p>

                  <p itemprop="description">
                    Timings: 2 sessions: 1) 10:30 AM – 1 PM 2) 04:00 PM – 6:30
                    PM
                  </p>
                  <p itemprop="description">#MyClayGanapathi #TeamLBTC</p>
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

export default EventDetails10;
