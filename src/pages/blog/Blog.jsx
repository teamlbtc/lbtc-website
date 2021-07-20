import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import { Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import { FooterMain } from "../../components/FooterMain/FooterMain";

const Blog = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        {/* <ResponsiveHeader></ResponsiveHeader> */}
        <MenuBarX></MenuBarX>
        <MenuBar></MenuBar>
        <StickyHeader></StickyHeader>
        <section>
          <div class="block no-padding aboutpaddingnotreqd">
            <div class="pg-tp-bg">
              <img
                src={require("../aboutus/AboutUs-Main-3.jpg")}
                alt="MenuBarBkgnd"
              />
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
                <li class="breadcrumb-item active">Blog</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <section>
            <div className="block blockx" style={{ padding: "1rem" }}>
              <div className="container">
                <div className="abt-pg-wrp">
                  <h2 itemprop="headline">Blog</h2>
                </div>
              </div>
            </div>
          </section>
          <div class="block">
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-sm-12 col-lg-8">
                  <div class="blg-wrp style4 remove-ext6">
                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <Link to="/blog/blog-9">
                          <img
                            src={require("../blog/Images/Blog-Hemanth.jpg")}
                            alt="Blog-2"
                            itemprop="image"
                          />
                        </Link>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            September 18, 2020
                          </a>
                        </span>
                        <span class="blg-tgs">
                          <i class="fa fa-tag"></i>
                          <a href="#top" title="" itemprop="url">
                            COVID-19
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            poor
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            people
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            ideas
                          </a>
                        </span>
                        <h4 itemprop="headline">
                          <Link to="/blog/blog-9">
                            The Home Quarantine Watch Volunteer Task
                          </Link>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              Hemanth R Shankar
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>30
                          </li>
                        </ul>
                        <p itemprop="description">
                          The world has been in the gripping claws of the
                          COVID-19 virus for quite a while now. This has made a
                          major impact in the lives of every human on Earth and
                          India is one of the chief victims at this time.
                        </p>
                      </div>
                    </div>

                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <Link to="/blog/blog-8">
                          <img
                            src={require("../blog/Images/Blog2.jpg")}
                            alt="Blog-2"
                            itemprop="image"
                          />
                        </Link>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            September 1, 2020
                          </a>
                        </span>
                        <span class="blg-tgs">
                          <i class="fa fa-tag"></i>
                          <a href="#top" title="" itemprop="url">
                            Charity
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            poor
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            people
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            ideas
                          </a>
                        </span>
                        <h4 itemprop="headline">
                          <Link to="/blog/blog-8">
                            ಬದಲಾಗಿ ಬದಲಾಗಿಸೋಣ, ಸ್ವಚ್ಛ ಬೆಂಗಳೂರು ಕನಸನ್ನು ನನಸು
                            ಮಾಡೋಣ!
                          </Link>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              Avinaasha Shastry
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>30
                          </li>
                        </ul>
                        <p itemprop="description">
                          ಬದಲಾಗಿ ಬದಲಾಗಿಸೋಣ ಸಂಸ್ಥೆಯು 2013ರಲ್ಲಿ ಸ್ವಚ್ಛತೆ ಹಾಗೂ
                          ಪರಿಸರ ಸಂರಕ್ಷಣೆಯ ಕುರಿತು ಜಾಗೃತಿ ಮೂಡಿಸಿ, ಅವಶ್ಯ
                          ಬದಲಾವಣೆಗಳನ್ನು ಮೂಡಿಸುವ ಸಲುವಾಗಿ ಪ್ರಾರಂಭವಾಯಿತು.
                        </p>
                      </div>
                    </div>
                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <Link to="/blog/blog-1">
                          <img
                            src={require("../blog/Images/Blog1.jpg")}
                            alt="Blog-1"
                            itemprop="image"
                          />
                        </Link>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            May 13, 2019
                          </a>
                        </span>
                        <span class="blg-tgs">
                          <i class="fa fa-tag"></i>
                          <a href="#top" title="" itemprop="url">
                            blog
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            interns
                          </a>
                        </span>
                        <h4 itemprop="headline">
                          <Link to="/blog/blog-1">Jauntful Internship!</Link>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              Sahiti
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>20
                          </li>
                        </ul>
                        <p itemprop="description">
                          Our journey as interns began on twenty fifth of June
                          to ‘Let’s Be The Change’ through the Social Immersion
                          Programme of our college, so as to analyse and
                          abbreviate the environmental problems.
                        </p>
                      </div>
                    </div>
                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <Link to="/blog/blog-2">
                          <img
                            src={require("../blog/Images/Blog2.jpg")}
                            alt="Blog-2"
                            itemprop="image"
                          />
                        </Link>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            February 25, 2019
                          </a>
                        </span>
                        <span class="blg-tgs">
                          <i class="fa fa-tag"></i>
                          <a href="#top" title="" itemprop="url">
                            Charity
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            poor
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            people
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            ideas
                          </a>
                        </span>
                        <h4 itemprop="headline">
                          <Link to="/blog/blog-2">
                            Cleanathon: What, Why & How
                          </Link>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              LBTC
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>30
                          </li>
                        </ul>
                        <p itemprop="description">
                          The concept of Cleanathon was started by the Team of
                          Lets Be the Change in 2014. Cleanathons are mainly
                          devoted to cleaning, beautifying and transforming a
                          previously garbage filled dump.
                        </p>
                      </div>
                    </div>
                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <Link to="/blog/blog-3">
                          <img
                            src={require("../blog/Images/Blog3.jpg")}
                            alt="Blog-3"
                            itemprop="image"
                          />
                        </Link>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            February 25, 2019
                          </a>
                        </span>
                        <span class="blg-tgs">
                          <i class="fa fa-tag"></i>
                          <a href="#top" title="" itemprop="url">
                            Charity
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            poor
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            people
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            ideas
                          </a>
                        </span>
                        <h4 itemprop="headline">
                          <Link to="/blog/blog-3">
                            Restorative Practices for Schools
                          </Link>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              LBTC
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>45
                          </li>
                        </ul>
                        <p itemprop="description">
                          Schools are where hundreds of children attain literacy
                          and are getting prepared for life. This is why a
                          school’s environment and atmosphere should be one
                          which is inspiring. Keeping this in mind, LBTC has
                          started a chain of events pertaining to school
                          restoration.
                        </p>
                      </div>
                    </div>

                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <Link to="/blog/blog-4">
                          <img
                            src={require("../blog/Images/Blog4.jpg")}
                            alt="Blog-4"
                            itemprop="image"
                          />
                        </Link>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            February 22, 2019
                          </a>
                        </span>
                        <span class="blg-tgs">
                          <i class="fa fa-tag"></i>
                          <a href="#top" title="" itemprop="url">
                            Charity
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            poor
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            people
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            ideas
                          </a>
                        </span>
                        <h4 itemprop="headline">
                          <Link to="/blog/blog-4">
                            Plogging – Fitness can save the Environment
                          </Link>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              LBTC
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>65
                          </li>
                        </ul>
                        <p itemprop="description">
                          From the words “Plastic” and “Jogging”, you get the
                          word ‘Plogging’ – an idea that originated from Sweden
                          in 2016. This is a new innovative idea that pairs
                          exercise with doing social good – while you jog, pick
                          the trash on the way and help get rid of plastic
                          pollution.
                        </p>
                      </div>
                    </div>
                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <Link to="/blog/blog-5">
                          <img
                            src={require("../blog/Images/Blog5.jpg")}
                            alt="Blog-4"
                            itemprop="image"
                          />
                        </Link>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            February 8, 2019
                          </a>
                        </span>
                        <span class="blg-tgs">
                          <i class="fa fa-tag"></i>
                          <a href="#top" title="" itemprop="url">
                            Charity
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            poor
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            people
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            ideas
                          </a>
                        </span>
                        <h4 itemprop="headline">
                          <Link to="/blog/blog-5">
                            Have you volunteered yet?
                          </Link>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              LBTC
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>78
                          </li>
                        </ul>
                        <p itemprop="description">
                          Volunteers work together willingly for the benefit of
                          their communities, environment and themselves. By
                          giving back to the community, a volunteer does not
                          only help the community grow stronger, but are also
                          helping themselves become stronger.
                        </p>
                      </div>
                    </div>
                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <Link to="/blog/blog-6">
                          <img
                            src={require("../blog/Images/Blog6.jpg")}
                            alt="Blog-4"
                            itemprop="image"
                          />
                        </Link>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            February 5, 2019
                          </a>
                        </span>
                        <span class="blg-tgs">
                          <i class="fa fa-tag"></i>
                          <a href="#top" title="" itemprop="url">
                            lake
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            plastic
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            camapign
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            ideas
                          </a>
                        </span>
                        <h4 itemprop="headline">
                          <Link to="/blog/blog-6">
                            Plastic Banega Fantastic Campaign @ B Narayanapura
                            Lake
                          </Link>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              LBTC
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>78
                          </li>
                        </ul>
                        <p itemprop="description">
                          Hindustan Unilever have propelled many initiatives to
                          improve hygiene and sanitation across India. Along
                          with their partners, they are working towards
                          innovative solutions to help address the problem of
                          plastic waste.
                        </p>
                      </div>
                    </div>

                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <Link to="/blog/blog-7">
                          <img
                            src={require("../blog/Images/Blog7.jpg")}
                            alt="Blog-4"
                            itemprop="image"
                          />
                        </Link>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            July 28, 2018
                          </a>
                        </span>
                        <span class="blg-tgs">
                          <i class="fa fa-tag"></i>
                          <a href="#top" title="" itemprop="url">
                            lake
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            plastic
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            camapign
                          </a>
                          ,
                          <a href="#top" title="" itemprop="url">
                            ideas
                          </a>
                        </span>
                        <h4 itemprop="headline">
                          <Link to="/blog/blog-7">About Us</Link>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              LBTC
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>78
                          </li>
                        </ul>
                        <p itemprop="description">
                          Let’s Be The Change (LBTC) is a non-profit
                          organization which aims to build a cleaner and
                          healthier society by working with the people and the
                          Government. LBTC was started by Anirudh S Dutt on 5th
                          July 2013.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div class="pgntin-wrp">
                    <ul class="pagination">
                      <li class="page-item">
                        <a
                          class="page-link prev"
                          href="#top"
                          title=""
                          itemprop="url"
                        >
                          <i class="fa fa-angle-left"></i>
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#top"
                          title=""
                          itemprop="url"
                        >
                          1
                        </a>
                      </li>
                      <li class="page-item active">
                        <span class="page-link">2</span>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#top"
                          title=""
                          itemprop="url"
                        >
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link next"
                          href="#top"
                          title=""
                          itemprop="url"
                        >
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div class="col-md-4 col-sm-6 col-lg-4">
                  <aside class="sdbr-wrp">
                    <div class="wdgt-bx v2">
                      <h4 itemprop="headline">Recent Posts</h4>
                      <div class="mini-pst-wrp">
                        <div class="mini-pst">
                          <div class="mini-pst-thmb">
                            <Link to="/blog/blog-1">
                              <img
                                src={require("../blog/Images/SidebarImages/S1.jpg")}
                                alt="SideBar-1"
                                itemprop="image"
                              />
                            </Link>
                          </div>
                          <div class="mini-pst-inf">
                            <span>
                              <a href="#top" title="" itemprop="url">
                                May 13, 2019
                              </a>
                            </span>
                            <h6 itemprop="headline">
                              <Link to="/blog/blog-1">Jauntful Intership!</Link>
                            </h6>
                          </div>
                        </div>
                        <div class="mini-pst">
                          <div class="mini-pst-thmb">
                            <Link to="/blog/blog-2">
                              <img
                                src={require("../blog/Images/SidebarImages/S2.jpg")}
                                alt="Sidebar-2"
                                itemprop="image"
                              />
                            </Link>
                          </div>
                          <div class="mini-pst-inf">
                            <span>
                              <a href="#top" title="" itemprop="url">
                                February 25, 2019
                              </a>
                            </span>
                            <h6 itemprop="headline">
                              <Link to="/blog/blog-2">
                                Cleanathon: What, Why & How
                              </Link>
                            </h6>
                          </div>
                        </div>
                        <div class="mini-pst">
                          <div class="mini-pst-thmb">
                            <Link to="/blog/blog-3">
                              <img
                                src={require("../blog/Images/SidebarImages/S3.jpg")}
                                alt="Sidebar-3"
                                itemprop="image"
                              />
                            </Link>
                          </div>
                          <div class="mini-pst-inf">
                            <span>
                              <Link to="/blog/blog-3">February 25, 2019</Link>
                            </span>
                            <h6 itemprop="headline">
                              <a
                                href="blog-detail-no-sidebar.html"
                                title=""
                                itemprop="url"
                              >
                                Restorative Practices for Schools
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="wdgt-bx v2">
                      <h4 itemprop="headline">Useful Links</h4>
                      <ul>
                        <li>
                          <Link to="">Home</Link>
                        </li>

                        <li>
                          <Link to="/about">About</Link>
                        </li>

                        <li>
                          <Link to="/gallery">Gallery</Link>
                        </li>

                        <li>
                          <Link to="/events">Events</Link>
                        </li>

                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>

                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                      </ul>
                    </div>

                    <div class="wdgt-bx v2 nws-ltr-wdgt">
                      <form class="nwsltr-frm3 thm-bg text-center">
                        <h4 itemprop="headline">
                          Subscribe Now to Get Daily Updates.
                        </h4>
                        <input
                          type="email"
                          placeholder="Enter your Email here"
                        />
                        <button class="thm-btn" type="submit">
                          <i class="fa fa-envelope-o"></i>Subscribe Now
                          <span></span>
                        </button>
                      </form>
                    </div>
                    <div class="wdgt-bx v2">
                      <h4 itemprop="headline">Instagram</h4>
                      <ul class="insta-gal">
                        <li>
                          <a href="#top" title="" itemprop="url">
                            <img
                              src={require("../blog/Images/InstagramImages/P1.jpg")}
                              alt="insta-img1-1.jpg"
                              itemprop="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            <img
                              src={require("../blog/Images/InstagramImages/P2.jpg")}
                              alt="insta-img1-2.jpg"
                              itemprop="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            <img
                              src={require("../blog/Images/InstagramImages/P3.jpg")}
                              alt="insta-img1-3.jpg"
                              itemprop="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            <img
                              src={require("../blog/Images/InstagramImages/P4.jpg")}
                              alt="insta-img1-4.jpg"
                              itemprop="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            <img
                              src={require("../blog/Images/InstagramImages/P5.jpg")}
                              alt="insta-img1-5.jpg"
                              itemprop="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            <img
                              src={require("../blog/Images/InstagramImages/P6.jpg")}
                              alt="insta-img1-6.jpg"
                              itemprop="image"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="insta-gal-inf">
                        <div class="insta-gal-inf-inr">
                          <span>Instagram</span>
                          <h5 itemprop="headline">@team_lbtc</h5>
                        </div>
                        <a
                          class="thm-btn"
                          href="https://instagram.com/team_lbtc"
                          title=""
                          itemprop="url"
                        >
                          Follow Us<span></span>
                        </a>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterMain></FooterMain> {/* Footer Component */}
      </main>
    </div>
  );
};
export default Blog;
