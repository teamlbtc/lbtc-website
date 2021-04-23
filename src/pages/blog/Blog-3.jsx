import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import MenuBarX from "../../components/MenuBar/MenuBarNav";

const Blog = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        {/* <ResponsiveHeader></ResponsiveHeader> */}
        <MenuBarX></MenuBarX>
        <StickyHeader></StickyHeader>
        <section>
          <div class="block no-padding">
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
                  <a href="index.html" title="" itemprop="url">
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item active">Blog</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div class="block">
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-sm-12 col-lg-8">
                  <div class="blg-wrp style4 remove-ext6">
                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <a
                          href="blog-detail-no-sidebar.html"
                          title=""
                          itemprop="url"
                        >
                          <img
                            src={require("../blog/Images/Blog1.jpg")}
                            alt="Blog-1"
                            itemprop="image"
                          />
                        </a>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            May 15, 2019
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
                          <a
                            href="blog-detail-no-sidebar.html"
                            title=""
                            itemprop="url"
                          >
                            Highlight some of the fundraising
                          </a>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              James Smith
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>20
                          </li>
                        </ul>
                        <p itemprop="description">
                          Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                          ipsum dolor sit amet, con lorim ectetur Nulla
                          fringilla purus at leo dignisntum accumsan leo vel
                          tempor. Sit amet ukmi consectetur Nulla fringillat
                          etur adipisicing elit at leo dignissim congue.
                        </p>
                      </div>
                    </div>
                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <a
                          href="blog-detail-no-sidebar.html"
                          title=""
                          itemprop="url"
                        >
                          <img
                            src={require("../blog/Images/Blog2.jpg")}
                            alt="Blog-2"
                            itemprop="image"
                          />
                        </a>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            May 15, 2019
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
                          <a
                            href="blog-detail-no-sidebar.html"
                            title=""
                            itemprop="url"
                          >
                            Number of people trapped in B&B's soars by over
                          </a>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              James Smith
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>30
                          </li>
                        </ul>
                        <p itemprop="description">
                          Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                          ipsum dolor sit amet, con lorim ectetur Nulla
                          fringilla purus at leo dignisntum accumsan leo vel
                          tempor. Sit amet ukmi consectetur Nulla fringillat
                          etur adipisicing elit at leo dignissim congue.
                        </p>
                      </div>
                    </div>
                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <a
                          href="blog-detail-no-sidebar.html"
                          title=""
                          itemprop="url"
                        >
                          <img
                            src={require("../blog/Images/Blog3.jpg")}
                            alt="Blog-3"
                            itemprop="image"
                          />
                        </a>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            May 15, 2019
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
                          <a
                            href="blog-detail-no-sidebar.html"
                            title=""
                            itemprop="url"
                          >
                            Including commentary and Archival
                          </a>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              James Smith
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>45
                          </li>
                        </ul>
                        <p itemprop="description">
                          Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                          ipsum dolor sit amet, con lorim ectetur Nulla
                          fringilla purus at leo dignisntum accumsan leo vel
                          tempor. Sit amet ukmi consectetur Nulla fringillat
                          etur adipisicing elit at leo dignissim congue.
                        </p>
                      </div>
                    </div>
                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <a
                          href="blog-detail-no-sidebar.html"
                          title=""
                          itemprop="url"
                        >
                          <img
                            src={require("../blog/Images/Blog4.jpg")}
                            alt="Blog-4"
                            itemprop="image"
                          />
                        </a>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            May 15, 2019
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
                          <a
                            href="blog-detail-no-sidebar.html"
                            title=""
                            itemprop="url"
                          >
                            Ukraine Government to Do More for Human Rights
                          </a>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              James Smith
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>65
                          </li>
                        </ul>
                        <p itemprop="description">
                          Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                          ipsum dolor sit amet, con lorim ectetur Nulla
                          fringilla purus at leo dignisntum accumsan leo vel
                          tempor. Sit amet ukmi consectetur Nulla fringillat
                          etur adipisicing elit at leo dignissim congue.
                        </p>
                      </div>
                    </div>
                    <div class="blg-bx lst">
                      <div class="blg-thmb">
                        <a
                          href="blog-detail-no-sidebar.html"
                          title=""
                          itemprop="url"
                        >
                          <img
                            src={require("../blog/Images/Blog5.jpg")}
                            alt="Blog-4"
                            itemprop="image"
                          />
                        </a>
                      </div>
                      <div class="blg-inf">
                        <span class="blg-dat thm-bg">
                          <a href="#top" title="" itemprop="url">
                            May 15, 2019
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
                          <a
                            href="blog-detail-no-sidebar.html"
                            title=""
                            itemprop="url"
                          >
                            Advocating on behalf of abused and Neglected
                          </a>
                        </h4>
                        <ul class="pst-mta">
                          <li>
                            <i class="fa fa-user thm-clr"></i>
                            <a href="#top" title="" itemprop="url">
                              James Smith
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-comments thm-clr"></i>78
                          </li>
                        </ul>
                        <p itemprop="description">
                          Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                          ipsum dolor sit amet, con lorim ectetur Nulla
                          fringilla purus at leo dignisntum accumsan leo vel
                          tempor. Sit amet ukmi consectetur Nulla fringillat
                          etur adipisicing elit at leo dignissim congue.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="pgntin-wrp">
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
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-lg-4">
                  <aside class="sdbr-wrp">
                    <div class="wdgt-bx v2">
                      <h4 itemprop="headline">Recent Posts</h4>
                      <div class="mini-pst-wrp">
                        <div class="mini-pst">
                          <div class="mini-pst-thmb">
                            <a
                              href="blog-detail-no-sidebar.html"
                              title=""
                              itemprop="url"
                            >
                              <img
                                src={require("../../assets/images/resources/mini-pst-img1-2.jpg")}
                                alt="SideBar-1"
                                itemprop="image"
                              />
                            </a>
                          </div>
                          <div class="mini-pst-inf">
                            <span>
                              <a href="#top" title="" itemprop="url">
                                Mar 20, 2018
                              </a>
                            </span>
                            <h6 itemprop="headline">
                              <a
                                href="blog-detail-no-sidebar.html"
                                title=""
                                itemprop="url"
                              >
                                This is How I Relax on Lazy Sundays
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div class="mini-pst">
                          <div class="mini-pst-thmb">
                            <a
                              href="blog-detail-no-sidebar.html"
                              title=""
                              itemprop="url"
                            >
                              <img
                                src={require("../../assets/images/resources/mini-pst-img1-2.jpg")}
                                alt="Sidebar-2"
                                itemprop="image"
                              />
                            </a>
                          </div>
                          <div class="mini-pst-inf">
                            <span>
                              <a href="#top" title="" itemprop="url">
                                Apr 25, 2018
                              </a>
                            </span>
                            <h6 itemprop="headline">
                              <a
                                href="blog-detail-no-sidebar.html"
                                title=""
                                itemprop="url"
                              >
                                Going Shopping in New Dress & a Hat
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div class="mini-pst">
                          <div class="mini-pst-thmb">
                            <a href="#top" title="" itemprop="url">
                              <img
                                src={require("../../assets/images/resources/mini-pst-img1-3.jpg")}
                                alt="Sidebar-3"
                                itemprop="image"
                              />
                            </a>
                          </div>
                          <div class="mini-pst-inf">
                            <span>
                              <a
                                href="blog-detail-no-sidebar.html"
                                title=""
                                itemprop="url"
                              >
                                Jan 18, 2019
                              </a>
                            </span>
                            <h6 itemprop="headline">
                              <a
                                href="blog-detail-no-sidebar.html"
                                title=""
                                itemprop="url"
                              >
                                How an Island Forms in River And Stones
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wdgt-bx v2">
                      <h4 itemprop="headline">Categories</h4>
                      <ul>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            Lifestyle
                          </a>{" "}
                          ( 120 )
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            Fashion
                          </a>{" "}
                          ( 14 )
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            Photography
                          </a>{" "}
                          ( 43 )
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            Creative
                          </a>{" "}
                          ( 20 )
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            Travel
                          </a>{" "}
                          ( 10 )
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            Electronics
                          </a>{" "}
                          ( 70 )
                        </li>
                      </ul>
                    </div>
                    <div class="wdgt-bx v2">
                      <h4 itemprop="headline">Useful Links</h4>
                      <ul>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            Our Founder
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            Education
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            Entrepreneurship
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            Child Education
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            Grants
                          </a>
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
                              src={require("../../assets/images/resources/insta-img1-1.jpg")}
                              alt="insta-img1-1.jpg"
                              itemprop="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            <img
                              src={require("../../assets/images/resources/insta-img1-1.jpg")}
                              alt="insta-img1-2.jpg"
                              itemprop="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            <img
                              src={require("../../assets/images/resources/insta-img1-1.jpg")}
                              alt="insta-img1-3.jpg"
                              itemprop="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            <img
                              src={require("../../assets/images/resources/insta-img1-1.jpg")}
                              alt="insta-img1-4.jpg"
                              itemprop="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            <img
                              src={require("../../assets/images/resources/insta-img1-1.jpg")}
                              alt="insta-img1-5.jpg"
                              itemprop="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#top" title="" itemprop="url">
                            <img
                              src={require("../../assets/images/resources/insta-img1-1.jpg")}
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
        <Footer></Footer> {/* Footer Component */}
      </main>
    </div>
  );
};
export default Blog;
