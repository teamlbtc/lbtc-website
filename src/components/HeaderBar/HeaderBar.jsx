import React from "react";
import "../HeaderBar/headerbar.min.scss";

function HeaderBar() {
  return (
    <div
      className="tpbr flex headerbarfix mobilenodisplay"
      style={{
        margin: "0",
        padding: "0",
        width: "100%",
        backgroundColor: "black",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div className="tpbr-inr">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-12 col-lg-6 headercolor">
              <p itemprop="description">
                <i className="flaticon-error thm-clr" style={{color:"#00C664"}}></i>
                <strong>Sign Me Up as A Volunteer : </strong>
                <a
                  href="https://letsbethechange.in/signupform"
                  title=""
                  itemprop="url"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:"#00C664"}}
                >
                  Click Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
