import React from 'react';

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.currVal}</td>
        <td>{this.props.cipherVal}</td>
        <td>+</td>
        <td>{this.props.oldTotal}</td>
        <td>=</td>
        <td>{this.props.total}</td>
      </tr>
    );
  }
}

export default TableRow;
