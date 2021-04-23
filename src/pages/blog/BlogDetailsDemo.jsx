import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import "../blog/blog.min.scss";


function BlogDetails() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        <MenuBarX></MenuBarX>
        <StickyHeader></StickyHeader>
        <section>
          <div class="block no-padding">
            <div class="pg-tp-bg">
              <img src={require("../../assets/images/pg-tp-bg1.jpg")} alt="Yo"/>
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
                <li class="breadcrumb-item">
                  <a href="blog-style4.html" title="" itemprop="url">
                    Blog
                  </a>
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
                  src={require("../../assets/images/resources/blg-dtl-img2-1.jpg")}
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

                  <blockquote
                    class="alignright"
                    style={{
                      backgroundImage:
                        "url(../../assets/images/pattern-bg1.jpg)",
                    }}
                  >
                    <i class="fa fa-quote-left"></i>
                    <p itemprop="description">
                      dolor st amet, consetetur sadi pscing elit dolore lorime
                      smagna Lorimes aliquyam.
                    </p>
                  </blockquote>
                  <p itemprop="description">
                    leo vel tempor. Sit amet ukmicursus nisl aliquam. Aliquam et
                    elit eu nunc rhoncus viverra quis at felis. Sed do alim.
                  </p>
                  <ul>
                    <li>Aliquam et elit eu nunci consectetur.</li>
                    <li>Nulla fringillatetur adipisic</li>
                    <li>Dosectetur adipisicing elit, sed ectetur</li>
                    <li>Malesuada fames ac turpis egestas</li>
                    <li>Charity Education poor people.</li>
                  </ul>
                  <div class="gallery">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gallery-item">
                          <a
                            href="../../assets/images/resources/blg-dtl-gal-img2-1.jpg"
                            title=""
                            data-fancybox="gallery"
                            itemprop="url"
                          >
                            <img
                              src={require("../../assets/images/resources/blg-dtl-gal-img2-1.jpg")}
                              alt="blg-dtl-gal-img2-1.jpg"
                              itemprop="image"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gallery-item">
                          <a
                            href="../../assets/images/resources/blg-dtl-gal-img2-2.jpg"
                            title=""
                            data-fancybox="gallery"
                            itemprop="url"
                          >
                            <img
                              src={require("../../assets/images/resources/blg-dtl-gal-img2-2.jpg")}
                              alt="blg-dtl-gal-img2-2.jpg"
                              itemprop="image"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-12 col-sm-12 col-lg-12">
                        <div class="vdo-bx">
                          <img
                            src={require("../../assets/images/resources/vdo-img.jpg")}
                            alt="vdo-img.jpg"
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
                    </div>
                  </div>
                  <p itemprop="description">
                    cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra
                    quis at felis. Sed do alim consectetur Nulla fringillatetur
                    adipisicing elit at leo dignissim congue. Mauris ele
                    yummentum accumsan leo vel tempor.cursus nisl aliquam.
                    Aliquam et elit eu nunc rhoncus viv erra quis at felis. Sed
                    do alim consectetur Nulla fringillatetur adipisicinauris ele
                    yummentum accumsan leo vel tempor.
                  </p>
                </div>
                <div class="athr-bx">
                  <img
                    src={require("../../assets/images/resources/athr-img1-1.jpg")}
                    alt="athr-img1-1.jpg"
                    itemprop="image"
                  />
                  <div class="athr-inf">
                    <h4 itemprop="headline">About Admin</h4>
                    <p itemprop="description">
                      Lorem ipsum dolor sit amet, consectetur alim Vivamus scele
                      Don malesuada sodales neque in faucibus cele Don malesuada
                      sodales nimesle.
                    </p>
                    <div class="athr-scl">
                      <a
                        class="facebook"
                        href="#"
                        title="Facebook"
                        target="_blank"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a
                        class="pinterest"
                        href="#"
                        title="Pinterest"
                        target="_blank"
                      >
                        <i class="fa fa-pinterest-p"></i>
                      </a>
                      <a
                        class="twitter"
                        href="#"
                        title="Twitter"
                        target="_blank"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="cmt-wrp">
                  <h4 itemprop="headline">02 Comments</h4>
                  <ul class="cmt-lst">
                    <li>
                      <div class="cmt-bx">
                        <img
                          src={require("../../assets/images/resources/cmt-img1-1.jpg")}
                          alt="cmt-img1-1.jpg"
                          itemprop="image"
                        />
                        <div class="cmt-inf">
                          <h6 itemprop="headline">Jockon Don</h6>
                          <span class="thm-clr">10 months ago</span>
                          <p itemprop="description">
                            Cupcake ipsum dolor sit amet. Dragée sweet roll
                            tiramisu sweet cupcake croissant lollipop candy
                            Cupcake ip sum dolor sit amet. Dragée sweet roll
                            tiramisu sweet cupcake croissant lollipop candy.
                          </p>
                          <a
                            class="comment-reply-link"
                            href="#"
                            title=""
                            itemprop="url"
                          >
                            Reply
                          </a>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div class="cmt-bx">
                            <img
                              src={require("../../assets/images/resources/cmt-img1-2.jpg")}
                              alt="cmt-img1-2.jpg"
                              itemprop="image"
                            />
                            <div class="cmt-inf">
                              <h6 itemprop="headline">Thomas Tom</h6>
                              <span class="thm-clr">10 months ago</span>
                              <p itemprop="description">
                                Cupcake ipsum dolor gée sweet roll tiramisu
                                sweet cupcake croissant lollipop candy Cupcake
                                ip Dragée sweet roll tiramisu sweet cupcake
                                croissant lollipop candy.
                              </p>
                              <a
                                class="comment-reply-link"
                                href="#"
                                title=""
                                itemprop="url"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="rply-cmt">
                  <h4 itemprop="headline">Leave A Comment</h4>
                  <form>
                    <div class="row mrg10">
                      <div class="col-md-6 col-sm-12 col-lg-6">
                        <input type="text" placeholder="Your Name" />
                      </div>
                      <div class="col-md-6 col-sm-12 col-lg-6">
                        <input type="email" placeholder="Your Email" />
                      </div>
                      <div class="col-md-12 col-sm-12 col-lg-12">
                        <input type="text" placeholder="Subject" />
                      </div>
                      <div class="col-md-12 col-sm-12 col-lg-12">
                        <textarea placeholder="Message"></textarea>
                        <button class="thm-btn" type="submit">
                          Send Message<span></span>
                        </button>
                      </div>
                    </div>
                  </form>
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
