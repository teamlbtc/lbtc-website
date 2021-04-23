import React from "react";
import '../OurActivities/ouractivities.min.scss';
import { Link } from "react-router-dom";

function OurActivities() {
    return (
        <div className="App">
            <section>
                <div className="block top-spac100 remove-bottom">
                    <div
                        className="fixed-bg shp-bg back-post-rgtbtm"
                        style={{
                            backgroundImage: "url(../../assets/images/bg-shp2.png)",
                        }}
                    ></div>
                    <div className="container">
                        <div className="fndrs-wrp2">
                            <div className="row align-items-center">
                                <div className="col-md-4 col-sm-12 col-lg-4">
                                    <div className="fndrs-img-wrp">
                                        <img
                                            src={require("../OurActivities/1.jpg")}
                                            alt="fndrs-img1.jpg"
                                            itemprop="image"
                                        />
                                        <img
                                            src={require("../OurActivities/2.jpg")}
                                            alt="fndrs-img2.jpg"
                                            itemprop="image"
                                        />
                                        <img
                                            src={require("../OurActivities/3.jpg")}
                                            alt="fndrs-img3.jpg"
                                            itemprop="image"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 col-lg-4">
                                    <div className="fndrs-inf text-center thm-layer opc9">
                                        <div
                                            className="fixed-bg thm-bg back-blend-multiply"
                                            
                                        ></div>
                                        <img
                                            src={require("../OurActivities/Logo.png")}
                                            alt="fndrs-icn.png"
                                            itemprop="image"
                                        />
                                        <h2 itemprop="headline">Our Activities</h2>
                                        <p itemprop="description">
                                            Here is a peek through the highlights of our activities
                      </p>
                                        <br />
                                        <Link to="/gallery">
                                            <button
                                                className="thm-btn thmbtnx">
                                                Gallery<span></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 col-sm-4">
                                    <div className="fndrs-img-wrp">
                                        <img
                                            src={require("../OurActivities/4.jpg")}
                                            alt="fndrs-img4.jpg"
                                            itemprop="image"
                                        />
                                        <img
                                            src={require("../OurActivities/5.jpg")}
                                            alt="fndrs-img5.jpg"
                                            itemprop="image"
                                        />
                                        <img
                                            src={require("../OurActivities/6.jpg")}
                                            alt="fndrs-img6.jpg"
                                            itemprop="image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default OurActivities;