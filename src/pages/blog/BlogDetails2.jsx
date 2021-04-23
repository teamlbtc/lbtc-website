import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import DisqusComments2 from "../../components/Disqus/DisqusComments2";
import { Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";

function BlogDetails2() {
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
                  Cleanathon: What, Why & How
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
                  src={require("../blog/Images/Blog2.jpg")}
                  alt="blg-dtl-img2-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="blog-dtl-wrp">
                <div class="blg-inf">
                  <span class="blg-dat thm-bg">
                    <a href="#" title="" itemprop="url">
                      February 25, 2019
                    </a>
                  </span>
                  <span class="blg-tgs">
                    <i class="fa fa-tag"></i>
                    <a href="#" title="" itemprop="url">
                      clean
                    </a>
                    ,
                    <a href="#" title="" itemprop="url">
                      cleanathon
                    </a>
                  </span>
                  <h1 itemprop="headline">Cleanathon: What, Why & How</h1>
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
                    The concept of Cleanathon was started by the Team of Lets Be
                    the Change in 2014. Cleanathons are mainly devoted to
                    cleaning, beautifying and transforming a previously garbage
                    filled dump.
                  </p>
                  <p itemprop="description">
                    If you are taking a walk around your locality and suddenly
                    get an unpleasant smell and find a big nasty garbage dump.
                    What do you do?
                  </p>
                  <p itemprop="description">
                    LBTC provides an easy to follow 8 step procedure for a
                    cleaner and greener environment –
                  </p>
                  <p itemprop="description">
                    <strong>Step 1</strong>
                  </p>
                  <p itemprop="description">
                    Locate garbage dumps near your area
                  </p>
                  <p itemprop="description">
                    <strong>Step 2</strong>
                  </p>
                  <p itemprop="description">Gathering community members</p>
                  <p itemprop="description">
                    <strong>Step 3</strong>
                  </p>
                  <p itemprop="description">Making a Plan</p>
                  <p itemprop="description">
                    <strong>Step 4</strong>
                  </p>
                  <p itemprop="description">
                    Involving government officials in the plan
                  </p>
                  <p itemprop="description">
                    <strong>Step 5</strong>
                  </p>
                  <p itemprop="description">
                    Eradication of waste and black spots
                  </p>
                  <p itemprop="description">
                    <strong>Step 6</strong>
                  </p>
                  <p itemprop="description">Beautifying to the cleaned area</p>
                  <p itemprop="description">
                    <strong>Step 7</strong>
                  </p>
                  <p itemprop="description">
                    Asking nearby residents to maintain the spot
                  </p>
                  <p itemprop="description">
                    <strong>Step 8</strong>
                  </p>
                  <p itemprop="description">Weekly Visit</p>

                  <p itemprop="description">
                    The LBTC team will help you take action and make a lasting
                    change to keep your area clean. This will not only help keep
                    your surroundings tidy but will also help you understand
                    your responsibility as a citizen, as a member of the society
                    and the little things you could do to contribute.
                  </p>
                  <p itemprop="description">
                    Once a complaint is received, the LBTC team would look into
                    the problem, inform the concerned government officials
                    (BBMP) and get them connected. LBTC also provides aid in
                    forming a coherent local group, who are the immediate
                    stakeholders, and help them take responsibility to sustain
                    the change. This is followed by awareness processes for the
                    localities.
                  </p>
                  <p itemprop="description">
                    Our Musical Cleanathons have done a great job in getting
                    attention and spreading awareness. Several bands have shown
                    their support by helping with the cleaning process as well
                    as performing during breaks.
                  </p>
                  <p itemprop="description">
                    All of this results in the people themselves taking charge
                    of the sanitation of their surroundings. Cleanathons are a
                    great way to bring people together so that they can thrive
                    in a community that is hygienic and sustainable.
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
                  <DisqusComments2></DisqusComments2>
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
export default BlogDetails2;
