import { Link } from 'react-router';
import React, { Component } from "react";
import API from "../../utils/API";

class NewSchedule extends React.Component {
  constructor() {
    super();
    this.state = {
      start_date: "",
      end_date: "",
      employeeId: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  componentDidMount () {
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15
    });
    $('.timepicker').pickatime({
      default: 'now', // Set default time
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker  
    });
  }
  handleInputChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleButtonClick() {
    const newSchedule = {
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      employeeId: this.state.employeeId
    }
    API.saveTimeOffSegment(newSchedule).then(this.props.getCompany)
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="form-group">
              <label>Start Time/Date</label>
              <input
                type="date"
                name="start_date"
                className="datepicker"
                onChange={this.handleInputChange}
              />
              <label>End Time/Date</label>
              <input
                type="date"
                name="end_date"
                className="timepicker"
                onChange={this.handleInputChange}
              />
              <label>Employee ID</label>
              <input
                type="text"
                name="employeeId"
                onChange={this.handleInputChange}
              />
              <br />
              <br />
              <button 
                onClick={this.handleButtonClick}
                className="btn btn-success light-blue accent-2 btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NewSchedule;