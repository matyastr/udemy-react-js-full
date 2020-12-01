import React from "react";

const UserOutput = (props) => {
  const style = {
    borderRadius: "2px",
    borderColor: "black",
    width: "60%",
    margin: "auto",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #ccc",
    paddingBottom: "20px",
    textAlign: "center",
    padding: "25px",
    marginTop: "15px",
  };

  return (
    <div style={style}>
      <h2>{props.userName}</h2>
      <p>{props.para}</p>
    </div>
  );
};

export default UserOutput;
