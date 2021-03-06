import { Link } from 'react-router';
import React, { Component } from "react";

class WorkSegment extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden : "hidden"
    };
  }
  componentWillMount() {
    var that = this;
    setTimeout(function() {
      that.show();
    }, that.props.wait);
  }
  show() {
    this.setState({hidden : ""});
    for (var k = 0; k < this.props.worksegments.length; k++) {
      return (
        <tr>
          <td>{this.props.worksegments[k].clock_in}</td>
          <td>{this.props.worksegments[k].clock_out}</td>
          <td></td>
        </tr>
      )
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col m12 s12">
            <div id="payrollcycle">
              <a id="prevButtonFloat" className="btn-floating btn light-blue accent-2 waves-effect waves-light"><i className="material-icons">skip_previous</i></a>
              <h5 id="currentPayrollTitle">Current Payroll Cycle</h5>
              <a id="nextButtonFloat" className="btn-floating btn light-blue accent-2 waves-effect waves-light"><i className="material-icons">skip_next</i></a>
            </div>
            <table className="striped">
              <thead>
                <tr>
                  <th>Clock In</th>
                  <th>Clock Out</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                {this.show}
              </tbody>
            </table>
            <p className="right-align">
              Total Hours:
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default WorkSegment;