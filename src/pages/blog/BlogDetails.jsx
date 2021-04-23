import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import DisqusComments from "../../components/Disqus/DisqusComments";
import { Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
function BlogDetails() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        <MenuBarX></MenuBarX>
        <StickyHeader></StickyHeader>
        <section>
          <div class="block no-padding aboutpaddingnotreqd">
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
                  <Link to="/blog" title="" itemprop="url">
                    Blog
                  </Link>
                </li>
                <li class="breadcrumb-item active">Jauntful Internship</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div class="block">
            <div class="container">
              <div class="blg-dtl-thmb">
                <img
                  src={require("../blog/Images/Blog1.jpg")}
                  alt="blg-dtl-img2-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="blog-dtl-wrp">
                <div class="blg-inf">
                  <span class="blg-dat thm-bg">
                    <a href="#" title="" itemprop="url">
                      July 13, 2019
                    </a>
                  </span>
                  <span class="blg-tgs">
                    <i class="fa fa-tag"></i>
                    <a href="#" title="" itemprop="url">
                      blog
                    </a>
                    ,
                    <a href="#" title="" itemprop="url">
                      interns
                    </a>
                  </span>
                  <h1 itemprop="headline">Jauntful Internship</h1>
                  <ul class="pst-mta">
                    <li>
                      <i class="fa fa-user thm-clr"></i>
                      <a href="#" title="" itemprop="url">
                        Sahiti
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="blg-dtl-desc">
                  <p itemprop="description">
                    Our journey as interns began on twenty fifth of June to
                    ‘Let’s Be The Change’ through the Social Immersion Programme
                    of our college, so as to analyse and abbreviate the
                    environmental problems. The fresh experience as an associate
                    degree intern to a non-government organisation stirred up
                    several queries and expectations within me. The benign
                    atmosphere encouraged me to actively play my assigned role.
                    The first day experience was the foremost pleasant one, from
                    ice breaking session to the assignment of roles, I enjoyed
                    it. The friendly composture of the members made us all feel
                    very inclusive. Somewhere on the journey, my mere
                    acknowledgement of problems became actions for higher cause.
                  </p>
                  <p itemprop="description">
                    I enjoyed taking the surveys as it gave an insight on the
                    neighbourhood environmental problems and improved my
                    personal skills. I look forward to working with the NGO for
                    ‘The Change’. One of my friends, Maaz, expressed his
                    fascination towards the NGO’s work environment. He claims
                    that the work introduced him to content writing, which
                    broadened his knowledge on expression.
                  </p>
                  <p itemprop="description">
                    The initiatives taken by the NGO inspired the intern to take
                    this cause further in his own direction. The internship also
                    played a role in personality development where the student’s
                    communication skills and other aspects were improved.
                    Another of my friend and active student, Neha, briefed that
                    through the work, she realised the intensity of the problem
                    and claimed that not many people are aware of its effects.
                    She said ‘If we don’t think about the consequences of our
                    actions, the continuum of the damage will not be subsided.’
                    Hemanth, member of our team expressed that his values were
                    enriched and he gained better insight on the procedure. He
                    pointed out that survey work which included interview with
                    the officials and residents improved his already gained
                    information on environmental issues. Another beloved friend
                    and intern, Surya, noticed that his feeling of
                    responsibility towards the society relatively increased
                    after working with the NGO. The value that he saw in the
                    team work can be used to transform the society for the
                    better. Mallu, part of our team, pointed out that working
                    for clean Bengaluru induced a very positive feeling around
                    him. I believe, we, who are associated with the complex
                    nature of environmental issues which stem from the
                    historical events and current restraints, need to take the
                    initiatives. In conclusion, we all had different outlooks on
                    the time we spent at ‘Lets Be The Change’ but we all can say
                    its an internship with learning and fun.
                  </p>
                  <br />
                  <div class="gallery">
                    <div class="row">
                      <div class="col-md-12 col-sm-12 col-lg-12"></div>
                    </div>
                  </div>
                </div>
                <div class="athr-bx">
                  <img
                    src={require("../blog/Images/Sahiti.jpg")}
                    alt="athr-img1-1.jpg"
                    itemprop="image"
                  />
                  <div class="athr-inf">
                    <h4 itemprop="headline">About Author</h4>
                    <p itemprop="description">
                      Sahiti is an Intern with Let's Be The Change
                    </p>
                    <div class="athr-scl">
                      <a
                        class="facebook"
                        href="https://www.facebook.com/teamlbtc"
                        title="Facebook"
                        target="_blank"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>

                      <a
                        class="instagram"
                        href="https://www.instagram.com/team_lbtc/"
                        title="Twitter"
                        target="_blank"
                      >
                        <i class="fa fa-instagram"></i>
                      </a>

                      <a
                        class="twitter"
                        href="https://www.twitter.com/TeamLBTC"
                        title="Twitter"
                        target="_blank"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="cmt-wrp">
                  <h4 itemprop="headline">Comments</h4>
                  <br />
                  <DisqusComments></DisqusComments>
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
export default BlogDetails;
