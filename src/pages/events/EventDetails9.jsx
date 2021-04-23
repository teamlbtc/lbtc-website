import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";

function EventDetails9() {
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
                  src={require("../events/Images/EventImages/15.jpg")}
                  alt="evnt-dtl-img1-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="evnt-dtl-wrp">
                <div class="evnt-dtl-inf">
                  <h1 itemprop="headline">Bengaluru Veeraru</h1>
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
                        Event Date<i class="thm-clr">02.10.2019</i>
                      </span>
                      <span>
                        Event Time<i class="thm-clr">07:30-12:00</i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="evnt-dtl-desc">
                  <p itemprop="description">
                    It’s an initiative by BBMP to provide a platform to all
                    “Clean Bengaluru” visioned non-profit organisations to solve
                    the community problems. It runs on the combined effort of
                    organisations and residents of Bengaluru. It enables all
                    stakeholders to come together to report and solve problems,
                    by empowering and enlightening the average citizen. This
                    hand-holding and step-by-step solution makes them realize
                    that they are capable of bringing the CHANGE that they want
                    to see. This is idealized and being implemented by Let’s Be
                    The Change.
                  </p>
                  <p itemprop="description">#Warriors Assemble</p>
                  <p itemprop="description">
                    {" "}
                    Date : 02/10/2018 Time : 7:30 A.M – 12:00 P.M
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

export default EventDetails9;
