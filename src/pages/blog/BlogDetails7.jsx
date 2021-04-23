import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import { Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import DisqusComments7 from "../../components/Disqus/DisqusComments7";

function BlogDetails7() {
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
                <li class="breadcrumb-item active">About Us</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div class="block">
            <div class="container">
              <div class="blg-dtl-thmb">
                <img
                  src={require("../blog/Images/Blog7.jpg")}
                  alt="blg-dtl-img2-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="blog-dtl-wrp">
                <div class="blg-inf">
                  <span class="blg-dat thm-bg">
                    <a href="#" title="" itemprop="url">
                      July 13, 2019
                    </a>
                  </span>
                  <span class="blg-tgs">
                    <i class="fa fa-tag"></i>
                    <a href="#" title="" itemprop="url">
                      blog
                    </a>
                    ,
                    <a href="#" title="" itemprop="url">
                      interns
                    </a>
                  </span>
                  <h1 itemprop="headline">About Us</h1>
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
                    <strong>Let’s Be The Change</strong> (LBTC) is a non-profit
                    organization which aims to build a cleaner and healthier
                    society by working with the people and the Government. LBTC
                    was started by <strong>Anirudh S Dutt</strong> on 5th July
                    2013. We have been growing ever since with over 250
                    successful events, including cleanliness drives, awareness
                    programmes, spot fixes, pet adoption drives and so on. We
                    are mainly comprised of energetic youngsters whose only aim
                    is to make Bengaluru a better place for the society by
                    initiating cleanothon drives. We are a bridge connection
                    between the Municipal Corporation (BBMP) and the Citizens.
                    LBTC believes in involving citizens to actively participate
                    in eradicating black spots and has helped in creating
                    awareness and social responsibility among the residents.
                  </p>
                  <p itemprop="description">
                    <ul>
                      <li>
                        We host “Cleanathon Drives” – The act of eliminating
                        garbage dumps and beautifying the location with the
                        beautiful warli art.
                      </li>
                      <li>We have fixed more than 250 garbage dumps fixed.</li>
                      <li>Average 4 hours spent per garbage spot.</li>
                      <li>
                        Fixed combined stretch of 20,000 meters of Garbage Dump.
                      </li>
                      <li>
                        Involving 2,000+ people including residents and
                        volunteers.
                      </li>
                      <li>We have conducted two Mega Cleanathon drives –</li>
                      <ol>
                        <li>
                          Biggest Cleanathon in Kempegowda Bus Stand (Majestic),
                          Bengaluru on 2nd October 2016. It was a massive
                          cleanliness and beautification drive in Majestic Bus
                          Stand with over 500 volunteers. It was inaugurated by
                          Mr. P C Mohan, Member of Parliament.
                        </li>
                        <li>
                          Mega Cleanathon on 2nd October 2017 – It was conducted
                          across 72 wards involving more than 1500 people, where
                          each ward had a team of 20/30 volunteers, cleaning and
                          beautifying a garbage dumb with the BBMP (Municipal
                          Corporation). This event was inaugurated by Mr. Rajiv
                          Chandrashekar, Member of Parliament.
                        </li>
                      </ol>
                      <li>
                        We have also conducted Clay Ganapathi making workshops
                        during the festival time. Last year (2016) more than
                        1000 people made their own Ganapathi Idols and
                        worshipped them. This year, almost 2500 people
                        enthusiastically made their own clay Ganapas!
                      </li>
                      <li>
                        Apart from this, as the quote goes “Prevention is better
                        than cure”, we have always strived to look for the root
                        cause for the creation of garbage dumps, increasing
                        plastic usage and environmental pollution and are
                        working towards enlightening people with alternatives to
                        overcome the existing uncertainties and problems.
                      </li>
                    </ul>
                  </p>
                  <p itemprop="description">
                    We believe Bangalore can be free from garbage dumps when the
                    locals take initiatives and work in synergy with the BBMP.
                    Let’s Be The Change main emphasis is on building this
                    synergy and empowering the locals.
                  </p>
                  <p itemprop="description">
                    It’s a proud moment for us to list a few of our achievements
                    over the years.
                  </p>
                  <p itemprop="description">
                    Our Achievements
                    <ol>
                      <li>
                        We Won of the “Yuva Chetana Award”, awarded by Youth For
                        Seva (YFS) in 2014.
                      </li>

                      <li>
                        Our Founder, President Mr. Anirudh S Dutt won the “Namma
                        Bengaluru Rising Star of the Year” Award in 2015,
                        awarded by “Namma Bengaluru Foundation”.
                      </li>

                      <li>
                        Our initiative was appreciated and recognized by BBMP
                        officials, “Sneha Sangha Sports Club”, Karunadu Kannada
                        Kala Sangha, Hoysala Karnataka Sangha, Radio City, and
                        many more.
                      </li>

                      <li>
                        Our founder has been invited as a guest for many
                        primetime weekend Radio shows. The RJs also attend our
                        events with active participation
                      </li>

                      <li>
                        Our “Cleanathon” events are regularly published in
                        Bangalore Mirror, Deccan Herald, Vijaya Karnataka,
                        Indian Express and many other leading newspapers.
                      </li>

                      <li>
                        Our founder, Anirudh, has also given talks in various
                        media channels like TV9, DD Chandana, Raj News, Suvarna
                        News etc., speaking about various environmental issues.
                      </li>

                      <li>
                        Our President’s story was recently featured in
                        YourStory.com{" "}
                        <a href="https://yourstory.com/2017/11/lets￾be-the-changeanirudh-dutt/">
                          {" "}
                          Click Here
                        </a>
                      </li>
                    </ol>
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
                  <DisqusComments7></DisqusComments7>
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
export default BlogDetails7;
