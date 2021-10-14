import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import FooterMain from "../../components/FooterMain/FooterMain";
import { Link } from "react-router-dom";
import { NewsItems } from "./NewsItems";
import "./NewsLetter.css";

const Newsletters = () => {
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
                  <li class="breadcrumb-item active">Newsletters</li>
                </ol>
              </div>
            </div>
          </div>
          <div>
            <h1>Our NewsLetters</h1>
            <section>
              {NewsItems.map((main) => (
                <div className="sectiondiv">
                  <div className="colorwithstyle">
                    <Link
                      className="mobx"
                      to={"/" + main.newlink}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h1
                        className="xview"
                        style={{
                          paddingLeft: "2rem",
                          color: "white",
                          paddingTop: "1rem",
                        }}
                      >
                        {main.month}
                      </h1>
                      <h1
                        className="xview"
                        style={{
                          paddingRight: "2rem",
                          color: "white",
                          paddingTop: "1rem",
                        }}
                      >
                        {main.year}
                      </h1>
                    </Link>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
      </main>
      <FooterMain></FooterMain>
    </div>
  );
};

export default Newsletters;
