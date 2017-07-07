import { Link } from 'react-router';
import React, { Component } from "react";

class TimeOffSegment extends React.Component {
  componentDidMount() {
    $('#calendar').fullCalendar({
        editable: false,
        handleWindowResize: true,
        weekends: false,
        defaultView: 'agendaWeek',
        header: false,
        minTime: '07:30:00',
        maxTime: '22:00:00',
        columnFormat: {
            week: 'ddd'
        },
        displayEventTime: true
    })
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div id='calendar'></div>
          </div>
        </div>
      </div>
    );
  }
};

export default TimeOffSegment;