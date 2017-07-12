import { Link } from 'react-router';
import React, { Component } from "react";
import API from "../../utils/API";
import Clock from './clock';

class ClockIn extends React.Component {
  constructor() {
    super();

    var today = new Date(),
    date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

    this.state = {
      clock_in: "",
      clock_out: "",
      date: date
    };
    this.handleButtonClickIn = this.handleButtonClickIn.bind(this);
    this.handleButtonClickOut = this.handleButtonClickOut.bind(this);
  }
  handleButtonClickIn() {
    this.setState({ clock_in: new Date() });
    const newWorkSegmentIn = this.state.clock_in;
    API.saveWorkSegment(newWorkSegmentIn).then(this.props.getWorkSegment);
  }
  handleButtonClickOut() {
    this.setState({ clock_out: new Date() });
    const newWorkSegmentOut = this.state.clock_out;
    API.updateWorkSegment(newWorkSegmentOut).then(this.props.getWorkSegment);
    this.setState({ clock_in: "", clock_out: "" });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s6">
            <br />
            <button
              onClick={this.handleButtonClickIn}
              className="btn btn-success light-blue accent-2 waves-effect waves-light btn" type="submit" name="action"
            ><i className="material-icons">query_builder</i> In</button>
            <br />
          </div>
          <div className="col s6">
            <br />
            <button
              onClick={this.handleButtonClickOut}
              className="btn btn-success light-blue accent-2 waves-effect waves-light btn" type="submit" name="action"
            ><i className="material-icons">done</i> Out</button>
          </div>
        </div>
        <div className="row">
          <div className="col s6 m6">
            <p>Current Date:</p>
            <p>{this.state.date}</p>
          </div>
          <div className="col s6 m6">
            <p>Current Time:</p>
            <p><Clock /></p>
          </div>
        </div>
        <div className="row">
          <p>Company: Boxes Incorporated</p>
          <p>Pay Rate: $20/h</p>
          <p>Company ID: 123456</p>
        </div>
      </div>
    );
  }
};

export default ClockIn;