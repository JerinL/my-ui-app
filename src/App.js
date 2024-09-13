import React from "react";
import Dashboard from "./MyDashBoard/Dashboard";
import Footer from "./Component/Footer";
import { useState } from "react";

function App() {

  const [user, setName] = useState(JSON.parse(localStorage.getItem("user")));


  // const name1 = setName
  const handleCheck = (id) => {
    console.log(id);
    const userList = user.map((user) =>
      user.id === id ? { ...user, status: !user.status } : user
    );
    setName(userList);
    localStorage.setItem("user",JSON.stringify(userList));
  };

  const handleDelete = (id) => {
    console.log(id);
    // const userData = user.map((user) => 
    //  user.id ==id ? {}:user);

    const userData = user.filter((user)=> ( user.id !== id))
    setName(userData);
    localStorage.setItem("user",JSON.stringify(userData));

  };

  const handleAdd =(length)=> {
    console.log(length);
  }
  return (
    <div>
      <Dashboard 
        user = {user} 
        setName = {setName}
        handleCheck ={handleCheck}
        handleAdd = {handleAdd}
        handleDelete ={handleDelete}
        />
      <Footer title ="JJJAA" user = {user}/>
    </div>
  );
}

export default App;
