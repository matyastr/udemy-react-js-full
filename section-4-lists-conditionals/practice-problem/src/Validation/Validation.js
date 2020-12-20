import React from "react";

const Validation = (props) => {
  const style = {
    color: "red",
  };

  let errorMessage = null;

  if (props.length < 5) {
    errorMessage = "Text is too short. Please enter less than 5 characters.";
  } else if (props.length > 10) {
    errorMessage = "Text is too long. Please enter less than 10 characters.";
  }

  return (
    <div>
      <p style={style}>{errorMessage}</p>
    </div>
  );
};

export default Validation;
