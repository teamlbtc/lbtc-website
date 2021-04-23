import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import DisqusComments5 from "../../components/Disqus/DisqusComments5";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import { Link } from "react-router-dom";

function BlogDetails5() {
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
              <img src={require("../aboutus/AboutUs-Main-3.jpg")} alt="AboutUs" />
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
                  Have you volunteered yet?
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
                  src={require("../blog/Images/Blog5.jpg")}
                  alt="blg-dtl-img2-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="blog-dtl-wrp">
                <div class="blg-inf">
                  <span class="blg-dat thm-bg">
                    <a href="#" title="" itemprop="url">
                      February 8, 2019
                    </a>
                  </span>
                  <span class="blg-tgs">
                    <i class="fa fa-tag"></i>
                    <a href="#" title="" itemprop="url">
                      environment
                    </a>
                    
                    <a href="#" title="" itemprop="url">
                      volunteering
                    </a>
                  </span>
                  <h1 itemprop="headline">Have you volunteered yet?</h1>
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
                    Volunteers work together willingly for the benefit of their
                    communities, environment and themselves. By giving back to
                    the community, a volunteer does not only help the community
                    grow stronger, but are also helping themselves become
                    stronger. They play a dynamic role in improving our society.
                    Knowing that they have made a positive impact on someone is
                    an emotionally uplifting experience that cannot be matched
                    by fame or money. As Paulo Coelho said –
                  </p>
                  <p itemprop="description">
                    “The Reward of our work is not what we get, but what we
                    become”.
                  </p>
                  <p itemprop="description">
                    And most importantly, volunteering has been seen as a great
                    stress relief activity as well!
                  </p>

                  <p itemprop="description">
                    So it’s not for money or fame, it’s just to lend a helping
                    hand to make the world a better place. That is something you
                    can’t buy with wealth. Here is a call to do your part, join
                    the excitement, meet new people, be a positive influence,
                    develop new talents and skills, grow from the experience,
                    learn and serve, get personal satisfaction to work for a
                    cause, be a part of a team, face new challenges, raise
                    awareness and preserve the environment.
                  </p>

                  <p itemprop="description">
                    LBTC gives you a chance to volunteer in Bengaluru, for a
                    variety of exciting events that will help you contribute to
                    the society as well as have a great time doing it! Once a
                    part of our volunteer team, regular updates will be given on
                    the events. If you are free, have time to spare or if an
                    event is happening around your locality, just pop in with
                    your friends.
                  </p>

                  <p itemprop="description">
                    We have great volunteer opportunities in store for you and
                    it is up to you to lend a hand and make a difference!
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
                  <DisqusComments5></DisqusComments5>
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
export default BlogDetails5;
