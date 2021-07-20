import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";

import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import OurTeam from "../../components/OurTeam/OurTeam";
import "../aboutus/aboutus.min.scss";
import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo";
import { Link } from "react-router-dom";
import FeaturedOn from "./FeaturedOn/FeaturedOn";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import { FooterMain } from "../../components/FooterMain/FooterMain";
// import "../../components/MenuBar/menubarwhitetext.min.scss";

const AboutUS = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <HeaderBar></HeaderBar>
      <MenuBar></MenuBar>
      {/*<StickyHeader></StickyHeader>
      <ResponsiveHeader></ResponsiveHeader> */}
      <MenuBarX></MenuBarX>
      <section>
        <div class="block no-padding aboutpaddingnotreqd">
          <div class="pg-tp-bg">
            <img
              src={require("../aboutus/AboutUs-Main-3.jpg")}
              alt="Main-Background.jpg"
              itemprop="image"
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
              <li class="breadcrumb-item active">About Us</li>
            </ol>
          </div>
        </div>
      </div>
      <section>
        <div className="block blockx" style={{ padding: "1rem" }}>
          <div className="container">
            <div className="abt-pg-wrp">
              <h2 itemprop="headline">About Us</h2>
              <div className="abt-pg-inr">
                <div className="row align-items-center">
                  <div className="col-md-7 col-sm-12 col-lg-7">
                    <div className="abt-pg-desc">
                      <p itemprop="description">
                        <strong>Let's Be The Change</strong> (#TeamLBTC) is a
                        non-profit organization which aims to build a cleaner,
                        healthier and more sustainable society by working with
                        the people and the Government.
                        <br /> <br /> LBTC provides it's volunteers a platform
                        filled with zest to contribute more to the society along
                        with a sense of accomplishment and satisfaction.
                      </p>
                      <br />
                      <h2 itemprop="headline">Our Vision </h2>

                      <p className="thm-clr blc-wt">
                        “ To be an organization of excellence in restoring and
                        sustaining cleanliness of the city, dedication, and
                        teamwork towards achieving a garbage-free environment”
                      </p>
                      <br />
                      <h2 itemprop="headline">Our Mission </h2>

                      <p className="thm-clr blc-wt">
                        “ To establish cleanliness and solve issues by
                        motivating citizens to take up initiatives and work in
                        synergy with the government”
                      </p>
                      <br />
                      <h2 itemprop="headline">Our Achievements </h2>
                      <p itemprop="description">
                        <ul>
                          <li>
                            <a href="https://www.nammabengaluruawards.org/portfolio/sri-anirudh-s-dutt/">
                              Namma Bengaluru Rising Star of the Year Award
                              (2015)
                            </a>
                          </li>{" "}
                          <li>National Yuva Chethana Award (2017)</li>
                          <li>
                            <a href="https://www.guinnessworldrecords.com/world-records/541225-most-plastic-bottles-collected-for-recycling-in-12-hours">
                              Guinness World Record{" "}
                            </a>
                            for collecting 33.5 Tonnes of plastic bottles in 12
                            hours (2018)
                          </li>
                          <li>
                            Featured as one of the “Young Achiever” in{" "}
                            <a
                              href="https://www.zee5.com/tvshows/details/weekend-with-ramesh-s4-finale-july-14-2019/0-6-1675/weekend-with-ramesh-s4-finale-july-14-2019/0-1-240658"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <strong>Weekend with Ramesh</strong>
                            </a>{" "}
                            (2019) (Prime Show in Karnataka)
                          </li>{" "}
                        </ul>
                      </p>

                      <br />
                      <h2 itemprop="headline">Our Volunteering Activities </h2>
                      <p itemprop="description">
                        <strong>Musical Cleanathon:</strong>
                        <ul>
                          <li>
                            Beautification of Garbage Dump while a local band
                            performs
                          </li>{" "}
                          <li>Encourages communities coming together</li>
                          <a
                            href="https://pages.razorpay.com/cleanathon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <strong>Donate For Cleanathon</strong>
                          </a>
                        </ul>
                        <strong>Plog Run</strong>
                        <ul>
                          <li>
                            Jogging while collecting Dry waste for recycling
                          </li>{" "}
                        </ul>
                        <strong>Clay Ganapathi Workshop:</strong>
                        <ul>
                          <li>
                            Flagship activity where we train citizens to build
                            idol from scratch
                          </li>{" "}
                        </ul>
                        School Beautification, SWM Awareness Drives, Street
                        Plays, and many more
                      </p>
                      <br />
                      <h2 itemprop="headline">Incubation</h2>

                      <p itemprop="description">
                        We were incubated in{" "}
                        <a
                          href="https://www.nsrcel.org/nsrcelsocial/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <strong>NSRCEL Social</strong>
                        </a>
                        , IIM Bengaluru - 2019 to 2020
                      </p>

                      <br />
                      <h2 itemprop="headline">Our Current Work </h2>
                      <p itemprop="description">
                        <strong>Bengaluru Veeraru:</strong>
                        <ul>
                          <li>
                            Building a platform called “Bengaluru Veeraru” where
                            like-minded organisations, individuals come together
                            under one roof to help solve community problems by
                            providing step-by-step solutions and by coordinating
                            with the government
                          </li>{" "}
                          <li>
                            About{" "}
                            <a href="https://bengaluruveeraru.org">
                              <strong>Bengaluru Veeraru (BV):</strong>
                            </a>{" "}
                            BV is a platform to recognize and bring together all
                            the like-minded NGOs, RWAs, and Active Citizens for
                            a collective effort towards the betterment of Namma
                            Bengaluru
                          </li>
                          <li>3 key Activities of Bengaluru Veeraru:</li>
                          <ul>
                            <li>
                              <strong>BV Certification Course:</strong>
                            </li>
                            <ul>
                              <li>
                                Any individual can take up a volunteering course
                                for 3 months to become a Bengaluru Veera of
                                their own community
                              </li>
                              <li>
                                This will help an ordinary individual who wants
                                to initiate change become a warrior who
                                implements and sustains necessary changes in
                                their communities{" "}
                              </li>
                            </ul>
                          </ul>
                          <ul>
                            <li>
                              <strong>BV Awards:</strong>
                            </li>
                            <ul>
                              <li>
                                Platform recognizes and honours active citizens,
                                community groups, RWAs & NGOs who are
                                contributing for the Better Bengaluru as
                                “Bengaluru Veeraru”
                              </li>
                            </ul>
                          </ul>
                          <ul>
                            <li>
                              <strong>BV Connect:</strong>
                            </li>
                            <ul>
                              <li>
                                Platform helps citizens to connect with similar
                                vision NGOs, RWAs and individuals to support
                                them in building their organisation and vice
                                versa
                              </li>

                              <a href="https://rzp.io/l/BVProject">
                                <strong>Donate Now</strong>
                              </a>
                            </ul>
                          </ul>
                        </ul>
                        <strong>
                          O2 Support for 10k+ Vulnerable Families:
                        </strong>
                        <ul>
                          <li>
                            The aim of the project is to provide emergency
                            oxygen support for all the 10k+ Vulnerable Families
                            in all the urban poor settlements mentioned below,
                            where we are conducting 'Covid19 Relief Project'
                            from the past 1 year in association with Azim Premji
                            Foundation (APF), BBMP & Govt. of Karnataka.
                          </li>
                          <li>
                            Due to severity of the 2nd wave of Covid-19, we had
                            to channel funds from our other projects. We have
                            presently spent Rs. 2235864, in which we have
                            already procured the following materials:
                          </li>
                          <ul>
                            <li>30 Nos - 47 liter cylinders</li>
                            <li>11 Nos - 10 liter cylinders</li>
                            <li>
                              3 Nos - 5 liter oxygen concentrator (Medical
                              Grade)
                            </li>
                            <li>
                              2 Nos - 7 liter oxygen concentrator (Home Grade)
                            </li>
                            <li>40 Nos - Regulators kit</li>
                            <li>30 Nos - Safety equipment for team</li>
                          </ul>
                          <li>
                            Financial Bills (8th June 2021) are attached{" "}
                            <a
                              href="https://drive.google.com/file/d/1rcn9UtUg_U3gFHvTE_KRav3NndJRbbiQ/view?usp=sharing"
                              target="_blank"
                            >
                              here
                            </a>
                          </li>
                        </ul>
                      </p>

                      <img
                        src={require("../aboutus/TeamLBTC.png")}
                        alt="WhoAreWe.jpg"
                        itemprop="image"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12 col-lg-5">
                    <div className="abt-pg-imgs">
                      <img
                        src={require("../aboutus/Who-AreWe.jpg")}
                        alt="WhatDoWeDo.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("../aboutus/WWR.jpg")}
                        alt="WhatDoWeDo.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("../gallery/Images/gallery1page/1L.jpg")}
                        alt="WhatDoWeDo.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("../../components/OurActivities/3.jpg")}
                        alt="WhatDoWeDo.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("../aboutus/What-Do-WeDo.jpg")}
                        alt="abt-pg-img1-2.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("../../components/OurActivities/Oxygen.webp")}
                        alt="Oxygen.webp"
                        itemprop="image"
                      />
                      <img
                        src={require("../../components/OurActivities/Oxygen2.webp")}
                        alt="Oxygen2.webp"
                        itemprop="image"
                      />
                      <img
                        src={require("../../components/OurActivities/Oxygen3.webp")}
                        alt="Oxygen3.webp"
                        itemprop="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="block black-layer opc3 paddingbeda">
          <div className="fixed-bg fullcontainerimg">
            <img
              className="fullcontainerimg"
              src={require("../aboutus/VideoBkgnd.jpg")}
              alt="abt-pg-img1-2.jpg"
              itemprop="image"
            />
          </div>
          <div className="container">
            <div className="vdo-wrp text-center">
              <div className="vdo-inr">
                <YoutubeVideo></YoutubeVideo> {/* Youtube Video Component */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurTeam></OurTeam> {/* Our Team Component */}
      <FeaturedOn></FeaturedOn> {/* Featured On Component */}
      <section>
        <div className="block remove-gap">
          <div className="container">
            <div className="fndrs-wrp">
              <div className="row align-items-center">
                <div className="col-md-6 col-sm-12 col-lg-6">
                  <div className="fndrs-desc">
                    <h2 itemprop="headline">
                      Our<strong className="thm-clr"> Belief</strong>
                    </h2>
                    <p itemprop="description">
                      We believe cleanliness can be established and issues can
                      be solved when Citizens take up initiatives and work in
                      synergy with the government.
                    </p>
                    <br></br>
                    <p itemprop="description">
                      Join Us{" "}
                      <span className="bluecolorhashtag">#TeamLBTC</span>
                    </p>
                    <Link
                      to="/form"
                      className="thm-btn"
                      title=""
                      itemprop="url"
                      style={{ textDecoration: "none" }}
                    >
                      Become A Volunteer<span></span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6">
                  <div className="fndrs-img">
                    <img
                      src={require("../aboutus/JoinUs.jpg")}
                      alt="fndrs-img.png"
                      itemprop="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterMain></FooterMain> {/* Footer Component */}
    </main>
  );
};

export default AboutUS;
