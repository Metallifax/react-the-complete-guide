import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      // Remember that the following code isn't HTML
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">
          <ul type="none">
            ~~My Hobbies~~
            <li>Racing</li>
            <li>Cards</li>
            <li>Gaming</li>
          </ul>
        </Person>
        <Person name="Stephanie" age="27" />
      </div>
    );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
