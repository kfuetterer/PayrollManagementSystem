import { Link } from 'react-router';
import React, { Component } from "react";

class WorkSegment extends React.Component {
  approved() {
    if (this.props.worksegment.approved === true) {
      return (
        <i className="material-icons">done</i>
      )
    }
    else if (this.props.worksegment.approved === false) {
      return (
        <i className="material-icons">not_interested</i>
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
                  <th>Approved</th>
                  <th>Clock In</th>
                  <th>Clock Out</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/*<td>{this.approved()}</td>*/}
                  {/*<td>{this.props.worksegment.clock_in}</td>*/}
                  {/*<td>{this.props.worksegment.clock_out}</td>*/}
                  {/*<td>{this.props.worksegment.clock_out - this.props.worksegment.clock_in}</td>*/}
                </tr>
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