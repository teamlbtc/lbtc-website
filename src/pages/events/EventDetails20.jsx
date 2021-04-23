import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";

function EventDetails20() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        {/* <ResponsiveHeader></ResponsiveHeader> */}
        <MenuBarX></MenuBarX>
        <MenuBar></MenuBar>

        <section>
          <div class="block no-padding">
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
                  <Link to="/events" title="" itemprop="url">
                    Event
                  </Link>
                </li>
                <li class="breadcrumb-item active">Event Details</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div class="block">
            <div class="container">
              <div class="evnt-dtl-thmb">
                <img
                  src={require("../../assets/images/resources/evnt-dtl-img1-1.jpg")}
                  alt="evnt-dtl-img1-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="evnt-dtl-wrp">
                <div class="evnt-dtl-inf">
                  <h1 itemprop="headline">
                    Help others through the gift of your time, donations
                  </h1>
                  <div class="evnt-orgn">
                    <img
                      src={require("../../assets/images/resources/evnt-orgn1-1.jpg")}
                      alt="evnt-orgn1-1.jpg"
                      itemprop="image"
                    />
                    <div class="evnt-orgn-inf">
                      <h6 itemprop="headline">Nolim Smith</h6>
                      <span>Organizer</span>
                    </div>
                  </div>
                  <div class="evnt-orgn">
                    <img
                      src={require("../events/Images/Authors/Author-LBTC.png")}
                      alt="evnt-orgn1-2.jpg"
                      itemprop="image"
                    />
                    <div class="evnt-orgn-inf">
                      <h6 itemprop="headline">Youth Child</h6>
                      <span>Charityble Trust</span>
                    </div>
                  </div>
                  <div class="evnt-dtl-inf-inr">
                    <div class="evnt-dtl-dt">
                      <i class="fa fa-calendar"></i>
                      <span>
                        Started: <i class="thm-clr">12.03.2019</i>
                      </span>
                      <span>
                        Ending: <i class="thm-clr">14.03.2019</i>
                      </span>
                    </div>
                    <div class="evnt-dtl-btns">
                      <a href="#" title="" itemprop="url">
                        Google Calendar
                      </a>
                      <a class="thm-btn" href="#" title="" itemprop="url">
                        Get Ticket<span></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="evnt-dtl-desc">
                  <p itemprop="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dumm when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has
                    survived not only five cen electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets cont es, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                  <p itemprop="description">
                    scrambled it to make a type specimen book. It has survived
                    not only five cenelectronic typesetting, remaining
                    essentially unchang ed. It was popularised in the 1960s with
                    the release of Letraset sheets cont es,
                  </p>
                </div>
                <div class="evnt-fclt-wrp">
                  <h4 itemprop="headline">Event Facilities</h4>
                  <ul class="evnt-fclt-lst">
                    <li>
                      <div class="evnt-fclt-bx">
                        <i class="thm-clr flaticon-boy-broad-smile"></i>
                        <h6 itemprop="headline">Child Motivation</h6>
                      </div>
                    </li>
                    <li>
                      <div class="evnt-fclt-bx">
                        <i class="thm-clr flaticon-radio"></i>
                        <h6 itemprop="headline">Speak & Music</h6>
                      </div>
                    </li>
                    <li>
                      <div class="evnt-fclt-bx">
                        <i class="thm-clr flaticon-signpost"></i>
                        <h6 itemprop="headline">Playground</h6>
                      </div>
                    </li>
                    <li>
                      <div class="evnt-fclt-bx">
                        <i class="thm-clr flaticon-family"></i>
                        <h6 itemprop="headline">Sponsorship</h6>
                      </div>
                    </li>
                    <li>
                      <div class="evnt-fclt-bx">
                        <i class="thm-clr flaticon-save-money"></i>
                        <h6 itemprop="headline">Provide Fund</h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="evnt-vdo-wrp">
                  <h4 itemprop="headline">Event Video</h4>
                  <div class="vdo-bx">
                    <img
                      src={require("../../assets/images/resources/vdo-img2.jpg")}
                      alt="vdo-img2.jpg"
                      itemprop="image"
                    />
                    <a
                      href="https://www.youtube.com/embed/5Y0Qrtew4VE"
                      data-fancybox
                      title=""
                      itemprop="url"
                    >
                      <i class="fa fa-play thm-bg"></i>
                      <span>1:04</span>
                    </a>
                  </div>
                </div>
                <div class="evnt-spkrs-wrp">
                  <h4 itemprop="headline">Event Speaker</h4>
                  <div class="evnt-spkr-inr remove-ext1">
                    <div class="row mrg20">
                      <div class="col-md-4 col-sm-6 col-lg-4">
                        <div class="evnt-spkr-bx">
                          <img
                            src={require("../../assets/images/resources/evnt-spkr-img1-1.jpg")}
                            alt="evnt-spkr-img1-1.jpg"
                            itemprop="image"
                          />
                          <div class="evnt-spkr-inf">
                            <img
                              src={require("../../assets/images/spkr-flg1.jpg")}
                              alt="spkr-flg1.jpg"
                              itemprop="image"
                            />
                            <div class="evnt-spkr-inf-inr">
                              <h6 itemprop="headline">Mark Walkar</h6>
                              <span>Motivation speaker - Uk</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-6 col-lg-4">
                        <div class="evnt-spkr-bx">
                          <img
                            src={require("../../assets/images/resources/evnt-spkr-img1-2.jpg")}
                            alt="evnt-spkr-img1-2.jpg"
                            itemprop="image"
                          />
                          <div class="evnt-spkr-inf">
                            <img
                              src={require("../../assets/images/spkr-flg2.jpg")}
                              alt="spkr-flg2.jpg"
                              itemprop="image"
                            />
                            <div class="evnt-spkr-inf-inr">
                              <h6 itemprop="headline">Thomas James</h6>
                              <span>Motivation speaker - Turkey</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-6 col-lg-4">
                        <div class="evnt-spkr-bx">
                          <img
                            src={require("../../assets/images/resources/evnt-spkr-img1-3.jpg")}
                            alt="evnt-spkr-img1-3.jpg"
                            itemprop="image"
                          />
                          <div class="evnt-spkr-inf">
                            <img
                              src={require("../../assets/images/spkr-flg3.jpg")}
                              alt="spkr-flg3.jpg"
                              itemprop="image"
                            />
                            <div class="evnt-spkr-inf-inr">
                              <h6 itemprop="headline">Nomina Jacki</h6>
                              <span>Motivation speaker - Uk</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="evnt-glry-wrp">
                  <h4 itemprop="headline">Event Gallery</h4>
                  <div class="evnt-glry-inr remove-ext1">
                    <div class="row mrg20">
                      <div class="col-md-6 col-sm-12 col-lg-6">
                        <div class="gallery-item">
                          <a
                            href="../../assets/images/resources/evnt-dtl-gal-img1-1.jpg"
                            title=""
                            data-fancybox="gallery"
                            itemprop="url"
                          >
                            <img
                              src={require("../../assets/images/resources/evnt-dtl-gal-img1-1.jpg")}
                              alt="evnt-dtl-gal-img1-1.jpg"
                              itemprop="image"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12 col-lg-6">
                        <div class="row mrg20">
                          <div class="col-md-6 col-sm-6 col-lg-6">
                            <div class="gallery-item">
                              <a
                                href="../../assets/images/resources/evnt-dtl-gal-img1-2.jpg"
                                title=""
                                data-fancybox="gallery"
                                itemprop="url"
                              >
                                <img
                                  src={require("../../assets/images/resources/evnt-dtl-gal-img1-2.jpg")}
                                  alt="evnt-dtl-gal-img1-2.jpg"
                                  itemprop="image"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-lg-6">
                            <div class="gallery-item">
                              <a
                                href="../../assets/images/resources/evnt-dtl-gal-img1-3.jpg"
                                title=""
                                data-fancybox="gallery"
                                itemprop="url"
                              >
                                <img
                                  src={require("../../assets/images/resources/evnt-dtl-gal-img1-3.jpg")}
                                  alt="evnt-dtl-gal-img1-3.jpg"
                                  itemprop="image"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-lg-6">
                            <div class="gallery-item">
                              <a
                                href="../../assets/images/resources/evnt-dtl-gal-img1-4.jpg"
                                title=""
                                data-fancybox="gallery"
                                itemprop="url"
                              >
                                <img
                                  src={require("../../assets/images/resources/evnt-dtl-gal-img1-4.jpg")}
                                  alt="evnt-dtl-gal-img1-4.jpg"
                                  itemprop="image"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-lg-6">
                            <div class="gallery-item">
                              <a
                                href="../../assets/images/resources/evnt-dtl-gal-img1-5.jpg"
                                title=""
                                data-fancybox="gallery"
                                itemprop="url"
                              >
                                <img
                                  src={require("../../assets/images/resources/evnt-dtl-gal-img1-5.jpg")}
                                  alt="evnt-dtl-gal-img1-5.jpg"
                                  itemprop="image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="evnt-loc-wrp">
                  <h4 itemprop="headline">Event Location</h4>
                  <div class="evnt-loc2" id="evnt-loc"></div>
                </div>
                <div class="evnt-plt-spnsr-wrp">
                  <h4 itemprop="headline">Platinum Sponsors</h4>
                  <ul class="spnsr-lst">
                    <li>
                      <div class="orgn-bx2">
                        <img
                          src={require("../../assets/images/resources/org-img2-1.png")}
                          alt="org-img2-1.png"
                          itemprop="image"
                        />
                      </div>
                    </li>
                    <li>
                      <div class="orgn-bx2">
                        <img
                          src={require("../../assets/images/resources/org-img2-2.png")}
                          alt="org-img2-2.png"
                          itemprop="image"
                        />
                      </div>
                    </li>
                    <li>
                      <div class="orgn-bx2">
                        <img
                          src={require("../../assets/images/resources/org-img2-3.png")}
                          alt="org-img2-3.png"
                          itemprop="image"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="evnt-gld-spnsr-wrp">
                  <h4 itemprop="headline">Gold Sponsors</h4>
                  <ul class="spnsr-lst">
                    <li>
                      <div class="orgn-bx2">
                        <img
                          src={require("../../assets/images/resources/org-img2-1.png")}
                          alt="org-img2-1.png"
                          itemprop="image"
                        />
                      </div>
                    </li>
                    <li>
                      <div class="orgn-bx2">
                        <img
                          src={require("../../assets/images/resources/org-img2-2.png")}
                          alt="org-img2-2.png"
                          itemprop="image"
                        />
                      </div>
                    </li>
                    <li>
                      <div class="orgn-bx2">
                        <img
                          src={require("../../assets/images/resources/org-img2-3.png")}
                          alt="org-img2-3.png"
                          itemprop="image"
                        />
                      </div>
                    </li>
                    <li>
                      <div class="orgn-bx2">
                        <img
                          src={require("../../assets/images/resources/org-img2-4.png")}
                          alt="org-img2-4.png"
                          itemprop="image"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="evnt-prc-wrp">
                  <h4 itemprop="headline">Choose A Ticket</h4>
                  <div class="evnt-prc-inr remove-ext1">
                    <div class="row mrg20">
                      <div class="col-md-4 col-sm-6 col-lg-4">
                        <div
                          class="prc-bx prc-blu-bg"
                          style={{
                            backgroundImage:
                              "url(../../assets/images/pattern-bg3.png)",
                          }}
                        >
                          <div class="prc-hed">
                            <h6 itemprop="headline">Basic Pass</h6>
                            <span>
                              <sup>$</sup>35.99
                            </span>
                          </div>
                          <ul class="prc-pkg-lst">
                            <li>
                              <i class="fa fa-check"></i>10 SEO Keywords
                            </li>
                            <li>
                              <i class="fa fa-check"></i>2 Video Camplaigns
                            </li>
                            <li>
                              <i class="fa fa-check"></i>5 PPC Campaigns
                            </li>
                          </ul>
                          <a href="#" title="" itemprop="url">
                            Get Ticket
                          </a>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-6 col-lg-4">
                        <div
                          class="prc-bx prc-rd-bg"
                          style={{
                            backgroundImage:
                              "url(../../assets/images/pattern-bg3.png)",
                          }}
                        >
                          <div class="prc-hed">
                            <h6 itemprop="headline">Standard Pass</h6>
                            <span>
                              <sup>$</sup>68.99
                            </span>
                          </div>
                          <ul class="prc-pkg-lst">
                            <li>
                              <i class="fa fa-check"></i>10 SEO Keywords
                            </li>
                            <li>
                              <i class="fa fa-check"></i>2 Video Camplaigns
                            </li>
                            <li>
                              <i class="fa fa-check"></i>5 PPC Campaigns
                            </li>
                          </ul>
                          <a href="#" title="" itemprop="url">
                            Get Ticket
                          </a>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-6 col-lg-4">
                        <div
                          class="prc-bx prc-grn-bg"
                          style={{
                            backgroundImage:
                              "url(../../assets/images/pattern-bg3.png)",
                          }}
                        >
                          <div class="prc-hed">
                            <h6 itemprop="headline">Advanced Pass</h6>
                            <span>
                              <sup>$</sup>90.99
                            </span>
                          </div>
                          <ul class="prc-pkg-lst">
                            <li>
                              <i class="fa fa-check"></i>10 SEO Keywords
                            </li>
                            <li>
                              <i class="fa fa-check"></i>2 Video Camplaigns
                            </li>
                            <li>
                              <i class="fa fa-check"></i>5 PPC Campaigns
                            </li>
                          </ul>
                          <a href="#" title="" itemprop="url">
                            Get Ticket
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default EventDetails20;
