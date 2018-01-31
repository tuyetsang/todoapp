import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;


// class App extends React.Component {
//    constructor() {
//       super();
//
//       this.state = {
//          data: []
//       }
//
//       this.setStateHandler = this.setStateHandler.bind(this);
//    };
//    setStateHandler() {
//       var item = "setState..."
//       var myArray = this.state.data.slice();
// 	  myArray.push(item);
//       this.setState({data: myArray})
//    };
//    render() {
//       return (
//          <div>
//             <button onClick = {this.setStateHandler}>SET STATE</button>
//             <h4>State Array: {this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;
