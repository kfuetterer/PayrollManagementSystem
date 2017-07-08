import { Link } from 'react-router';
import React, { Component } from "react";

class Schedule extends React.Component {
    constructor() {
      super();
      this.state = {
        duration: "02:00",
        minTime: "07:30:00"
      }
    }
  componentDidMount() {
      $('#calendar2').fullCalendar({
        editable: false,
        handleWindowResize: true,
        weekends: true,
        defaultView: 'agendaWeek',
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        eventColor: '#378006',
        navLinks: false,
        columnFormat: {
            week: 'ddd'
        },
        minTime: this.state.minTime,
        defaultTimedEventDuration: this.state.duration,
        displayEventTime: false
    });
    $('.fc-next-button').addClass("marginCSS floatclass");
    $('.fc-prev-button').addClass("marginCSS floatclass");
    $('.marginCSS').css("margin", "10px");
    $('.floatclass').css("float", "left");

    $('.fc-next-button').html("<a class='btn-floating btn light-blue accent-2 waves-effect waves-light'><i class='material-icons right'>skip_next</i></a>");
    $('.fc-prev-button').html("<a class='btn-floating btn light-blue accent-2 waves-effect waves-light'><i class='material-icons right'>skip_previous</i></a>");
  }
  render() {
    return (
    <div>
      <div className="row">
        <div className="col s12">
          <div id="calendar2">
          </div>
        </div>
      </div>
    </div>
    );
  }
};

export default Schedule;