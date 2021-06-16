import React from "react";
import "../OurTeam/ourteam.min.scss";
import ProfileCard from "./ProfileCard";
import First from "../../assets/images/Our Team/Anirudh.jpg";
import Avinash from "../../assets/images/Our Team/Avinash.jpg";
import Hemanth from "../../assets/images/Our Team/Hemanth.jpg";
import Adithya from "../../assets/images/Our Team/Adi.jpg";
import Karthik from "../../assets/images/Our Team/Karthik.jpg";

import Vatsa from "../../assets/images/Our Team/Vatsa.jpg";
import Rahul from "../../assets/images/Our Team/Rahul.jpg";
import Srinidhi from "../../assets/images/Our Team/Srinidhi.jpg";
import Vinay from "../../assets/images/Our Team/Vinay.jpg";
import Second from "../../assets/images/Our Team/Prajwal.jpg";
import Fourth from "../../assets/images/Our Team/Vyshak.jpg";
import Fifth from "../../assets/images/Our Team/Amar.jpg";
import Sixth from "../../assets/images/Our Team/Nidish.jpg";
import Seventh from "../../assets/images/Our Team/Lohit.jpg";
import Ninth from "../../assets/images/Our Team/Yoshita.jpg";
import Tenth from "../../assets/images/Our Team/Bhuvan.jpg";
import YashVikas from "../../assets/images/Our Team/YashVikas.png";
import Eleventh from "../../assets/images/Our Team/Niranjan.jpg";
import Twelveth from "../../assets/images/Our Team/Sharan.jpg";
import Anuja from "../../assets/images/Our Team/Anuja.jpg"
import Shashini from "../../assets/images/Our Team/Shashini.jpg"
import Teja from "../../assets/images/Our Team/Teja.jpg"
import VinayM from "../../assets/images/Our Team/VinayM.png"
function OurTeam(){
  

  const ourteamdata = [
    {
      name:"Anirudh S Dutt", 
      designation:"Founder, CEO",
      facebooklink:"https://www.instagram.com/dutt_anirudh/",
      linkedinlink:"https://www.linkedin.com/in/dutt-anirudh/",
      twitterlink:"mailto:anirudh@letsbethechange.in",
      photo: First
    },
    {
      name:"Hemanth R Shankar",
      designation: "Intern, Operations",
      facebooklink: "https://www.instagram.com/avinoxxofficial/",
      //linkedinlink: "#",
      //twitterlink: "mailto:hemanth@letsbethechange.in",
      photo: Hemanth
    },
    {
      name: "Anuja T K",
      designation: "Jr Associate, Operations",
      // facebooklink: "",
      linkedinlink: "https://www.linkedin.com/in/anu-anuja-/",
      // twitterlink: "https://twitter.com/i_anu_14?s=08",
      photo: Anuja
    },
    {
      name: "Teja Jangam",
      designation: "Jr Associate, Operations",
      facebooklink: "https://www.instagram.com/_tejaraj_/?r=nametag",
      linkedinlink: "https://www.linkedin.com/in/teja-jangam-0a35331ba",
      //twitterlink: "mailto:karthik@letsbethechange.in",
      photo: Teja
    },
    {
      name: "Shashini H S",
      designation: "Sr Associate, Operations",
      // facebooklink: "",
      linkedinlink: "https://www.linkedin.com/in/shashini-h-s-513579132/",
      //twitterlink: "mailto:karthik@letsbethechange.in",
      photo: Shashini
    },
    {
      name: "Vinay M",
      designation: "Intern, Tech",
      // facebooklink: "",
      linkedinlink: "https://www.linkedin.com/in/vinay-m-0451201a1/",
      //twitterlink: "mailto:karthik@letsbethechange.in",
      photo: VinayM
    },
  ]
  const governingdata =[
    {
      name: "Prajwal GV",
      designation: "Strategy & Re-Engineering",
      facebooklink: "https://www.instagram.com/prajwalgvredforever/",
      linkedinlink: "https://www.linkedin.com/in/prajwal-g-v/",
      //twitterlink: "mailto:prajwal@letsbethechange.in",
      photo: Second
    },
    {
      name: "Srivatsa Gargesh",
      designation: "Quality",
      facebooklink: "https://www.instagram.com/vatsa07/",
      linkedinlink: "https://www.linkedin.com/in/srivatsa-gargesh-b3398518b/",
      //twitterlink: "mailto:srivatsa@letsbethechange.in",
      photo: Vatsa
    },
    {
      name: "Vyshak Iyengar",
      designation: "Strategy & Growth",
      facebooklink: "https://www.instagram.com/vyshak_iyengar/",
      linkedinlink: "https://www.linkedin.com/in/vyshakiyengar/",
      //twitterlink: "mailto:vyshak@letsbethechange.in",
      photo: Fourth
    },
    {
      name: "Amar Prabhu",
      designation: "Strategy & Growth",
      facebooklink: "https://www.instagram.com/amar_prabhu/",
      linkedinlink: "https://www.linkedin.com/in/amar-prabhu/",
      //twitterlink: "mailto:amar@letsbethechange.in",
      photo: Fifth
    },
    {
      name: "Nidish Kudwalli",
      designation: "Operations",
      facebooklink: "https://www.instagram.com/arachnid_27/",
      linkedinlink: "https://www.linkedin.com/in/nidhish-kudwalli-a43466129/",
      //twitterlink: "mailto:nidhish@letsbethechange.in",
      photo: Sixth
    },
    {
      name: "Vinay S Vasist",
      designation: "Technical",
      facebooklink: "https://www.instagram.com/thevvasist/",
      linkedinlink: "https://www.linkedin.com/in/vinayvasist/",
      //twitterlink: "mailto:vinay@letsbethechange.in",
      photo: Vinay
    },
    {
      name: "Lohit BN",
      designation: "Quality",
      facebooklink: "https://www.instagram.com/_loh1t_/",
      linkedinlink: "https://www.linkedin.com/in/lohit-bn-87a52a13b/",
      //twitterlink: "mailto:lohit@letsbethechange.in",
      photo: Seventh
    },
    {
      name: "Yoshita Ramesh",
      designation: "Design & Planning",
      facebooklink: "https://www.instagram.com/yoshita.ramesh/",
      linkedinlink: "https://www.linkedin.com/in/yoshita-ramesh-9414b8104/",
      //twitterlink: "mailto:yoshita@letsbethechange.in",
      photo: Ninth
    },
    {
      name: "Bhuvan Surya Purushothama BN",
      designation: "Technical",
      facebooklink: "https://www.instagram.com/kathegaaara/",
      linkedinlink: "https://www.linkedin.com/in/bhuvan-nagaraj/",
      //twitterlink: "mailto:bhuvan@letsbethechange.in",
      photo: Tenth
    },
    {
      name: "Rahul Anand",
      designation: "Operations",
      facebooklink: "https://www.instagram.com/rahulsubhu/",
      linkedinlink: "https://www.linkedin.com/in/03-rahulanand/",
      //twitterlink: "mailto:rahul@letsbethechange.in",
      photo: Rahul
    },
    {
      name: "Srinidhi Chandra",
      designation: "Operations",
      facebooklink: "https://www.instagram.com/shindi_96/",
      linkedinlink: "https://www.linkedin.com/in/srinidhi-chandra-4aa42515b/",
      //twitterlink: "mailto:srinidhi@letsbethechange.in",
      photo: Srinidhi
    },
    {
      name:"Avinash N Shastry",
      designation: "Manager, Operations",
      facebooklink: "https://www.instagram.com/avinaasha.shastry/",
      //linkedinlink: "#",
      twitterlink: "mailto:avinash@letsbethechange.in",
      photo: Avinash
    }
  ]
  const youthteamdata = [
    {
      name: "Niranjan Muralidhar",
      // designation: "#",
      facebooklink: "https://www.instagram.com/niranjan_muralidhar/",
      // linkedinlink: "#",
      // twitterlink: "#",
      photo: Eleventh
    },
    {
      name: "Yash Vikas",
      designation: "",
      facebooklink: "https://www.instagram.com/yashvikas_/",
      linkedinlink: "",
      twitterlink: "",
      photo: YashVikas
    },
    {
      name: "Sharan",
      // designation: "#",
      // facebooklink: "#",
      // linkedinlink: "#",
      // twitterlink: "#",
      photo: Twelveth
    },
    // {
    //   name: "Anagha",
    //   designation: "",
    //   facebooklink: "",
    //   linkedinlink: "",
    //   twitterlink: "",
    //   photo: Twelveth
    // }
  ]
    return (
      <section>
        <div className="block">
          <div className="container">
            <div className="sec-ttl text-center">
              <div className="sec-ttl-inr">
                <h2 className="smolfontsize" itemprop="headline">Team</h2>
                {/* <span>Our Main Team</span> */}
                <i className="flaticon-sweat thm-clr"></i>
              </div>
            </div>
            <div className="tem-wrp text-center remove-ext4">
              <div className="row">
                {
                  ourteamdata.map((member)=> (
                  <div className="col-md-3 col-sm-3 col-lg-3">
                    <ProfileCard person={member}></ProfileCard>
                  </div>
                  ))
                }
              </div>
            </div>
          </div>
          {/* Core Team Ends ✅*/}

          <div className="container youthteampad">
            <div className="sec-ttl text-center">
              <div className="sec-ttl-inr">
                <h2 className="smolfontsize" itemprop="headline">Governing Council</h2>
                {/* <span>Our Governing Members</span> */}
                <i className="flaticon-sweat thm-clr"></i>
              </div>
            </div>
            <div className="tem-wrp text-center remove-ext4">
              <div className="row">
                {
                  governingdata.map((member) => (
                    <div className="col-md-3 col-sm-3 col-lg-3">
                      <ProfileCard person={member}></ProfileCard>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          {/* Youth Team Starts ✅*/}
          <div className="container youthteampad">
            <div className="sec-ttl text-center">
              <div className="sec-ttl-inr">
                <h2 className="smolfontsize" itemprop="headline">Youth Team</h2>
                {/* <span>Our Youth Wing</span> */}
                <i className="flaticon-sweat thm-clr"></i>
              </div>
            </div>
            <div className="tem-wrp text-center remove-ext4">
              <div className="row">
                {
                  youthteamdata.map((member) => (
                    <div className="col-md-3 col-sm-3 col-lg-3">
                      <ProfileCard person={member}></ProfileCard>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="container youthteampad">
            <div className="sec-ttl text-center">
              <div className="sec-ttl-inr">
                <h2 className="smolfontsize" itemprop="headline">Core Volunteers</h2>
                {/* <span>Our Youth Wing</span> */}
                <i className="flaticon-sweat thm-clr"></i>
              </div>
            </div>
            <div className="tem-wrp text-center remove-ext4">
              <div className="row">

                    <div className="col-md-12 col-sm-12 col-lg-12">
                  <img
                    src={require("../../assets/images/CoreTeam.JPG")}
                    alt="Core-Team.jpg"
                    itemprop="image"
                  />
                    </div>

              </div>
            </div>
          </div>
        </div>
        
      </section> 
  ); 
}

export default OurTeam;
