import { Link } from "react-router";
import React, { Component } from "react";

class TimeOffSegment extends React.Component {
  componentDidMount() {
      $('#calendar1').fullCalendar({
        editable: false,
        handleWindowResize: true,
        weekends: true,
        defaultView: 'month',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month, agendaWeek,agendaDay,listWeek'
        },
        navLinks: true,
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
            <div id='calendar1'></div>
          </div>
        </div>
      </div>
    );
  }
};

export default TimeOffSegment;