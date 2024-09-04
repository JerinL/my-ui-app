import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  function getBrowserDetails() {
    const dataArr = ["JERIN", "JACK"];
    const num = Math.floor(Math.random() * dataArr.length);
    return dataArr[num];
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

  console.log(year.getDate())
  return (
    <>
      <header className="header">
        <div className="profile">
          <h1 className="profile-img">I</h1>
        <h1>Hii {giveAccess()}</h1>
        </div>
        <nav >
          <ul className="nav-items">
            <li><a className="nav-items-item" href="home">HOME</a></li>
            <li><a className="nav-items-item" href="skill">SKILS</a></li>
            <li><a className="nav-items-item" href="skill">PROJECTS</a></li>
            <li><a className="nav-items-item" href="skill">CONTACT</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <p>main datas are here</p>
      </main>
      <footer className="footer">
        <a>Copyright &copy; {year.getFullYear()}</a>
      </footer>
    </>
  );
};

export default Dashboard;
