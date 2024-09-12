import React from "react";
import "./Dashboard.css";
import profile_Image from "../Assets/assets/IMG_7963.jpg";
import I_icon from "../Assets/assets/734395_instagram_media_online_photo_social_icon.png";
import W_icon from "../Assets/assets/1221588_logo_media_social_whatsapp_icon.png";
import L_icon from "../Assets/assets/linkedIn.png";
import G_icon from "../Assets/assets/github-logo.png";
import insta from "../Assets/assets/icons8-instagram.svg";
import wp from "../Assets/assets/icons8-whatsapp.svg";
import lin from "../Assets/assets/icons8-linkedin.svg";
import git from "../Assets/assets/icons8-github-48.png";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import "@fontsource/merriweather";
import "@fontsource/source-code-pro";
import "@fontsource/lora";
import { FaTrashAlt } from "react-icons/fa";

import { useState } from "react";

const Dashboard = () => {
  const [count, setCount] = useState(10);
  function getBrowserDetails() {
    const dataArr = ["JERIN", "JACK"];
    const num = Math.floor(Math.random() * dataArr.length);
    return dataArr[num];
  }

  function getcolor() {
    const color = ["White", "Light Gray", "Silver", "#00FFFF", "#EE82EE"];
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

  function increment() {
    setCount((count) => {
      return count + 1;
    });
    setCount((count) => {
      return count + 1;
    });
    setCount((count) => {
      return count + 1;
    });
    setCount((count) => {
      return count + 1;
    });
    setCount((count) => {
      return count + 1;
    });
  }

  function degrement() {
    setCount(count - 1);
  }
  const year = new Date();

  const handleClick = (e) => {
    console.log(e.target.innerText);
  };

  const handleClick2 = (name) => {
    console.log(`thank you ${name}`);
  };
  const arrayInt = [1, 2, 3, 4, 5];
  const mapA = arrayInt.filter((n) => n > 2).map((n) => ({ numbers: n }));
  console.log(mapA);

  const [user, setName] = useState([
    {
      id: 1,
      status: true,
      name: "jerin",
    },
    {
      id: 2,
      status: false,
      name: "jerin",
    },
    {
      id: 3,
      status: true,
      name: "jack",
    },
  ]);

  // const name1 = setName
  const handleCheck = (id) => {
    console.log(id);
    const userList = user.map((user) =>
      user.id === id ? { ...user, status: !user.status } : user
    );
    setName(userList);
  };

  const handleDelete = (id) => {
    console.log(id);
    // const userData = user.map((user) => 
    //  user.id ==id ? {}:user);

    const userData = user.filter((user)=> ( user.id !== id))
    setName(userData);
  };

  return (
    <>
      <header className="header">
        <div className="profile">
          <img className="profile-img" src={profile_Image}/>
          <h1>JERIN L</h1>
        </div>
        <nav>
          <ul className="nav-items">
            <li>
              <a className="nav-items-item" onClick={(e) => handleClick(e)}>
                HOME
              </a>
            </li>
            <li>
              <a
                className="nav-items-item"
                onDoubleClick={() => handleClick2("jack")}
              >
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
              paddingTop: "30px",
            }}
          >
            A Result-Oriented Web Developer building and managing Websites and
            Web <br />
            Applications that leads to the success of the overall product
          </p>
          <a className="project-button">PROJECTS</a>
        </div>
        <div className="social-media-nav">
          <a
            href="https://www.instagram.com/__jerin_jack___/"
            target="_blank"
            className="social-media-nav-icon"
          >
            <img src={I_icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/jerin-l-61762817a"
            target="_blank"
            className="social-media-nav-icon"
          >
            <img src={L_icon} />
          </a>
          <a
            href="https://wa.me/0000000000"
            target="_blank"
            className="social-media-nav-icon"
          >
            <img src={W_icon} />
          </a>
          <a
            href="https://github.com/JerinL"
            target="_blank"
            className="social-media-nav-icon"
          >
            <img src={G_icon} />
          </a>
        </div>
      </main>
      <main className="content-aboutme">
        <div className="aboutme-upper-content">
          <h2>ABOUT ME</h2>
          <span
            style={{
              height: "5px",
              backgroundColor: "black",
              width: "20px",
              borderRadius: "5px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          ></span>
          <span>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </div>
        <div className="about-content">
          <div className="about-content-main">
            <h3 className="content-head">Get to know me!</h3>
            <p className="content-paragraph">
              I'm a <b>Frontend Focused Web Developer</b> building and managing
              the Front-end of Websites and Web Applications that leads to the
              success of the overall product. Check out some of my work in the{" "}
              <b>Projects</b> section.
            </p>
            <p className="content-paragraph">
              I also like sharing content related to the stuff that I have
              learned over the years in <b>Web Development</b> so it can help
              other people of the Dev Community. Feel free to Connect or Follow
              me on my{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://www.linkedin.com/in/jerin-l-61762817a"
              >
                Linkedin
              </a>{" "}
              and{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://www.instagram.com/__jerin_jack___/"
              >
                Instagram
              </a>{" "}
              where I post useful content related to Web Development and
              Programming
            </p>
            <p className="content-paragraph">
              I'm open to <b>Job</b> opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don't hesitate to <b>contact</b> me.
            </p>
            <a className="project-button">CONTACT</a>
          </div>
          <div className="about-content-skills">
            <h3 className="content-head">My Skills</h3>
            <div className="skills-container">
              <div className="skills-container-skill">HTML</div>
              <div className="skills-container-skill">CSS</div>
              <div className="skills-container-skill">JavaScript</div>
              <div className="skills-container-skill">React</div>
              <div className="skills-container-skill">Wordpress</div>
              <div className="skills-container-skill">PHP</div>
              <div className="skills-container-skill">SASS</div>
              <div className="skills-container-skill">GIT</div>
              <div className="skills-container-skill">Github</div>
              <div className="skills-container-skill">Responsive Design</div>
              <div className="skills-container-skill">SEO</div>
              <div className="skills-container-skill">Terminal</div>
            </div>
          </div>
        </div>
      </main>
      <section className="contact-form-container">
        <h2 class="heading-sec">
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </h2>
        <div class="contact-form">
          <div class="contact__form-container">
            <form action="#" class="contact__form" method="post">
              <input type="hidden" name="form-name" value="form 1" />
              <div class="contact__form-field">
                <label class="contact__form-label" for="name">
                  Name
                </label>
                <input
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  class="contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div class="contact__form-field">
                <label class="contact__form-label" for="email">
                  Email
                </label>
                <input
                  required
                  placeholder="Enter Your Email"
                  type="email"
                  class="contact__form-input"
                  name="email"
                  id="email"
                />
              </div>
              <div class="contact__form-field">
                <label class="contact__form-label" for="message">
                  Message
                </label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  class="contact__form-input"
                  placeholder="Enter Your Message"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn--theme contact__btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="test">
        <ul>
          {user.map((users) => (
            <li className="user">
              <input
                type="checkbox"
                onChange={() => handleCheck(users.id)}
                checked={users.status}
              />
              <label>{users.name}</label>
              <FaTrashAlt
                role="button"
                onClick={() => handleDelete(users.id)}
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
        <button onClick={() => increment()}>+</button>
        <a>{count}</a>
        <button onClick={degrement}>-</button>
      </section>
      <footer className="footer">
        <div className="upper-footer">
          <div className="upper-footer-content">
            <h1 style={{ letterSpacing: "2px" }}>JERIN</h1>
            <p>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="lower-footer-content">
            <span style={{ paddingLeft: "3px" }}>SOCIAL</span>
            <div className="social-media-nav2">
              <a
                href="https://www.instagram.com/__jerin_jack___/"
                target="_blank"
                className="social-media-nav-icon2"
              >
                <img src={insta} />
              </a>
              {/* <a className="social-media-nav-icon2">
                <img src={} />
              </a> */}
              <a
                href="https://www.linkedin.com/in/jerin-l-61762817a"
                target="_blank"
                className="social-media-nav-icon2"
              >
                <img src={lin} />
              </a>
              {/* <a className="social-media-nav-icon2">
                <img src={git} />
              </a> */}
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <a>
            Copyright &copy; {year.getFullYear()}. made by{" "}
            <a href="http://localhost:3000/">jerin</a>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Dashboard;
