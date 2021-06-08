import React, { useState } from "react";
import "./popup.css";
import "reactjs-popup/dist/index.css";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import axios from 'axios';
import qs from 'qs';

function NewPop() {
  const [Buttonpopup, setButtonpopup] = useState(true);
  const [raisedval, setraisedval] = useState(1387553);
  const [raisedper, setraisedper] = useState(6);
  
 
  let val = 6;
  axios.get('https://ketto.org/api/fundraisers/westandtogether-oxygen-support-for-10k-vulnerable-families/raised?currency=INR')
    .then(res => {
      console.clear();
      console.log("success")
      if(res.error === "false")
      {
        setraisedval(res.data.raised.raised)
        val = Number(((raisedval/3700000)*100).toFixed(1));
        setraisedper(val)
      }
    })
    .catch(err => {
      // console.clear();
      console.log(err)
      console.log("error")
      val = Number(((raisedval/3700000)*100).toFixed(1));
      setraisedper(val)
    })
  

  return Buttonpopup ? (
    
    <div className="popup" >
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setButtonpopup(false)}>
          X
        </button>
        <div className="content">
          <h2>#WeStandTogether</h2>
          <h3>
            Join our campaign on Ketto to contribute in helping 10000+ vulnerable families in Bangalore as a part of our COVID-19 Relief Project.
          </h3>
          {/* <br />
          The aim of the project is to provide emergency oxygen support for all the 10K Vulnerable Families in all the 6 urban poor settlements, where we are conducting 'Covid19 Relief Project' from the past 8 months in association with Azim Premji Foundation (APF), BBMP & Govt. of Karnataka.
          <br /> */}
          <br />
          <div class="bar">
            <h5>₹{raisedval.toLocaleString('en-IN')} raised of ₹37,00,000 goal </h5>
            <Progress 
              strokeWidth={8}
              percent={raisedper}
              theme={{
                active: {
                  color: '#2daf5a'
                },
              }}
            />
          </div>
          
          <br />
          <a class="thm-btn yellowcolor"
            href="https://www.ketto.org/fundraiser/westandtogether-oxygen-support-for-10k-vulnerable-families?payment=form"
            title=""
            itemprop="url"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default NewPop;