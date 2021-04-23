import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import "../blog/blog.min.scss";
import { Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import DisqusComments8 from "../../components/Disqus/DisqusComments8";

function BlogDetails8() {
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
                  src={require("../blog/Images/Blog2.jpg")}
                  alt="blg-dtl-img2-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="blog-dtl-wrp">
                <div class="blg-inf">
                  <span class="blg-dat thm-bg">
                    <a href="#" title="" itemprop="url">
                      September 1, 2020
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
                  <h1 itemprop="headline">ಬದಲಾಗಿ ಬದಲಾಗಿಸೋಣ,  ಸ್ವಚ್ಛ ಬೆಂಗಳೂರು ಕನಸನ್ನು ನನಸು ಮಾಡೋಣ!</h1>
                  <ul class="pst-mta">
                    <li>
                      <i class="fa fa-user thm-clr"></i>
                      <a href="#" title="" itemprop="url">
                        Avinaasha Shastry
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="blg-dtl-desc">
                  <p itemprop="description">
                    <strong>ಬದಲಾಗಿ ಬದಲಾಗಿಸೋಣ</strong> ಸಂಸ್ಥೆಯು 2013ರಲ್ಲಿ ಸ್ವಚ್ಛತೆ ಹಾಗೂ ಪರಿಸರ ಸಂರಕ್ಷಣೆಯ ಕುರಿತು ಜಾಗೃತಿ ಮೂಡಿಸಿ, ಅವಶ್ಯ ಬದಲಾವಣೆಗಳನ್ನು ಮೂಡಿಸುವ ಸಲುವಾಗಿ ಪ್ರಾರಂಭವಾಯಿತು. ಈ ಸಂಸ್ಥೆಯು ನಗರ ಪ್ರಾಂತ್ಯಗಳಲ್ಲಿ ಉತ್ಪಾದಿತವಾಗುವ ತ್ಯಾಜ್ಯವನ್ನು ಪರಿಸರಕ್ಕೆ ಹಾನಿಯಾಗದಂತೆ ವಿಲೇವಾರಿ ಮಾಡುವ ವಿಧಾನಗಳನ್ನು ಅಳವಡಿಸುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ. ವೈಯಕ್ತಿಕ, ಕೌಟುಂಬಿಕ ಹಾಗೂ ಸಾಮಾಜಿಕ ಪದರಗಳಲ್ಲಿ ಘನತ್ಯಾಜ್ಯ ವಿಂಗಡಣೆಯ ಪ್ರಾಮುಖ್ಯತೆಯನ್ನು ಜನಮಾನಸದಲ್ಲಿ ಮೂಡಿಸಿ, ಸಮಾಜವನ್ನು ಶೂನ್ಯ-ನೆಲಭರ್ತಿಯೆಡೆಗೆ ಒಯ್ಯುವ ದೂರದೃಷ್ಠಿಯನ್ನು ಹೊಂದಿದೆ.
                  </p>

                  <p itemprop="description">
                    ಒಂದು ಸಮುದಾಯದ ಸ್ವಚ್ಛತೆ ಅದೇ ಸಮಾಜದ ಕರ್ತವ್ಯವಾಗಿರುತ್ತದೆಯೆಂಬುದನ್ನು, ಹಾಗೂ ಆ ಸ್ವಚ್ಛತೆಯ ಮೂಲಸ್ವರೂಪವು ವೈಯಕ್ತಿಕವಾಗಿದೆಯೆಂಬ ಅರಿವು ಪ್ರತಿಯೊಬ್ಬರಲ್ಲೂ ಮೂಡಿಬರಲೇಬೇಕಾಗಿದೆ. ಜನರು ತಮ್ಮ ಸಾಮಾಜಿಕ ಕರ್ತವ್ಯವನ್ನು ಬಹು ವಿಧಗಳಿಂದ ಆಚರಿಸುತ್ತಾರೆ. ನಗರಗಳಲ್ಲಿ ಪ್ರಕೃತಿ ಸಂರಕ್ಷಣೆಯ ಕಾರ್ಯವನ್ನೀಯುವರಲ್ಲಿ ಗಿಡ-ಮರ-ಪ್ರಾಣಿ-ಪಕ್ಷಿ ಸಂರಕ್ಷಕರು ಹಾಗೂ ಪರಿಸರಕ್ಕಾಗುತ್ತಿರುವ ಹಾನಿಯನ್ನು ತಡೆಗಟ್ಟಲು ಹೋರಾಡುತ್ತಿರುವವರು ಎಂಬ ಎರಡು ಪ್ರಮುಖ ವಿಧಗಳನ್ನು ಕಾಣಬಹುದಾಗಿದೆ. ಪ್ರಸ್ತುತ ಘನತ್ಯಾಜ್ಯ ವಿಲೇವಾರಿಯ ಹಾನಿಗಳನ್ನು ತಡೆಗಟ್ಟಿ, ಹೊಸ ತಂತ್ರಗಳನ್ನು ಉಪಯೋಗಿಸಿ, ಸ್ವಚ್ಛತೆ ಹಾಗೂ ಪರಿಸರದ ಪ್ರಾಮುಖ್ಯತೆಯನ್ನು ಪಸರಿಸಲು ಇಚ್ಛಿಸುವ ಸಕಲರಿಗೂ ಒಂದು ಉನ್ನತ ವೇದಿಕೆಯಾಗಿ ಸಹಕರಿಸುತ್ತಿದೆ - ಟೀಂ-ಎಲ್‍ಬಿಟಿಸಿ(TeamLBTC). ನಾಗರೀಕರು ಇವರನ್ನು ಯಾವುದೇ ರೀತಿಯಾಗಿ ಸಂಪರ್ಕಿಸಿ ತಮ್ಮ ಬಡಾವಣೆಯ ದೂರುಗಳನ್ನು ದಾಖಲಿಸಬಹುದಾಗಿದೆ. ನಾವು ನೀಡುವ ದೂರುಗಳನ್ನು ನಾವೇ ಸ್ವತಃ ನಿಂತು ಪರಿಹರಿಸಲು ಸಂಪೂರ್ಣ ಬೆಂಬಲ, ಅವಶ್ಯಕ ವಸ್ತುಗಳು ಹಾಗೂ ಪರಿಪೂರ್ಣ ಪರಿಹಾರವನ್ನು ಸಂಸ್ಥೆಯೇ ನೀಡಿ ನಮ್ಮನ್ನು ಇನ್ನಷ್ಟು ಸೇವೆಗೈಯ್ಯಲು ಉತ್ತೇಜಿಸುತ್ತದೆ. ನಮಗೆ ಪರಿಹಾರೋಪಾಯಕ್ಕೆ ನೀಡಲು ಸಮಯವಿಲ್ಲ ಎಂಬುವವರೂ ಕೂಡ ತಮ್ಮ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆಯ ಕುರಿತು ದೂರನ್ನು ದಾಖಲಿಸಬಹುದಾಗಿದೆ.
                  </p>

                  <p itemprop="description">
                    ಕಸದ ರಾಶಿಗಳನ್ನು ಶುಚಿಗೊಳಿಸಿ ಆ ಜಾಗದ ಸೌಂದರ್ಯಾಭಿವೃದ್ಧಿಯನ್ನು ಮಾಡುವ 'ಕ್ಲೀನಥಾನ್(Cleanathon)' ಈ ಸಂಸ್ಥೆಯ ಒಂದು ಪ್ರಧಾನ ಕಾರ್ಯವಾಗಿದೆ. ಅಷ್ಟೇ ಅಲ್ಲದೆ ಎಲ್ಲಾ ನಾಗರೀಕರಲ್ಲಿಯೂ ಕಸ ವಿಂಗಡಣೆಯ ಬಗ್ಗೆ ಅರಿವು ಮೂಡಿಸಿ ಶೂನ್ಯ-ನೆಲಭರ್ತಿಯುತ ಬೆಂಗಳೂರನ್ನು ಚೇತನಗೊಳಿಸಲು ಪ್ಲಾಗ್ ರನ್(Plogrun), ಮನೆಯಲ್ಲಿಯೇ ಜೇಡಿಮಣ್ಣಿನ ಗಣೇಶ ತಯಾರಿಕೆ(Clay Ganapathi Making), ಮ್ಯೂಸಿಕಲ್ ಕ್ಲೀನಥಾನ್, ಎಸ್ ಡಬ್ಲ್ಯೂ ಎಮ್ ವೆಬಿನಾರ್‍ಗಳು(SWM Webinars) ಮತ್ತು ಇತರೆ ತರಹೇವಾರಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಬೆಂಗಳೂರು ನಗರದ ಎಲ್ಲ ಭಾಗಗಳಲ್ಲೂ ನಿರಂತರವಾಗಿ ನಡೆಸಿಕೊಂಡು ಮುನ್ನುಗ್ಗುತ್ತಿದೆ. ನಗರದ ಯಾವುದೇ ಭಾಗದ ಜನಸಾಮಾನ್ಯರೂ ಕೂಡ ತಮ್ಮ ಸುತ್ತಮುತ್ತಲಿನ ಪರಿಸರವನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲು ತಾವೇ ಪರಿಹಾರಕರಾಗಲು ಇರುವ ಉನ್ನತ ವೇದಿಕೆಗಳಲ್ಲಿ ಇದೂ ಒಂದಾಗಿದೆ ಎಂದು ಖಂಡಿತವಾಗಿಯೂ ಹೇಳಬಹುದು.
                  </p>

                  <p itemprop="description">
                    ನಾವು ನಮ್ಮ ಸುತ್ತಲಿನ ಪರಿಸರವನ್ನು ಸಮಾನಮನಸ್ಕರೊಂದಿಗೆ ಉಳಿಸಿಕೊಳ್ಳಲು ನಾವು ದಾಟಬೇಕಾದ ಎಲ್ಲಾ ಹಂತಗಳನ್ನು ನಮ್ಮೊಂದಿಗೆ ನಿಂತು ಪರಿಹಾರೋಪಾಯಗಳನ್ನು ಕೊಡುವ ಈ ತಂಡದೊಂದಿಗೆ ನಾಗರೀಕರು ತಮ್ಮ ತೊಂದರೆಗಳನ್ನು ಪರಿಹರಿಸಿಕೊಳ್ಳಲು ಪ್ರಾರಂಭಿಸಿದ್ದಾರೆ, ನೀವು ಬನ್ನಿ, ನಿಮ್ಮವರನ್ನು ಕರೆತನ್ನಿ, ಜೊತೆಯಾಗಿ ನಮ್ಮ ಪರಿಸರವನ್ನು ಉಳಿಸೋಣ, 'ಸ್ವಚ್ಛ ಬೆಂಗಳೂರು' ಕನಸನ್ನು ನನಸಾಗಿಸೋಣ.
                  </p>


                  <div class="gallery">
                    <div class="row">
                      <div class="col-md-12 col-sm-12 col-lg-12"></div>
                    </div>
                  </div>
                </div>
                <div class="athr-bx">
                  <img
                    src={require("../blog/Images/Authors/Avi.png")}
                    alt="athr-img1-1.jpg"
                    itemprop="image"
                  />
                  <div class="athr-inf">
                    <h4 itemprop="headline">About Author</h4>
                    <p itemprop="description">
                      Avinash is the Operations Manager at Let's Be The Change.
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
                  <DisqusComments8></DisqusComments8>
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
export default BlogDetails8;
