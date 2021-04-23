import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";

function EventDetails3() {
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
                  src={require("../events/Images/EventImages/5.jpg")}
                  alt="evnt-dtl-img1-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="evnt-dtl-wrp">
                <div class="evnt-dtl-inf">
                  <h1 itemprop="headline">
                    Tree Protection Drive at Hebbal Flyover!
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
                        Event Date<i class="thm-clr">22.02.2020</i>
                      </span>
                      <span>
                        Event Time<i class="thm-clr">09:00-13:30</i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="evnt-dtl-desc">
                  <p itemprop="description">
                    Once again, we gather in our mission to strive for a cleaner
                    and greener Bengaluru! This time, the #ChangeWarriors shall
                    get together at the Hebbal Flyover for a
                    #TreeProtectionDrive, covering over 400 trees with
                    limestone. Let’s do our best, once again, to Be The Change!
                  </p>
                  <p itemprop="description">#Warriors Assemble</p>
                  <p itemprop="description">
                    {" "}
                    Date : 22/3/2020 Time : 9:00 A.M – 1:30 P.M
                  </p>
                  <p itemprop="description">
                    Location : Under, Hebbal Flyover, Vinayakanagar, Bengaluru,
                    Karnataka 560024
                  </p>
                  <p itemprop="description">
                    Location Link :{" "}
                    <a href="https://goo.gl/maps/b3oNWp7hNeX4RPnP8">
                      https://goo.gl/maps/b3oNWp7hNeX4RPnP8
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

export default EventDetails3;
