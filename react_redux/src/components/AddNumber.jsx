import React, { Component } from 'react';

export default class AddNumber extends Component {
  state = {
    size: 1,
  }
  
  render() {
    const state = this.state;
    
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={() => {
          this.props.onClick(state.size);
        }}></input>
        <input type="text" value={state.size} onChange={(e) => {
          this.setState({
            size: Number(e.target.value),
          });
        }}></input>
      </div>
    )
  }
}
