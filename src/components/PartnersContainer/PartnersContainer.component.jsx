import React from "react";
import Partners from "../Partners/Partners";
import First from "../PartnersContainer/PartnerImages/lbtc-britannia.png";
import Second from "../PartnersContainer/PartnerImages/lbtc-dell.png";
import Third from "../PartnersContainer/PartnerImages/lbtc-allergan.png";
import Fifth from "../PartnersContainer/PartnerImages/lbtc-herman.png";
import Sixth from "../PartnersContainer/PartnerImages/lbtc-bbn.png";
import Seventh from "../PartnersContainer/PartnerImages/lbtc-jyoti.png";
import Eighth from "../PartnersContainer/PartnerImages/lbtc-infosys.png";
import Ninth from "../PartnersContainer/PartnerImages/lbtc-st-jhones.png";
import Tenth from "../PartnersContainer/PartnerImages/azim-prem.png"
import { Link } from "react-router-dom";

const PartnersContainer = () => {
  const partners = [
    {
      imgSrc: First,
    },
    {
      imgSrc: Second,
    },
    {
      imgSrc: Third,
    },
    // {
    //   imgSrc: Fourth,
    // },
    {
      imgSrc: Fifth,
    },
    {
      imgSrc: Sixth,
    },
    {
      imgSrc: Seventh,
    },
    {
      imgSrc: Eighth,
    },
    {
      imgSrc: Ninth,
    },
    {
      imgSrc: Tenth,
    },
  ];
  return (
    <section>
      <div className="block">
        <div className="container">
          <div className="sec-ttl v2 text-center">
            <div className="sec-ttl-inr">
              <h2 itemprop="headline">Our Supporters</h2>
              <span>
                Here we present you all our supporters whose contribution has
                helped us achieve our objectives and mission of enhancing
                cleanliness
              </span>
            </div>
          </div>
          <div className="orgn-wrp2 remove-ext3 text-center">
            <div className="row">
              {partners.map((partner) => {
                return <Partners imgSrc={partner.imgSrc}></Partners>;
              })}
            </div>
          </div>
          <Link
            to="/form"
            className="thm-btn"
            style={{ textDecoration: "none" }}
          >
            Become Our Supporter<span></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersContainer;
