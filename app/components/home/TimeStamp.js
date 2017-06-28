import { Link } from 'react-router';
import React, { Component } from "react";

class TimeStamp extends React.Component {
  render() {
    return (
    <div className="col-md-6">
      {this.props.timestamp}
    </div>
    );
  }
};

export default TimeStamp;