import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

// Class variation
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Bob", age: 29 },
      { name: "Fred", age: 26 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    // console.log('asdf');
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Allison", age: 27 },
        { name: "Mikey", age: 18 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Timothy', age: 30 },
        { name: event.target.value, age: 27 },
        { name: "Mikey", age: 20 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Joe')}>
            Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;

// FUNCTIONAL STATEFULL WITH HOOKS
// import React, { useState } from "react";

// const App = (props) => {
//     const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Bob', age: 29 },
//       { name: 'Fred', age: 26 }
//     ],
//   });

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Timothy', age: 30 },
//         { name: 'Allison', age: 27 },
//         { name: 'Mikey', age: 18 }
//       ],
//       otherState: personsState.otherState
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
//         My Hobbies: Racing{" "}
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };
