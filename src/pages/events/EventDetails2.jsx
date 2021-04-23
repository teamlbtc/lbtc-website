import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";

function EventDetails2() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <ResponsiveHeader></ResponsiveHeader>
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
                  src={require("../events/Images/EventImages/2.jpg")}
                  alt="evnt-dtl-img1-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="evnt-dtl-wrp">
                <div class="evnt-dtl-inf">
                  <h1 itemprop="headline">Cleanathon at Satellite Town!</h1>
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
                        Event Date<i class="thm-clr">01.03.2020</i>
                      </span>
                      <span>
                        Event Time<i class="thm-clr">09:00-13:30</i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="evnt-dtl-desc">
                  <p itemprop="description">
                    Hey, Change Warriors! It’s time to gather once more, to get
                    a Black Spot on our lens scope and make sure we take care of
                    it right away! This week, we look at a spot in Satellite
                    Town. Let’s Assemble and make sure we get rid of this dump
                    too!
                  </p>
                  <p itemprop="description">#Warriors Assemble</p>
                  <p itemprop="description">
                    {" "}
                    Date : 1/3/2020 Time : 9:00 A.M – 1:30 P.M
                  </p>
                  <p itemprop="description">
                    Location : #11, Mysore Rd, New Timberyard Layout,
                    Byatarayanapura, Srinagar, Banashankari, Bengaluru,
                    Karnataka 560026
                  </p>
                  <p itemprop="description">
                    Location Link :{" "}
                    <a href="https://goo.gl/maps/uX1xmDjKHGLzqCAJ7">
                      https://goo.gl/maps/uX1xmDjKHGLzqCAJ7
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

export default EventDetails2;
