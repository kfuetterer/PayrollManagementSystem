import { Link } from 'react-router';
import React, { Component } from "react";

class Schedule extends React.Component {
    componentDidMount() {
      $('#calendar2').fullCalendar({
        editable: false,
        handleWindowResize: true,
        weekends: true,
        defaultView: 'agendaWeek',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month, agendaWeek,agendaDay,listWeek'
        },
        navLinks: true,
        columnFormat: {
            week: 'ddd'
        },
        displayEventTime: false
    })
  }
  render() {
    return (
    <div>
      <div className="row">
        <div className="col s12">
          <div id="calendar2"></div>
          <table>
                <thead>
                  <tr>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THU</th>
                    <th>FRI</th>
                    <th className="textBlue">SAT</th>
                    <th className="textBlue">SUN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8:45 AM</td>
                    <td>9:45 AM</td>
                    <td>12:30 PM</td>
                    <td>5:30 PM</td>
                    <td>12:30 PM</td>
                  </tr>
                  <tr>
                    <td>12:30 PM</td>
                    <td>12:30 PM</td>
                    <td>5:30 PM</td>
                    <td>12:30 PM</td>
                    <td>5:30 PM</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
  }
};

export default Schedule;