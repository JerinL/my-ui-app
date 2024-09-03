import React from "react";
import './Dashboard.css';

const Dashboard  = () => {

    function getBrowserDetails(){
        const dataArr = ["jerin","jack","sujith","anto","unknown"];
        const num = Math.floor(Math.random()*dataArr.length)
        return dataArr[num];
      }
    
      function giveAccess(){
        const getName = getBrowserDetails();
        let res;
        if(getName == "unknown"){
          res = "you dont have the access please fix the name";
        }else{
          res = getName;
        }
    
        return res;
      }
    
    
      const obj = {
        name:"jerin",
        mail:"mail"
      }
      return(
        <div className='jerin'>
            <h1>Hii {giveAccess()}</h1>
        </div>
    
      );
};

export default Dashboard;
