import React from "react";
import "./Dashboard.css";
import profile_Image from "../Assets/assets/IMG_7963.jpg";
import I_icon from "../Assets/assets/734395_instagram_media_online_photo_social_icon.png";
import L_icon from "../Assets/assets/1221588_logo_media_social_whatsapp_icon.png";
import W_icon from "../Assets/assets/icons8-whatsapp-24.png";
import G_icon from "../Assets/assets/github-logo.png";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import "@fontsource/merriweather";
import "@fontsource/source-code-pro";
import "@fontsource/lora";

const Dashboard = () => {
  function getBrowserDetails() {
    const dataArr = ["JERIN", "JACK"];
    const num = Math.floor(Math.random() * dataArr.length);
    return dataArr[num];
  }

  function getcolor(){
    const color=["White","Light Gray","Silver","#00FFFF","#EE82EE"];
    const num = Math.floor(Math.random() * color.length);
    return color[num];
  }


  function getFontStyle() {
    const fontStyle = ["italic"];
    const num = Math.floor(Math.random() * fontStyle.length);
    return fontStyle[num];
  }

  function giveAccess() {
    const getName = getBrowserDetails();
    let res; 
    if (getName == "unknown") {
      res = "you dont have the access please fix the name";
    } else {
      res = getName;
    }

    return res;
  }
  const year = new Date();

  const handleClick= (e) =>{
    console.log(e.target.innerText);
  }


  const handleClick2= (name) =>{
    console.log(`thank you ${name}`);
  }


  return (
    <>
      <header className="header">
        <div className="profile">
          <img className="profile-img" src={profile_Image} />
          <h1 style={{color: getcolor(),
          fontStyle: getFontStyle()
          }}>Hii {giveAccess()}</h1>
        </div>
        <nav>
          <ul className="nav-items">
            <li>
              <a className="nav-items-item"  onClick={(e)=>handleClick(e)}>
                HOME
              </a>
            </li>
            <li>
              <a className="nav-items-item" onDoubleClick={() => handleClick2("jack")} >
                SKILS
              </a>
            </li>
            <li>
              <a className="nav-items-item" href="skill">
                PROJECTS
              </a>
            </li>
            <li>
              <a className="nav-items-item" href="skill">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>  
      </header>
      <main className="main">
        <div className="main-content">
          <h1>HEY, I'M JERIN</h1>
          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
              paddingTop: "30px"
            }}
          >
            A Result-Oriented Web Developer building and managing Websites and
            Web <br/>Applications that leads to the success of the overall product
          </p>
          <a className="project-button">PROJECTS</a>
        </div>
        <div className="social-media-nav">
          <a className="social-media-nav-icon"><img  src={I_icon} /></a>
          <a className="social-media-nav-icon"><img src={L_icon} /></a>
          <a className="social-media-nav-icon"><img src={W_icon} /></a>
          <a className="social-media-nav-icon"><img src={G_icon} /></a>
        </div>
      </main>
      <footer className="footer">
        <a>Copyright &copy; {year.getFullYear()}</a>
      </footer>
    </>
  );
};

export default Dashboard;
