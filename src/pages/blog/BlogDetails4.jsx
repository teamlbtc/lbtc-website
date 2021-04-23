import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import DisqusComments4 from "../../components/Disqus/DisqusComments4";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import { Link } from "react-router-dom";

function BlogDetails4() {
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
              <img src={require("../aboutus/AboutUs-Main-3.jpg")} alt="AboutUS"/>
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
                  Plogging – Fitness can save the Environment
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
                  src={require("../blog/Images/Blog4.jpg")}
                  alt="blg-dtl-img2-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="blog-dtl-wrp">
                <div class="blg-inf">
                  <span class="blg-dat thm-bg">
                    <a href="#" title="" itemprop="url">
                      February 22, 2019
                    </a>
                  </span>
                  <span class="blg-tgs">
                    <i class="fa fa-tag"></i>
                    <a href="#" title="" itemprop="url">
                      plog
                    </a>
                    
                    <a href="#" title="" itemprop="url">
                      fitness
                    </a>
                  </span>
                  <h1 itemprop="headline">
                    Plogging – Fitness can save the Environment
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
                    From the words “Plastic” and “Jogging”, you get the word
                    ‘Plogging’ – an idea that originated from Sweden in 2016.
                    This is a new innovative idea that pairs exercise with doing
                    social good – while you jog, pick the trash on the way and
                    help get rid of plastic pollution.
                  </p>
                  <p itemprop="description">
                    It involves jogging with a bag and picking up scattered
                    plastic waste on the streets. While jogging, people need to
                    keep collecting litter in the bag and finally drop it off at
                    a designated place. It includes way more body movement for
                    exercise like squatting, bending and stretching. It is an
                    incredible way to exercise as well as playing a game of
                    treasure hunt!
                  </p>
                  <p itemprop="description">
                    This idea has led to many successful events, where numerous
                    people have come together and carried this out to get
                    amazing results. LBTC hosted a Plog Run across 54 different
                    localities in Bengaluru, on October 2nd, 2018. It was a
                    conscious effort to pick up plastic in our own
                    neighbourhood. Various institutions came in to help as well,
                    including waste management partners who made sure the
                    collected waste was recycled.
                  </p>

                  <p itemprop="description">
                    So if you are feeling fatigued and want to do something for
                    your health and hygiene, go plogging!
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
                </div>
                <br />
                <DisqusComments4></DisqusComments4>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </main>
    </div>
  );
}
export default BlogDetails4;
