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
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        navLinks: true,
        columnFormat: {
            week: 'ddd'
        },
        displayEventTime: true
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
            <div id='calendar1'></div>
          </div>
        </div>
      </div>
    );
  }
};

export default TimeOffSegment;