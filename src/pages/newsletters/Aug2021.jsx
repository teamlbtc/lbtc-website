import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import { Link } from "react-router-dom";
import FooterMain from "../../components/FooterMain/FooterMain";


const Aug2021 = () => {
    return (
        <div className="App">
            <main>
            <HeaderBar></HeaderBar>
            <MenuBarX></MenuBarX>
            <MenuBar></MenuBar>
            <StickyHeader></StickyHeader>
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
            <section>
                <div class="gray-bg3 brdcrmb-wrp">
                    <div class="container">
                        <div class="brdcrmb-inr flex justify-content-between">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link to="" title="" itemprop="url">
                                    Home
                                    </Link>
                                </li>
                                <li class="breadcrumb-item active">August 2021 Newsletters</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>August 2021</h1>
                    <section>
                        <div className="sectiondiv">
                        <img src={require('../newsletters/Aug2021/1.png')}></img>
                            <a href="https://www.ketto.org/fundraiser/westandtogether-oxygen-support-for-10k-vulnerable-families?payment=form"
                                title=""
                                itemprop="url"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}><img src={require('../newsletters/Aug2021/2.png')}></img></a>
                                <Link to="/signupform"> 
                                    <img src={require('../newsletters/Aug2021/3.png')}></img>
                                </Link>
                                <a href="http://bit.ly/CPP_Vol_Enrolment"
                                title=""
                                itemprop="url"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}>  <img src={require('../newsletters/Aug2021/4.png')}></img></a>
                                
                        </div>
                    </section>
                </div>
            </section>
            </main>
            <FooterMain></FooterMain>
        </div>
    )
}

export default Aug2021;
