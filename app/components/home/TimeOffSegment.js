import { Link } from 'react-router';
import React, { Component } from "react";

class TimeOffSegment extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        {this.props.timeoffsegment}
      </div>
    );
  }
};

export default TimeOffSegment;