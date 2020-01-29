import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

class App extends Component {
  state = {
    number: 0,
  }
  
  render() {
    return (
      <div>
        <h1>Root</h1>
        <AddNumberRoot onClick={(size) => {
          // this.setState({
          //   number: this.state.number + size,
          // });
          this.setState((prevState) => ({
            number: prevState.number + size,
          }));
        }}></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
