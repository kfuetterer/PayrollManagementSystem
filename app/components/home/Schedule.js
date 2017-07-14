import { Link } from 'react-router';
import React, { Component } from "react";

class Schedule extends React.Component {
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
    console.log(this.props.schedules[0].start_date);
    console.log(this.props.schedules.length);
    let events = [];

    for (var j; j < this.props.schedules.length; j++) {
      events.push({
        title: '',
        start: this.props.schedules[j].start_date,
        end: this.props.schedules[j].end_date
      });
    };

    this.forceUpdate();

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
        aspectRatio: 2.75,
        events: events
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
      <div className="row" className={this.state.hidden}>
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