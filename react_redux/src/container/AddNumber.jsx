import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddNumber from '../components/AddNumber';

function mapDispatchToProps(dispatch) {
  return {
    onClick: (size) => {
      dispatch({
        type: 'INCREMENT',
        size: size,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddNumber);

// export default class extends Component {
//   render() {
//     return (
//       <AddNumber onClick={(size) => {
//         store.dispatch({
//           type: 'INCREMENT',
//           size: size,
//         });
//       }} />
//     );
//   }
// };
