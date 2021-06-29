import React, { Component } from "react";
import Cell from './Cell'

export default class Matrix extends Component {
  genRow = (vals) => {
    return vals.map((val) => <Cell value={val}/>); // replace me and render a cell component instead!
  };

  genMatrix = () => {
    return this.props.values.map((rowVals) => (
      <div className="row">{this.genRow(rowVals)}</div>
    ));
  };

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}

let defaultPattern = new Array(10);
for (let i = 0; i < 10; i++) {
  defaultPattern[i] = new Array(10)
  for (let j = 0; j < 10; j++){
    defaultPattern[i][j] = "#F00";
  } 
}

Matrix.defaultProps = {
  values: defaultPattern
}
