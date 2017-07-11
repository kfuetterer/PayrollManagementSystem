import { Link } from 'react-router';
import React, { Component } from "react";

class Schedule extends React.Component {
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
        displayEventEnd: true,
        aspectRatio: 2.25,
        events: [
          {
            title  : '',
            start  : '2017-07-09T08:30:00',
            end: '2017-07-09T12:30:00'
          },
          {
            title  : '',
            start  : '2017-07-10T08:30:00',
            end: '2017-07-10T12:30:00'
          },
          {
            title  : '',
            start  : '2017-07-11T08:30:00',
            end: '2017-07-11T12:30:00'
          },
          {
            title  : '',
            start  : '2017-07-12T08:30:00',
            end: '2017-07-12T12:30:00'
          },
          {
            title  : '',
            start  : '2017-07-13T09:30:00',
            end: '2017-07-13T12:30:00'
          }
        ]
        // events: function(start, end) {
        //   var events = [];
        //   events.push({
        //     title: this.props.schedules.title,
        //     start: this.props.schedules.start_time,
        //     end: this.props.schedules.end_time
        //   });
        // }
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