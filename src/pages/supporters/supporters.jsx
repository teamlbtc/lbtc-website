import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../gallery/gallery.min.scss";
import "../blog/blog.min.scss";
import { Link } from "react-router-dom";
import { FooterMain } from "../../components/FooterMain/FooterMain";
import Partners from "../../components/Partners/Partners";
import { KeySupporters } from "./keySupp";
import { Cpartners } from "./cpartners";
import "./support.css";

const Supporters = () => {
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
                  <li class="breadcrumb-item active">Supporters</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="sectionxx">
            <h1 style={{ marginBottom: "15px" }}>Key Supporters:</h1>
            <div class="sep">
              <img
                src={require("./cpartners/key.png")}
                class="new"
                alt="img"
              ></img>
            </div>
          </div>

          <div class="dex">
            <h1 style={{ marginBottom: "55px" }}>Corporate Partners:</h1>
            <div class="sep">
              <div class="grid">
                {Cpartners.map((index) => (
                  <div>
                    <a
                      href={index.anchor}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={index.image} class={index.clss} alt="img"></img>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div class="sectionxx">
            <h1>Worked With:</h1>
            <div class="gridcontainer">
              <img
                src={require("./cpartners/SuppPage/6.png")}
                alt="images"
              ></img>
              <img
                src={require("./cpartners/SuppPage/7.png")}
                alt="images"
              ></img>
              <img
                src={require("./cpartners/SuppPage/8.png")}
                alt="images"
              ></img>
            </div>
          </div>
        </section>
      </main>
      <FooterMain></FooterMain>
    </div>
  );
};

export default Supporters;
