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
        defaultView: 'basicWeek',
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        allDay: false,
        eventColor: '#40c4ff',
        navLinks: false,
        columnFormat: {
            week: 'ddd'
        },
        displayEventTime: true,
        aspectRatio: 2.25
    });
    $('.fc-next-button').addClass("marginCSS floatclassright btn-floating btn light-blue accent-2 waves-effect waves-light");
    $('.fc-prev-button').addClass("marginCSS floatclassleft btn-floating btn light-blue accent-2 waves-effect waves-light");
    $('.marginCSS').css("margin", "10px");
    $('.floatclassleft').css("float", "left");
    $('.floatclassright').css("float", "right");

    $('.fc-next-button').html("<i class='material-icons right'>skip_next</i>");
    $('.fc-prev-button').html("<i class='material-icons right'>skip_previous</i>");
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