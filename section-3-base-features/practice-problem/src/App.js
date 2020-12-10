import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: "Default Username",
    para:
      "Sed sit amet lorem luctus, finibus ex a, imperdiet sem. Aliquam quis condimentum erat, " +
      "lacinia volutpat leo. Aliquam interdum viverra sem ac feugiat. Suspendisse accumsan auctor dui. " +
      "Donec orci mauris, tempus non tellus id, interdum tincidunt est.",
  };

  nameNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value.length
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.nameNameChangedHandler}
          userName={this.state.userName}
        />
        <UserOutput userName={this.state.userName} para={this.state.para} />
        <UserOutput userName={this.state.userName} para={this.state.para} />
      </div>
    );
  }
}

export default App;
