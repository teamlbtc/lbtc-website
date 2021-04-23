import React from "react";
import "../BlogArticles/blogarticles.min.scss";
import { Link } from "react-router-dom";

function BlogArticles() {
  return (
    <section>
      <div className="block gray-grdnt-bg">
        <div className="container">
          <div className="sec-ttl text-center">
            <div className="sec-ttl-inr">
              <h2 itemprop="headline">Our Blog</h2>
              <span>
                Here we share our stories, event summaries and thoughts.
              </span>
              <i className="flaticon-sweat thm-clr"></i>
            </div>
          </div>
          <div className="blg-wrp style3 remove-ext3">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="blg-bx3">
                  <span className="thm-clr">News</span>
                  <h4 itemprop="headline">
                    <Link to="/blog/blog-1">Jauntful Internship!</Link>
                  </h4>
                  <p itemprop="description">
                    Our journey as interns began on twenty fifth of June to
                    ‘Let’s Be The Change’ through the Social Immersion Programme
                  </p>
                  <ul className="pst-mta">
                    <li>
                      <a href="#top" title="" itemprop="url">
                        May 13, 2019
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-comments thm-clr"></i>20
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="blg-bx3">
                  <span className="thm-clr">News</span>
                  <h4 itemprop="headline">
                    <Link to="/blog/blog-2">Cleanathon: What, Why & How</Link>
                  </h4>
                  <p itemprop="description">
                    The concept of Cleanathon was started by the Team of Lets Be
                    the Change in 2014.
                  </p>
                  <ul className="pst-mta">
                    <li>
                      <a href="#top" title="" itemprop="url">
                        February 25, 2019
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-comments thm-clr"></i>25
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="blg-bx3">
                  <span className="thm-clr">News</span>
                  <h4 itemprop="headline">
                    <Link to="/blog/blog-3">
                      Restorative Practices for Schools
                    </Link>
                  </h4>
                  <p itemprop="description">
                    Schools are where hundreds of children attain literacy and
                    are getting prepared for life.
                  </p>
                  <ul className="pst-mta">
                    <li>
                      <a href="#top" title="" itemprop="url">
                        February 25, 2019
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-comments thm-clr"></i>65
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="vw-mr text-center">
            <a className="thm-btn">
              <Link
                to="/blog"
                className="viewallpostsbutton"
                style={{ textDecoration: "none", color: "white" }}
              >
                View All Blogs
              </Link>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogArticles;
