import React from 'react';
import '../HeaderBar/headerbar.min.scss';

function HeaderBar() {
    return (
      <div
        className="tpbr flex headerbarfix mobilenodisplay"
        style={{
          margin: "0",
          padding: "0",
          width: "100%",
          backgroundColor: "black",
          textAlign: "center"
        }}
      >
        <div className="container">
          <div className="tpbr-inr">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-12 col-lg-6">
                <p itemprop="description">
                  <i className="flaticon-error thm-clr"></i>
                  <strong>Crisis Watch:</strong> Covid-19 In India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HeaderBar;