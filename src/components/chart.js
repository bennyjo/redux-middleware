import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  const sum = data.reduce((value, sum) => value + sum, 0);

  return  (sum / data.length).toFixed(0);
}

export default (props) => {
  return (
    <div>
      <Sparklines svgHeight={100} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)}</div>
    </div>
  );
}
