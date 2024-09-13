import React from "react";
import "./AddItem.css";

function AddItem({ newItem, setNewItem, handleSubmit }) {
  return (
    <div>
      <form className="add-form">
        <label htmlFor="addUser"> Add User</label>
        <input
          autoFocus={false}
          id="adduser"
          type="text"
          placeholder="add Item"
          required
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button
          type="submit"
          aria-label="add User"
          onClick={(e)=>{handleSubmit(e)}}
          // style={{fontSize:"40px",alignItems:"center"
          // }}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default AddItem;
