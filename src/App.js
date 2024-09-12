import React from "react";
import Dashboard from "./MyDashBoard/Dashboard";
import Footer from "./Component/Footer";
import { useState } from "react";

function App() {

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

  const handleAdd =(length)=> {
    console.log(length);
  }
  return (
    <div>
      <Dashboard 
        user = {user}
        handleCheck ={handleCheck}
        handleAdd = {handleAdd}
        handleDelete ={handleDelete}
        />
      <Footer user = {user}/>
    </div>
  );
}

export default App;
