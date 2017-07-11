import { Link } from 'react-router';
import React, { Component } from "react";
import API from "../../utils/API";
import Clock from './clock';

class ClockIn extends React.Component {
  constructor() {
    super();

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
      clock_in: "",
      clock_out: "",
      date: date
    };
    this.handleInputChangeIn = this.handleInputChangeIn.bind(this);
    this.handleButtonClickIn = this.handleButtonClickIn.bind(this);
    this.handleInputChangeOut = this.handleInputChangeOut.bind(this);
    this.handleButtonClickOut = this.handleButtonClickOut.bind(this);
  }
  handleInputChangeIn() {
    this.setState({ clock_in: Date.now() });
  }
  handleInputChangeOut() {
    this.setState({ clock_out: Date.now() });
  }
  handleButtonClickIn() {
    const newWorkSegmentIn = this.state.clock_in;
    API.saveWorkSegment(newWorkSegmentIn).then(this.props.getWorkSegment);
  }
  handleButtonClickOut() {
    const newWorkSegmentOut = this.state.clock_out;
    API.updateWorkSegment(newWorkSegmentOut).then(this.props.getWorkSegment);
    this.setState({ clock_in: "", clock_out: "" });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s6">
            <div>
              <br />
              <br />
              <button onChange={this.handleInputChangeIn}
                onClick={this.handleButtonClickIn}
                className="btn btn-success light-blue accent-2 waves-effect waves-light btn" type="submit" name="action"
              ><i className="material-icons">query_builder</i> In</button>
              <br />
              <br />
              <button onChange={this.handleInputChangeOut}
                onClick={this.handleButtonClickOut}
                className="btn btn-success light-blue accent-2 waves-effect waves-light btn" type="submit" name="action"
              ><i className="material-icons">done</i> Out</button>
            </div>
          </div>
          <div className="col s6">
            <div className="row">
              <div className="col s12">
                <p>Current Date:</p>
                <p>{this.state.date}</p>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <p>Current Time:</p>
                <p><Clock /></p>
              </div>
            </div>
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