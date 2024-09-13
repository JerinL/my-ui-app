import React from "react";
import { FaTrashAlt } from "react-icons/fa";


function UserList({user,handleCheck,handleDelete}) {
    return(
        <div>
            <ul>
          {user?.map((users,index) => (
            <li className="user" key={index}>
              <input
                type="checkbox"
                onChange={() => handleCheck(users.id)}
                checked={users.status}
              />
              <label onClick={()=> handleCheck(users.id)} style={(users.status)?{textDecoration:"line-through"}:null}>{users.name}</label>
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