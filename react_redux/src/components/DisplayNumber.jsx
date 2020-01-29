import React, { Component } from 'react';
import store from '../store';


export default class DisplayNumber extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      number: store.getState().number,
    }
    
    store.subscribe(() => {
      this.setState({
        number: store.getState().number,
      });
    });
  }
  
  render() {
    const state = this.state;
    
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={state.number} readOnly></input>
      </div>
    )
  }
}
