import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";

function EventDetails6() {
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
                  src={require("../events/Images/EventImages/16.jpg")}
                  alt="evnt-dtl-img1-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="evnt-dtl-wrp">
                <div class="evnt-dtl-inf">
                  <h1 itemprop="headline">
                    PlogRun on National Cleanliness Day!
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
                        Event Date<i class="thm-clr">30.01.2020</i>
                      </span>
                      <span>
                        Event Time<i class="thm-clr">06:30-09:00</i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="evnt-dtl-desc">
                  <p itemprop="description">
                    JOIN us on the National Cleanliness Day (30th Jan) to Plog
                    in and around Cubbon Park.
                  </p>
                  <p itemprop="description">#Warriors Assemble</p>
                  <p itemprop="description">
                    {" "}
                    Date : 30/1/2020 Time : 6:30 A.M – 09:00 A.M
                  </p>
                  <p itemprop="description">
                    Assemble Point:Central Library, Cubbon Park Date: 30th
                    January 2020 To Register: 9353218818
                  </p>
                  <p itemprop="description">
                    Location Link :{" "}
                    <a href="https://maps.google.com/?q=%2012.9763%C2%B0%20N,%2077.5929%C2%B0%20E">
                      Click Here
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

export default EventDetails6;
