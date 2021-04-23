import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import { Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import DisqusComments7 from "../../components/Disqus/DisqusComments7";

function BlogDetails7() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        {/* <ResponsiveHeader></ResponsiveHeader> */}
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
                <li class="breadcrumb-item active">About Us</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div class="block">
            <div class="container">
              <div class="blg-dtl-thmb">
                <img
                  src={require("../blog/Images/Blog-Hemanth.jpg")}
                  alt="blg-dtl-img2-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="blog-dtl-wrp">
                <div class="blg-inf">
                  <span class="blg-dat thm-bg">
                    <a href="#" title="" itemprop="url">
                      September 18, 2020
                    </a>
                  </span>
                  <span class="blg-tgs">
                    <i class="fa fa-tag"></i>
                    <a href="#" title="" itemprop="url">
                      COVID
                    </a>
                    ,
                    <a href="#" title="" itemprop="url">
                      interns
                    </a>
                  </span>
                  <h1 itemprop="headline">The Home Quarantine Watch Volunteer Task</h1>
                  <ul class="pst-mta">
                    <li>
                      <i class="fa fa-user thm-clr"></i>
                      <a href="#" title="" itemprop="url">
                        Hemanth R Shankar
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="blg-dtl-desc">
                  <p itemprop="description">
                    The world has been in the gripping claws of the COVID-19 virus for quite a while now. This has made a major impact in the lives of every human on Earth and India is one of the chief victims at this time. In the midst of this fight against the Coronavirus, Let’s Be The Change teamed up with BBMP to provide assistance for the Home Quarantine Watch, through the Quarantine Watch app.
                  </p>
                  <p itemprop="description">
                    About Home Quarantine Watch App –
                    Quarantine Watch App is an application used to monitor individuals who are situated at home, and are meant to be in Home Quarantine. For example, the individuals who travelled to Bengaluru from other states are put on the list in the app, so as to notify that they are from a different state, and should be in Self Quarantine.

                  </p>
                  <p itemprop="description">
                    We were a team of about 15 volunteers, divided into 3 groups - each led by a experienced volunteer - and proceeded to contact the people who were supposed to remain in Self-Quarantine to make sure they broke no rules, in order to maintain safety. That is to say, the person to be called was listed either as a person who has travelled to Bengaluru from another state, or was a Primary Contact of a COVID-positive patient. Each volunteer had a target of 20 calls a day. This process was, as expected, not simple. There were many problems such as the person in question being contacted multiple times, the contacted person not having travelled to Bengaluru at all, the contacted person being suspicious of how the caller obtained their contact info; and many other such problems. We, as the volunteers, were required to tackle each problem with patience, and had to make sure that we were of assistance to the person on the other line. This was a task that not many people could pull off, but the volunteers who took up the challenge passed this test with flying colours.
                  </p>
                  <p itemprop="description">
                    The Team of Volunteers consisted of a wide variety of people, from college students and interns to men and women in their 50s – all with one goal in their minds: to help fight against the wave of the Coronavirus Pandemic.
                    In light of this, we had one of the volunteers, Gouthami, whose contribution in this activity was Tremendous, comment on her experience. And this was her reply:

                  </p>
                  <p itemprop="description">
                    “There is a meme trending these days, wherein the audio says ‘Ever wonder what's going on in their minds?’ That was the Home Quarantine Watch for me.
                  </p>

                  <p itemprop="description">
                    We came across people with diversifying jobs and backgrounds, such as medical students who came back to their work places from native lands, army officers who came back to stay with their families but were called back and even a few who had no idea what was happening - which led to panic and anger. Having to communicate with strangers who we had no idea about, having to stay calm and polite irrespective of what their reaction was - that's how we'd go on with the tasks assigned to us.
                  </p>

                  <p itemprop="description">
                    And by this I'd conclude: we definitely do not know what goes on in their lives so I'd say I learnt to be kind, as it doesn't cost even a single penny.”                  </p>

                  <p itemprop="description">
                    And in the words of another valuable volunteer, Nachiket,
                    “It was a little bit tedious. But the calls were what kept me going: the stories that each person had to share, their troubles and more. Though, not everyone was ready to share or talk. It was definitely a very good experience on the whole”
                  </p>

                  <p itemprop="description">
                    As one of the group leaders, I would comment on the job being one that broadened my vision on the handles of leading a team for a social cause. Being responsible for contacting people out of the blue, even if for a social cause, is not an easy task. But I was able to do so, due to the efforts shown by all the volunteers, as well as my fellow group leaders. This activity was something that makes us proud as citizens who contributed to a cause that would help control this lasting pandemic
                    </p>

                  <p itemprop="description">
                    All in all, as a Bengalurean, it was an absolutely enriching experience to participate in the Home Quarantine Watch Team as part of Let’s Be The Change. And we shall take up arms once again, whenever duty calls out to us. Let us make Bengaluru return to those glorious days once again!
                    </p>

                  <p itemprop="description">
                    Let’s Go, Namma Bengaluru!                    </p>

                  <br />
                  <div class="gallery">
                    <div class="row">
                      <div class="col-md-12 col-sm-12 col-lg-12"></div>
                    </div>
                  </div>
                </div>
                <div class="athr-bx">
                  <img
                    src={require("../blog/Images/Authors/Hemanth.png")}
                    alt="athr-img1-1.jpg"
                    itemprop="image"
                  />
                  <div class="athr-inf">
                    <h4 itemprop="headline">About Author</h4>
                    <p itemprop="description">
                      Hemanth is an Intern working at Let's Be The Change.
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
                        href="https://www.instagram.com/avinoxxofficial/"
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
                  <DisqusComments7></DisqusComments7>
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
export default BlogDetails7;
