import React, { useEffect, useState } from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import "../../components/HeaderBar/headerbar.min.scss";
import { Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import "./signupform.min.scss";
import { firestore } from "../../services/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FooterMain } from "../../components/FooterMain/FooterMain";

const SignUpForm = () => {
  const [Name, setName] = useState("");
  const [TypeValue, setTypeValue] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const [idx, setidx] = useState(0);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function getTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
      min = "0" + min;
    }
    var ampm = "am";
    if (hr > 12) {
      hr -= 12;
      ampm = "pm";
    }
    var final = hr + ":" + min + " " + ampm;
    return final;
  }

  function getDate() {
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var final = date + "/" + month + "/" + year;
    return final;
  }

  function getValue() {
    const docRef = firestore.collection("FormValue").doc("Contact");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let data = doc.data();
          let val = data.id;
          console.log("Document data:", val);
          setidx(val);
          setNewValue(val);
        } else {
          // doc.data() will be undefined in this case

          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }

  useEffect(() => {
    const docRef = firestore.collection("FormValue").doc("Contact");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let data = doc.data();
          let val = data.id;
          console.log("Document data:", val);
          setidx(val);
          setNewValue(val);
        } else {
          // doc.data() will be undefined in this case

          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  });

  function setNewValue(newval) {
    newval = newval + 1;
    firestore
      .collection("FormValue")
      .doc("Contact")
      .update({
        id: newval,
      })
      .then(() => {
        console.log("updated!");
      });
  }

  const handleSubmit = async (event) => {
    var MainTime = getTime();
    var date = getDate();

    event.preventDefault();
    await firestore
      .collection("SignUpForm")
      .add({
        TypeValue: TypeValue,
        Name: Name,
        PhoneNumber: PhoneNumber,
        Email: Email,
        Subject: Subject,
        Message: Message,
        curTime: MainTime,
        curDate: date,
        formid: idx,
      })
      .then(() => {
        toast.success("Thank You! We'll Get Back To You Soon", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTypeValue("");
        setPhoneNumber("");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Error! ", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBarX></MenuBarX>
        <MenuBar></MenuBar>
        <section>
          <div class="block no-padding aboutpaddingnotreqd">
            <div class="pg-tp-bg">
              <img
                src={require("../aboutus/AboutUs-Main-3.jpg")}
                alt="About Pic"
              />
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
                <li class="breadcrumb-item active">Sign Up Form</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div class="block nocontactpadding">
            <div class="container">
              <div class="cnt-wrp">
                <div class="row">
                  <div class="col-md-8 col-sm-12 col-lg-8">
                    <div
                      class="cnt-inr"
                      style={{
                        backgroundImage:
                          "url(../../assets/images/pattern-bg2.png)",
                      }}
                    >
                      <h2 itemprop="headline">
                        Hello, <span class="thm-clr contactheadingsmall"></span>
                      </h2>
                      {/* <div>
                                                <span style={{ color: "white", background: "#00c664", borderRadius: "5px", padding: "5px" }}>Thank You! We'll Get Back To You Soon</span>
                                            </div> */}
                      <p itemprop="description">
                        {/* Want to bring in change? Join hands with us to make a difference. */}
                      </p>
                      <form
                        class="cnt-frm"
                        onSubmit={handleSubmit}
                        method="post"
                      >
                        <div class="row mrg10">
                          <div class="col-md-6 col-sm-6 col-lg-6">
                            <select
                              style={{
                                padding: "19.36px 30px",
                                margin: "0px 0px 10px",
                                width: "270px",
                                background: "#FFFFFF",
                              }}
                              type="text"
                              placeholder="Select a Option"
                              required
                              value={TypeValue}
                              onChange={(e) => setTypeValue(e.target.value)}
                            >
                              <option value="Select a Option">
                                Select a Option
                              </option>
                              <option value="Volunteer">Volunteer</option>
                              <option value="Partner">Partner/Supporter</option>
                              <option value="Report a Problem">
                                Report a Problem
                              </option>
                            </select>
                          </div>
                          <div class="col-md-6 col-sm-6 col-lg-6">
                            <input
                              type="text"
                              placeholder="Name"
                              required
                              value={Name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div class="col-md-6 col-sm-6 col-lg-6">
                            <input
                              type="phone"
                              placeholder="Phone Number"
                              required
                              value={PhoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                          </div>
                          <div class="col-md-6 col-sm-6 col-lg-6">
                            <input
                              type="email"
                              placeholder="Email Address"
                              required
                              value={Email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div class="col-md-12 col-sm-12 col-lg-12">
                            <input
                              type="text"
                              placeholder="Subject"
                              required
                              value={Subject}
                              onChange={(e) => setSubject(e.target.value)}
                            />
                          </div>
                          <div class="col-md-12 col-sm-12 col-lg-12">
                            <textarea
                              placeholder="Message"
                              required
                              value={Message}
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                          </div>
                          <div class="col-md-12 col-sm-12 col-lg-12">
                            <button class="thm-btn" type="submit">
                              Send Message<span></span>
                            </button>
                            <ToastContainer
                              position="bottom-right"
                              autoClose={5000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-12 col-lg-4 contactblueboxpadding">
                    <div class="cnt-inf thm-layer opc9 ">
                      <div
                        class="fixed-bg patern-bg thm-bg back-blend-multiply"
                        style={{
                          backgroundImage:
                            "url(../../assets/images/pattern-bg1.jpg",
                        }}
                      ></div>
                      <p itemprop="description">
                        <span>
                          <i className="fa fa-home"></i>{" "}
                        </span>
                        <a href="https://www.google.com/maps?ll=12.928404,77.528416&z=12&t=m&hl=en-US&gl=IN&mapclient=embed&saddr&daddr=Let%27s+Be+The+Change,+25th+Main+Road,+1062,+15th+Cross+Rd,+Banashankari+Stage+II,+Bengaluru,+Karnataka+560070&dirflg=d">
                          No. 1062, 15th Cross Rd, 25th Main Rd, BSK II Stage,
                          Bengaluru-70
                        </a>
                      </p>
                      <ul class="cnt-inf-lst">
                        <li>
                          <span>
                            <i className="fa fa-envelope"></i>
                          </span>
                          <a
                            className="mailfontsmall"
                            href="mailto:contact@letsbethechange.in"
                            title=""
                            itemprop="url"
                          >
                            contact@letsbethechange.in
                          </a>
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-phone"></i>
                          </span>
                          <a href="tel:+919353218818">+91 93532 18818</a>
                        </li>
                        {/* <li>
                          <span>F:</span>(55) 1234-56789
                        </li> */}
                      </ul>
                      <div class="cnt-scl">
                        <a
                          class="facebook"
                          href="https://www.facebook.com/TeamLBTC/"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                          without
                          rel="noopener noreferrer"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                        {/* <a
                          class="pinterest"
                          href="#"
                          title="Pinterest"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fa fa-pinterest-p"></i>
                        </a> */}
                        <a
                          class="twitter"
                          href="https://twitter.com/TeamLBTC"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                          without
                          rel="noopener noreferrer"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a
                          class="instagram"
                          href="https://www.instagram.com/team_lbtc/"
                          title="Instagram"
                          itemprop="url"
                          target="_blank"
                          without
                          rel="noopener noreferrer"
                        >
                          <i class="fa fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div class="cnt-mp" id="cnt-mp"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterMain></FooterMain>
      </main>
    </div>
  );
};
export default SignUpForm;
