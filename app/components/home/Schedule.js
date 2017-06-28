import { Link } from 'react-router';
import React, { Component } from "react";

class Schedule extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <table>
          <tr>
            {this.props.schedule.hours}
          </tr>
        </table>
      </div>
    );
  }
};

export default Schedule;