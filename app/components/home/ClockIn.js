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
      clock_in: new Date(),
      clock_out: new Date(),
      date: date
    };
    this.handleButtonClickIn = this.handleButtonClickIn.bind(this);
    this.handleButtonClickOut = this.handleButtonClickOut.bind(this);
  }
  handleButtonClickIn() {
    this.setState({ clock_in: new Date() });
    console.log(this.state.clock_in);
    const newWorkSegmentIn = {
      clock_in: this.state.clock_in,
      employeeId: this.props.employeeId
    }
    API.saveWorkSegment(newWorkSegmentIn).then(this.props.getWorkSegment);
  }
  handleButtonClickOut() {
    this.setState({ clock_out: new Date() });
    const newWorkSegmentOut = {
      clock_out: this.state.clock_out
    }
    API.updateWorkSegment(this.props.currentWorkId, newWorkSegmentOut).then(this.props.getWorkSegment);
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
          <p>Company: {this.props.company.company_name}</p>
          <p>Pay Rate: $20/h</p>
          <p>Company ID: {this.props.company.id}</p>
        </div>
      </div>
    );
  }
};

export default ClockIn;