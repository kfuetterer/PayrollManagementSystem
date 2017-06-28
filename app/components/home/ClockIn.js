import { Link } from 'react-router';
import React, { Component } from "react";

class ClockIn extends React.Component {
  constructor() {
    super();
    this.state = {
      clock_in: "",
      clock_out: ""
    };
    this.handleInputChangeIn = this.handleInputChangeIn.bind(this);
    this.handleButtonClickIn = this.handleButtonClickIn.bind(this);
    this.handleInputChangeOut = this.handleInputChangeOut.bind(this);
    this.handleButtonClickOut = this.handleButtonClickOut.bind(this);
  }
  handleInputChangeIn(event) {
    this.setState({ clock_in: event.target.value });
  }
  handleInputChangeOut(event) {
    this.setState({ clock_out: event.target.value });
  }
  handleButtonClickIn() {
    const newWorkSegmentIn = this.state.clock_in;
    API.saveWorkSegment(newWorkSegmentOut).then(this.props.getWorkSegmentIn);
  }
  handleButtonClickOut() {
    const newWorkSegmentOut = this.state.clock_out;
    API.updateWorkSegment(newWorkSegmentOut).then(this.props.getWorkSegmentOut);
    this.setState({ clock_in: "", clock_out: "" });
  }
  render() {
    return (
    <div className="col-md-6">
      <div>
        <button onChange={this.handleInputChangeIn}
          onClick={this.handleButtonClickIn}
          className="btn btn-success"
        >Clock In</button>
        <button onChange={this.handleInputChangeOut}
          onClick={this.handleButtonClickOut}
          className="btn btn-warning"
        >Clock Out</button>
      </div>
    </div>
    );
  }
};

export default ClockIn;