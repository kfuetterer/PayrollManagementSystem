import { Link } from "react-router";
import React, { Component } from "react";

class TimeOffSegment extends React.Component {
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
    let events = [];
    for (let j = 0; j < this.props.timeoffsegments.length; j++) {
      events.push({
        title: '',
        start: this.props.timeoffsegments[j].start_date,
        end: this.props.timeoffsegments[j].end_date
      });
    }

    this.forceUpdate();

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
        color: '#ffff00',
        textColor: '#ffffff',
        displayEventTime: false,
        aspectRatio: 1.2,
        events: events
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