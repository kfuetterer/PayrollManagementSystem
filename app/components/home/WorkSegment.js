import { Link } from 'react-router';
import React, { Component } from "react";

class WorkSegment extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
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
                  <td><i className="material-icons">done</i></td>
                  <td>8:45 AM</td>
                  <td>9:45 AM</td>
                  <td>1.00</td>
                </tr>
                <tr>
                  <td><i className="material-icons">not_interested</i></td>
                  <td>12:30 PM</td>
                  <td>5:30 PM</td>
                  <td>5.00</td>
                </tr>
                <tr>
                  <td><i className="material-icons">not_interested</i></td>
                  <td>8:30 AM</td>
                  <td>9:00 PM</td>
                  <td>7.00</td>
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