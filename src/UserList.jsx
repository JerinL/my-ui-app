import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";


function UserList({user,handleCheck,handleDelete,search}) {

  useEffect(() => {
    console.log("user addesd");
  },[user]);
    return(
        <div>
            <ul>
          {user?.map((users,index) => (
            <li className="user" key={index}>
              <input
                type="checkbox"
                onChange={() => handleCheck(users.id)}
                checked={users.status}
                required
              />
              <label onClick={() => handleCheck(users.id)} style={{fontSize:"18px"}} className={(users.status)?"todo-list1":"todo-list"}>{users.name}</label>
              <FaTrashAlt 
                role="button"
                onClick={() => handleDelete(users.id)}
                tabIndex="0"
                aria-label={`Delete ${users.user}`}
              />
            </li>
          ))}
        </ul>
        </div>
    );
}

export default UserList;