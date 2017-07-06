import { Link } from 'react-router';
import React, { Component } from "react";
import API from "../../utils/API";

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
      <div>
        <div className="row">
          <div className="col s6">
            <div>
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
                Current Date: 01/01/17
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                Current Time: 1:00 PM
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p>Company: blahblah</p>
          <p>Pay Rate: $20/h</p>
          <p>Company ID: 123123123</p>
        </div>
      </div>
    );
  }
};

export default ClockIn;