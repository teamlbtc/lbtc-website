import React, { Component } from 'react';
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import "../aboutus/aboutus.min.scss";
import {
    Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";

class Covid19 extends Component {
    render() {
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
                                <li class="breadcrumb-item active">Covid-19 Relief Project</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <section>
                    <div
                        className="block blockx"
                        style={{ padding: "1rem" }}
                    >
                        <div className="container">
                            <div className="abt-pg-wrp">
                                <h2 itemprop="headline">Covid-19 Relief Project</h2>
                                <div className="abt-pg-inr">
                                    <div className="row align-items-center">
                                        <div className="col-md-7 col-sm-12 col-lg-7">
                                            <div className="abt-pg-desc">
                                                <p itemprop="description">
                                                    We at Let's Be The Change have been working with BBMP & BCP from the past 7 months in the following:<br/>
                                                    <ul>
                                                    <li>
                                                        Mapping 11000+ Operating Essential Stores like Medical Stores, Grocery Stores during lockdown for easy access for Public. We also mapped Needy Families for Ration & Hygiene Kit Distribution.
                                                    </li>
                                                    <li>
                                                        BBMP Citizen Squad
                                                    </li>
                                                    </ul> 
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Target</h2>

                                                <p className="thm-clr blc-wt">
                                                    We have identified 2 slums in South Bangalore: (Total Population of 3000)
                                                    <ul>
                                                    <li>
                                                        Raghavendra Colony
                                                    </li>
                                                    <li>
                                                        A K Colony
                                                    </li>
                                                    </ul>                                                                           
                                                </p>
                                                <p className="thm-clr blc-wt">
                                                    We understood the impact created to vulnerable families from losing jobs to physical and mental illness, due to the pandemic. We then set on a mission to adopt communities and support them with the below mentioned 5 things for a span of 4 months:
                                                    <ul>
                                                        <li>
                                                            <strong>Health Support </strong>(Medicine Kits, Ration Kits, Hygiene Kits)
                                                        </li>
                                                        <li>
                                                            <strong>Employment Support </strong>(Finding Jobs / Skill Training / Upskilling)
                                                        </li>
                                                        <li>
                                                            <strong>Awareness </strong> (Street Plays, Wall Painting)
                                                        </li>
                                                        <li>
                                                            <strong>Helpdesk </strong>(For any enquiry or emergency)
                                                        </li>
                                                        <li>
                                                            <strong>Building Community Leaders </strong>(Empowering Youths)
                                                        </li>
                                                    </ul>
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Aim</h2>

                                                <p className="thm-clr blc-wt">
                                                    “To make the community self sustained”
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Mission </h2>

                                                <p className="thm-clr blc-wt">
                                                    “Make Bengaluru Covid free”
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Vision</h2>

                                                <p className="thm-clr blc-wt">
                                                    “Continue to strive hard for the betterment of the society and to make a difference one step at a time”
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Team</h2>
                                                <p className="thm-clr blc-wt">
                                                    <ul>
                                                        <li>
                                                            2 Project Managers
                                                        </li>
                                                        <li>
                                                            3 Health Care Workers
                                                        </li>
                                                        <li>
                                                            10 Interns
                                                        </li>
                                                        <li>
                                                            10 Community leaders
                                                        </li>
                                                        <li>
                                                            1 Doctor on call (24/7)
                                                        </li>
                                                        <li>
                                                            3+ Street Play Trainers & Artists 
                                                        </li>
                                                        <li>
                                                            10+ Weekend Volunteers
                                                        </li>
                                                    </ul>
                                                </p>
                                                <br />
                                                
                                                <h2 itemprop="headline">Our Plan</h2>
                                                {/* <p className="thm-clr blc-wt">
                                                    <strong>This is Dummy Text For Now</strong>
                                                    
                                                </p> */}
                                                <p className="blc-wt">
                                                    <ul>
                                                        <li>
                                                            Month 1: Survey and Understand the Community
                                                        </li>
                                                        <li>
                                                            Month 2 & 3: Provide Resources as per Survey and help strengthen their roots
                                                        </li>
                                                        <li>
                                                            Month 4: Providing Community Leaders will established connects so that the community will be Self Sustainable
                                                        </li>
                                                    </ul>
                                                </p>
                                                <h2 itemprop="headline">Our Supporters</h2>
                                                <p className="thm-clr blc-wt">
                                                    <ul>
                                                        <li>
                                                            BBMP
                                                        </li>
                                                        <li>
                                                            Jyotirmegha
                                                        </li>
                                                        <li>
                                                            Banashankari Government Primary Health Centre
                                                        </li>
                                                        <li>
                                                            Banashankari Mahila Samaja
                                                        </li>
                                                        <li>
                                                            Ward 165 Councillor Smt. Lakshmi Umesh and Team
                                                        </li>
                                                        <li>
                                                            Ward 166 councillor Smt. Yashoda Lakshmikanth and Team
                                                        </li>
                                                    </ul>
                                                </p>
                                                <br />
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
                                                    src={require("../covid19/D2.jpg")}
                                                    alt="WhatDoWeDo.jpg"
                                                    itemprop="image"
                                                />
                                                <img
                                                    src={require("../covid19/D3.jpg")}
                                                    alt="WhatDoWeDo.jpg"
                                                    itemprop="image"
                                                />
                                                <img
                                                    src={require("../covid19/D1.jpg")}
                                                    alt="WhatDoWeDo.jpg"
                                                    itemprop="image"
                                                />
                                                <img
                                                    src={require("../covid19/D5.jpg")}
                                                    alt="WhatDoWeDo.jpg"
                                                    itemprop="image"
                                                />
                                                <img
                                                    src={require("../covid19/D4.jpg")}
                                                    alt="abt-pg-img1-2.jpg"
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
                <div className="tem-wrp text-center remove-ext4">
                    <div className="row" style={{ marginBottom: "75px" }}>

                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <img
                                src={require("../covid19/Team-F.png")}
                                alt="Covid-Team.jpg"
                                itemprop="image"
                                style={{marginBottom:"25px"}}
                            />
                        </div>
                    </div>
                </div>
                <Footer></Footer> {/* Footer Component */}
            </main>
        );
    }
}

export default Covid19;
