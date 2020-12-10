import React from "react";

const ValidationComponent = (props) => {
  const style = {
      color: "red"  
  };

  let errorState = null;

  if (props.length < 5) {
    errorState = (
      <div>
        <p className="error">
          Text is too short. Please enter at least 5 characters.
        </p>
      </div>
    );
  } else if (props.length > 10) {
    errorState = (
      <div>
        <p className="error">
          Text is too long. Please enter less than 10 characters.
        </p>
      </div>
    );
  }

  return (
    <div style={style}>
        {errorState}
    </div>
  );
};

export default ValidationComponent;
