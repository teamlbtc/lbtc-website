import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../gallery/gallery.min.scss";
import "../blog/blog.min.scss";
import { Link } from "react-router-dom";
import { FooterMain } from "../../components/FooterMain/FooterMain";
import { Imageswe } from "./itemsWe";
import { CovidRelif } from "./itemsCovid";
import "./images.css";

const Finance = () => {
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
                  <li class="breadcrumb-item active">Finance</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="sectionx">
            <h1>#WestandTogether</h1>
            <br></br>
            <div class="imagedivs">
              {Imageswe.map((index) => (
                <img src={index.image} class={index.clss} alt="img"></img>
              ))}
            </div>
          </div>

          <div class="sectionx">
            <h1>Covid Project</h1>
            <br></br>
            <div class="imagedivs">
              {CovidRelif.map((index) => (
                <img src={index.image} class={index.clss} alt="img"></img>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterMain></FooterMain>
    </div>
  );
};

export default Finance;
