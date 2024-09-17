import React, { useState } from "react";

function ProfileComponent({ userData,setUserData }) {
  console.log(userData);

  //const [userData, setUserData] = useState(userData);

  const handleInputChange = (index, field, value) => {
    const updatedUsers = userData.map((user, idx) =>
      idx === index ? { ...user, [field]: value } : user
    );
    setUserData(updatedUsers);
  };
  return (
    <div >
      {userData && userData?.map((user, index) => (
        <div key={index}>
          <label>UserName</label>
          <input
            value={user?.name}
            type="text"
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
          />
          <label>Age</label>
          <input value={user?.age}></input>
          <label>Email</label>
          <input value={user?.email}></input>
        </div>
      ))}
    </div>
  );
}

export default ProfileComponent;
