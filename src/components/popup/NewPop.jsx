import React, { useEffect, useState } from "react";
import "./popup.css";
import "reactjs-popup/dist/index.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { firestore } from "../../services/firebase";

function NewPop() {
  const [Buttonpopup, setButtonpopup] = useState(true);
  const [raisedper, setraisedper] = useState(6);
  const [raised, setraised] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      await firestore
        .collection("/DonationValue")
        .onSnapshot(async (snapshot) => {
          if (isMounted) {
            setraised(0);
          }
          snapshot.forEach((snap) => {
            if (snap.exists) {
              if (isMounted) {
                let tempData = snap.data();
                let finalTemp = tempData.value;
                setraised(finalTemp);
                let val = Number(((raised / 3700000) * 100).toFixed(1));
                setraisedper(val);
                console.log(raisedper);
                console.log("success");
              }
            }
          });
        });
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return Buttonpopup ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setButtonpopup(false)}>
          X
        </button>
        <div className="content">
          <h1 className="title">Newsletter</h1>
          <h5>
            We are super excited to share updates about all our ongoing and
            upcoming projects with you
          </h5>
          {/* <h6>
            Register Now for your Locality!
          </h6> */}
          {/* <br />
          The aim of the project is to provide emergency oxygen support for all the 10K Vulnerable Families in all the 6 urban poor settlements, where we are conducting 'Covid19 Relief Project' from the past 8 months in association with Azim Premji Foundation (APF), BBMP & Govt. of Karnataka.
          <br /> */}
          {/* <br /> */}
          {/* <div class="bar">
            <h5>
              ₹{raised.toLocaleString("en-IN")} raised of ₹37,00,000 goal{" "}
            </h5>
            <Progress
              strokeWidth={8}
              percent={Number(((raised / 3700000) * 100).toFixed(1))}
              theme={{
                active: {
                  color: "#2daf5a",
                },
              }}
            />
          </div> */}

          <br />
          <a
            class="thm-btn yellowcolor"
            href="/newsletters"
            title=""
            itemprop="url"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Check it Out!!
          </a>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default NewPop;
