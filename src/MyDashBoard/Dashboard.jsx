import React from "react";
import "./Dashboard.css";
import profile_Image from "../Assets/assets/IMG_7963.jpg";
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

  console.log(year.getDate());
  return (
    <>
      <header className="header">
        <div className="profile">
          <img className="profile-img" src={profile_Image} />
          <h1>Hii {giveAccess()}</h1>
        </div>
        <nav>
          <ul className="nav-items">
            <li>
              <a className="nav-items-item" href="home">
                HOME
              </a>
            </li>
            <li>
              <a className="nav-items-item" href="skill">
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
          <div>I</div>
          <div>L</div>
          <div>W</div>
          <div>G</div>
        </div>
      </main>
      <footer className="footer">
        <a>Copyright &copy; {year.getFullYear()}</a>
      </footer>
    </>
  );
};

export default Dashboard;
