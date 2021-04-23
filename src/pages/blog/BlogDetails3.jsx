import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import DisqusComments3 from "../../components/Disqus/DisqusComments3";
import { Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";

function BlogDetails3() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        {/* <ResponsiveHeader></ResponsiveHeader> */}
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
                  Restorative Practices for Schools
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
                  src={require("../blog/Images/Blog3.jpg")}
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
                      schools
                    </a>
                    
                    <a href="#" title="" itemprop="url">
                      education
                    </a>
                  </span>
                  <h1 itemprop="headline">Restorative Practices for Schools</h1>
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
                    Schools are where hundreds of children attain literacy and
                    are getting prepared for life. This is why a school’s
                    environment and atmosphere should be one which is inspiring.
                    Keeping this in mind, LBTC has started a chain of events
                    pertaining to school restoration. This transformation can be
                    anything from paint work to flooring, patchwork, etc. This
                    programme has been a major hit with corporate volunteers
                    coming in to help out in collaboration with organisations
                    like Goodera and Sattva.
                  </p>
                  <p itemprop="description">
                    This process starts with identifying schools who are in need
                    of such transformations with the help of the Block Education
                    Officers. A survey is then conducted for a problem and need
                    analysis of the particular school. Once the problem area is
                    identified, a plan is made. The execution of which is tried
                    to be made as efficient as possible so that the event is a
                    successful one.
                  </p>
                  <p itemprop="description">
                    After each of these projects, it gives us great satisfaction
                    to see the children’s happy faces and their excitement to
                    come to school each day.
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
                  <DisqusComments3></DisqusComments3>
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
export default BlogDetails3;
