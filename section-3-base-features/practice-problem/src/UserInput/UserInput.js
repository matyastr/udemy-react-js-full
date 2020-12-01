import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
  return (
    <div className="UserInput">
      <h2>Please enter a user name</h2>
      <input type="text" onChange={props.changed} value={props.userName} />
    </div>
  );
};

export default UserInput;
