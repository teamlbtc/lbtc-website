import React, { Component } from 'react';
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import "../aboutus/aboutus.min.scss";
import {
    Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { SliderData } from '../../components/ImageSlider/SliderData';

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
                                                    {/* We at Let's Be The Change have been working with BBMP & BCP from the past 7 months in the following:<br/>
                                                    <ul>
                                                    <li>
                                                        Mapping 11000+ Operating Essential Stores like Medical Stores, Grocery Stores during lockdown for easy access for Public. We also mapped Needy Families for Ration & Hygiene Kit Distribution.
                                                    </li>
                                                    <li>
                                                        BBMP Citizen Squad
                                                    </li>
                                                    </ul>  */}
                                                    The <strong>COVID-19 Relief Project</strong> aims to support the vulnerable families & make these settlements free from COVID-19. We hereby request you extend your full support for our team to execute the <strong>COVID-19 Relief Project</strong> Phase 3 in the 6 settlements of South Zone. The duration of Phase 3 project is from 1st of May 2021 to 1st of August 2021. Every small donation you make will help the vulnerable families at this time of crisis: <strong><a href="https://rzp.io/l/lbtcdonate4needy">Donate</a></strong>
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">About Project</h2>

                                                {/* <p className="thm-clr blc-wt">
                                                    We have identified 2 slums in South Bangalore: (Total Population of 3000)
                                                    <ul>
                                                    <li>
                                                        Raghavendra Colony
                                                    </li>
                                                    <li>
                                                        A K Colony
                                                    </li>
                                                    </ul>                                                                           
                                                </p> */}
                                                <p className="thm-clr blc-wt">
                                                We at LBTC have been working on ground for the past one year supporting 500+ vulnerable families directly under the ‘Covid19 Relief Project’ in ward 165 & ward 166 (South Zone). From April 2021, due to the rise of covid cases, we are expanding our operations to 6 settlements (10000+ households), namely:
                                                    <ul>
                                                        <li>
                                                            <strong>Ward 165:</strong> Raghavendra Colony – 85 households
                                                        </li>
                                                        <li>
                                                            <strong>Ward 165:</strong> Papaiah Garden – 100 households
                                                        </li>
                                                        <li>
                                                            <strong>Ward 166:</strong> AK Colony – 500 households
                                                        </li>
                                                        <li>
                                                            <strong>Ward 167:</strong> Byrappa and RK Block – 1000 households
                                                        </li>
                                                        <li>
                                                            <strong>Ward 180:</strong> Yarab Nagar – 8000 households
                                                        </li>
                                                        <li>
                                                            <strong>Ward 183:</strong> Kakatiya Nagar – 500 households
                                                        </li>
                                                    </ul>
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Support System Provided</h2>

                                                <p className="thm-clr blc-wt">
                                                    We will be supporting these settlements in the following:
                                                    <ul>
                                                        <li>
                                                            Door to door survey:
                                                            <dd>- Understanding the community</dd>
                                                            <dd>- Identifying high-risk population</dd>
                                                        </li>
                                                        <li>
                                                            Covid19 & Vaccination Awareness:
                                                            <dd>- Door to door</dd>
                                                            <dd>- Mic announcements</dd>
                                                            <dd>- Street plays</dd>
                                                        </li>
                                                        <li>
                                                            Free Covid19 testing
                                                        </li>
                                                        <li>
                                                            Free Vaccination drives
                                                        </li>
                                                        <li>
                                                            Connecting vulnerable families with Govt PHC & BBMP Officials
                                                            <dd>- For regular free check-up & medicines from PHC</dd>
                                                            <dd>- For understanding & registering under Govt Schemes & Policies</dd>
                                                        </li>
                                                        <li>
                                                            Provide <strong>EMERGENCY</strong> support:
                                                            <dd>- Oxygen Concentrators & cylinder support</dd>
                                                            <dd>- Ambulance support</dd>
                                                            <dd>- Financial support for treatment</dd>
                                                            <dd>- Distribution of Hygiene, Ration & Covid Care Kits</dd>
                                                        </li>
                                                        <li>
                                                            <strong>Staff/Volunteers & Materials</strong> support for Govt PHCs, namely:
                                                            <dd>- Ward 167 - Yediyur PHC</dd>
                                                            <dd>- Ward 165 - Banashankari PHC</dd>
                                                            <dd>- Ward 183 - Chikkalasandra PHC</dd>
                                                            <dd>- Ward 184 - Uttarahalli PHC</dd>
                                                            <dd>- Ward 180 – Yarab Nagar PHC</dd>
                                                            <dd>- Ward 161 – Hosakerehalli PHC</dd>
                                                        </li>
                                                    </ul>
                                                </p>
                                                <br />
                                                {/* <h2 itemprop="headline">Our Mission </h2>

                                                <p className="thm-clr blc-wt">
                                                    “Make Bengaluru Covid free”
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Vision</h2>

                                                <p className="thm-clr blc-wt">
                                                    “Continue to strive hard for the betterment of the society and to make a difference one step at a time”
                                                </p>
                                                <br /> */}
                                                <h2 itemprop="headline">Our Team</h2>
                                                <p className="thm-clr blc-wt">
                                                    <ul>
                                                        <li>
                                                            2 Project Managers
                                                        </li>
                                                        <li>
                                                            7 Health Care Workers
                                                        </li>
                                                        <li>
                                                            11 Interns
                                                        </li>
                                                        <li>
                                                            10 Community leaders
                                                        </li>
                                                        <li>
                                                            1 Doctor on call (24/7)
                                                        </li>
                                                        <li>
                                                            10 Street Play Trainers & Artists 
                                                        </li>
                                                        <li>
                                                            10 Weekend Volunteers
                                                        </li>
                                                    </ul>
                                                </p>
                                                <br />
                                                
                                                {/* <h2 itemprop="headline">Our Plan</h2>
                                                
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
                                                </p> */}
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
                    <div className="row" style={{ marginBottom: "3rem" , marginTop: "1rem" , justifyContent:"center" }}>

                        <div className="col-md-12 col-sm-12 col-lg-12" style={{maxWidth: "1100px"}}>
                            {/* <img
                                src={require("../covid19/Team-F.png")}
                                alt="Covid-Team.jpg"
                                itemprop="image"
                                style={{marginBottom:"25px"}}
                            /> */}
                            <ImageSlider></ImageSlider>
                        </div>
                        
                    </div>
                </div>
                <Footer></Footer> {/* Footer Component */}
            </main>
        );
    }
}

export default Covid19;
