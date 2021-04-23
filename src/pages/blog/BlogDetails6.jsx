import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import DisqusComments6 from "../../components/Disqus/DisqusComments6";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import { Link } from "react-router-dom";

function BlogDetails6() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        <MenuBarX></MenuBarX>
        <StickyHeader></StickyHeader>
        <section>
          <div class="block no-padding aboutpaddingnotreqd">
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
                  <Link to="/blog" title="" itemprop="url">
                    Blog
                  </Link>
                </li>
                <li class="breadcrumb-item active">
                  Plastic Banega Fantastic Campaign @ B Narayanapura Lake
                </li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div class="block">
            <div class="container">
              <div class="blg-dtl-thmb">
                <img
                  src={require("../blog/Images/Blog6.jpg")}
                  alt="blg-dtl-img2-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="blog-dtl-wrp">
                <div class="blg-inf">
                  <span class="blg-dat thm-bg">
                    <a href="#" title="" itemprop="url">
                      February 5, 2019
                    </a>
                  </span>
                  <span class="blg-tgs">
                    <i class="fa fa-tag"></i>
                    <a href="#" title="" itemprop="url">
                      plastic
                    </a>
                    ,
                    <a href="#" title="" itemprop="url">
                      environment
                    </a>
                  </span>
                  <h1 itemprop="headline">
                    Plastic Banega Fantastic Campaign @ B Narayanapura Lake
                  </h1>
                  <ul class="pst-mta">
                    <li>
                      <i class="fa fa-user thm-clr"></i>
                      <a href="#" title="" itemprop="url">
                        LBTC
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="blg-dtl-desc">
                  <p itemprop="description">
                    Hindustan Unilever have propelled many initiatives to
                    improve hygiene and sanitation across India. Along with
                    their partners, they are working towards innovative
                    solutions to help address the problem of plastic waste.
                  </p>
                  <p itemprop="description">
                    <strong>
                      Start a Little Good – Plastic Banega Fantastic Campaign
                    </strong>{" "}
                    has been held in Bengaluru, Mumbai and Delhi. We at Let’s Be
                    the Change are the leading partner for the event at
                    Bengaluru. I, as an intern of LBTC, got a chance to be a
                    part of this event and start a little good in my city,
                    Bengaluru.
                  </p>
                  <p itemprop="description">
                    On the morning of February 2nd, volunteers from Karnataka
                    State Reserve Police, United Way (Mumbai), students of New
                    Brilliant Group of Institutions, and members of LBTC, UNDP,
                    BBMP, Smitam and others gathered at B Narayanapura Lake near
                    K.R. Puram, Bengaluru. After registration, we volunteers
                    were given disposable gloves, fluorescent vests, and masks
                    and were allotted zones to clean up. Zone 1 was allotted to
                    me, where we found a lot of Plastic waste, Polystyrene
                    (Thermocol) and aluminium foils. All the waste was collected
                    and sorted into either dry waste or wet waste. Hindustan
                    Unilever Limited, the sponsors of this event, will recycle
                    all of the plastics that were collected into innovative
                    products such as spectacle frames, benches and so on.
                  </p>
                  <p itemprop="description">
                    After cleaning up our zones, we the volunteers of LBTC
                    distributed food to the students who had participated in the
                    cleanliness drive.
                  </p>
                  <p itemprop="description">
                    More than 600 people participated in an enormous group
                    effort to restore this lake to its former glory in just 5
                    hours! The turnout for the event was fantastic, and a lot of
                    progress has been made in cleaning up B Narayanapura Lake.
                  </p>
                  <br />
                  <div class="gallery">
                    <div class="row">
                      <div class="col-md-12 col-sm-12 col-lg-12"></div>
                    </div>
                  </div>
                </div>
                <div class="athr-bx">
                  <img
                    src={require("../blog/Images/Authors/Author-LBTC-L.png")}
                    alt="athr-img1-1.jpg"
                    itemprop="image"
                  />
                  <div class="athr-inf">
                    <h4 itemprop="headline">About Author</h4>
                    <p itemprop="description">
                      Let's Be The Change is an NGO run by a group of
                      passionate, energetic and like minded people towards
                      achieving a common objective of eradicating garbage dumps
                      and directing the residents towards achieving a cleaner
                      and greener environment.
                    </p>
                    <div class="athr-scl">
                      <a
                        class="facebook"
                        href="https://www.facebook.com/teamlbtc"
                        title="Facebook"
                        target="_blank"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>

                      <a
                        class="instagram"
                        href="https://www.instagram.com/team_lbtc/"
                        title="Twitter"
                        target="_blank"
                      >
                        <i class="fa fa-instagram"></i>
                      </a>

                      <a
                        class="twitter"
                        href="https://www.twitter.com/TeamLBTC"
                        title="Twitter"
                        target="_blank"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="cmt-wrp">
                  <h4 itemprop="headline">Comments</h4>
                  <br />
                  <DisqusComments6></DisqusComments6>
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
export default BlogDetails6;
