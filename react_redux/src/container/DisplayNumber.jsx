import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayNumber from '../components/DisplayNumber';

function mapStateToProps(state) {
  return {
    number: state.number,
  };
};

export default connect(mapStateToProps)(DisplayNumber);

// export default class extends Component {
//   constructor(props) {
//     super(props)
    
//     this.state = {
//       number: store.getState().number,
//     }
    
//     store.subscribe(() => {
//       this.setState({
//         number: store.getState().number,
//       });
//     });
//   }
  
//   render() {
//     const state = this.state;
    
//     return (
//       <>
//         <DisplayNumber number={state.number} />
//       </>
//     )
//   }
// };
