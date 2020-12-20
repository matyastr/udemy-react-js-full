import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    userInput: "Enter Text",
  };

  stringChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split("").map((char, index) => {
      return (
        <Char
          character={char}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <h1>Please enter some text</h1>
        <input
          type="text"
          onChange={this.stringChangeHandler}
          value={this.state.userInput}
        />
        <p>Input: {this.state.userInput}</p>
        <Validation length={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
