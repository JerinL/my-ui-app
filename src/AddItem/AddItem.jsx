import React, { useEffect, useRef } from "react";
import "./AddItem.css";

function AddItem({ newItem, setNewItem, handleSubmit }) {

  const addRef = useRef(''); 

  useEffect(() => {
    console.log("loading initial");
  },[]);

  return (
    <div>
      <form className="add-form"  onSubmit={(e)=>{handleSubmit(e)}}>
        <label htmlFor="addUser"> Add User</label>
        <input
          autoFocus
          required
          ref={addRef}
          id="adduser"
          type="text"
          placeholder="add Item"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button
          type="submit"
          aria-label="add User"
          onClick={() => addRef.current.focus()}
          
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
