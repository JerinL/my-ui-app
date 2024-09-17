import React, { useCallback } from "react";
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
import { useEffect } from "react";

import { useState } from "react";
import UserList from "../UserList";
import AddItem from "../AddItem/AddItem";
import SearchForm from "../SearchForm";
import ProfileComponent from "../ProfileComponent";

const Dashboard = ({ user, setName, handleAdd, handleCheck, handleDelete }) => {

  const [search,setSearch] = useState('');
  const [count, setCount] = useState(10);
  const [userData,setUserData] =useState([]);
  const [error,setError] = useState('');
  const API_URL = "http://localhost:8080/user";


  useEffect(() =>{
    const fetchItems = async () =>{
      try{
        const response = await fetch(API_URL);
        if(!response.ok){
          throw Error("Data Not Recived");
        }
        console.log(response)
        const userList = await response.json();
        console.log(userList)
        setUserData(userList);
      } catch (err){
        console.log(err)
        await setError(err.message);
      }
    }
    (async () => await fetchItems())()
  },[]);

  useEffect(() => {
    console.log(error);
  }, [error]);


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

  useEffect(() => {
    console.log("Rendering");
  })

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
   // console.log(e.target.innerText);
  };

  const handleClick2 = (name) => {
   // console.log(`thank you ${name}`);
  };
  const arrayInt = [1, 2, 3, 4, 5];
  const mapA = arrayInt.filter((n) => n > 2).map((n) => ({ numbers: n }));
  //console.log(mapA);

  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewUser();
    setNewItem('');
   // console.log(newItem);
  };

  const addNewUser = () => {
    const newUser = {
      id: user ? user.length + 1 : 1,
      status: false,
      name: newItem,
    };
    // const addUser = [(user ? ...user :null),newUser];
    const addUser = [...(user || []), newUser];
    setName(addUser);
    localStorage.setItem("user", JSON.stringify(addUser));
  };

  const downloadResume = ()=>{
    const link = document.createElement('a');
    link.href  = "Jerin L(JavaDeveloper) (1).pdf"
    link.download ="jerin(Software Developer).pdf"
    document.body.append(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
    <div className="header1">
    <header className="header">
        <div className="profile">
          <img className="profile-img" src={profile_Image} />
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

    </div>
      
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
          <div className="button-container">
          <a className="project-button">PROJECTS</a>
          <a className="project-button" onClick={() => downloadResume()}>GET RESUME</a>
          </div>
          
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
        <h2 className="heading-sec">
          <span className="heading-sec__main heading-sec__main--lt">
            Contact
          </span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </h2>
        <div className="contact-form">
          <div className="contact__form-container">
            <form action="#" className="contact__form" method="post">
              <input type="hidden" name="form-name" value="form 1" />
              <div className="contact__form-field">
                <label className="contact__form-label" for="name">
                  Name
                </label>
                <input
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  className="contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" for="email">
                  Email
                </label>
                <input
                  required
                  placeholder="Enter Your Email"
                  type="email"
                  className="contact__form-input"
                  name="email"
                  id="email"
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" for="message">
                  Message
                </label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Enter Your Message"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn--theme contact__btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="test">
        <div className="form">
          <SearchForm
            setSearch = {setSearch}
           />
          <AddItem
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
            addNewUser={addNewUser}
          />
        </div>
        {
          <div className="user-list">
            {(user?.length !==0 ) ? (
              <UserList
                search = {search}
                user={user.filter(user => ((user.name).toLocaleLowerCase()).includes(search))}
                handleAdd={handleAdd}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            ) : (
              <p className="default-data">
                your List Is Empty
              </p>
            )}
          </div>
        }
        {/* <button  onClick={()=> handleAdd(user.length)} style={{backgroundColor:"black",borderRadius:"5px",color:"white"}}>add</button> */}
        {/* <button onClick={() => increment()}>+</button>
        <a>{count}</a>
        <button onClick={degrement}>-</button> */}
        {error && <p style={{backgroundColor:"red"}}>{`Error : ${error}`}</p>}
        {
          userData && 
          <ProfileComponent 
        userData={userData}
        setUserData ={setUserData}
        />

        }
        
      </section>
      ̥
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
