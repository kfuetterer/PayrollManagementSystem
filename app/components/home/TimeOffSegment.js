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
        displayEventTime: true,
        aspectRatio: 1.2,
        events: [
          {
            title  : 'Vacation',
            start  : '2017-07-09', //this.props.timeoffsegments.start_date
            end: '2017-07-13' //this.props.timeoffsegments.end_date
          },
          {
            title  : 'Vacation',
            start  : '2017-08-09', //this.props.timeoffsegments.start_date
            end: '2017-08-21' //this.props.timeoffsegments.end_date
          }
        ]
    });
    $('.fc-next-button').addClass("marginCSS floatclass btn-floating btn light-blue accent-2 waves-effect waves-light");
    $('.fc-prev-button').addClass("marginCSS floatclass btn-floating btn light-blue accent-2 waves-effect waves-light");
    $('.marginCSS').css("margin", "10px");
    $('.floatclass').css("float", "left");

    $('.fc-next-button').html("<i class='material-icons right'>skip_next</i>");
    $('.fc-prev-button').html("<i class='material-icons right'>skip_previous</i>");
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div id='calendar1'>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default TimeOffSegment;