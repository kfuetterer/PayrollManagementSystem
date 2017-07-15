import { Link } from 'react-router';
import React, { Component } from "react";
import API from "../../utils/API";

class TimeOffForm extends React.Component {
  constructor() {
    super();
    this.state = {
      start_date: "",
      end_date: "",
      hoursperday: "",
      notes: "",
      include_weekend: false,
      include_holidays: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  componentDidMount () {
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15
    });
  }
  handleInputChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleHolidaysChange() {
    this.setState({
      include_holidays: true
    })
  }
  handleWeekendChange() {
    this.setState({
      include_weekend: true
    })
  }
  handleButtonClick() {
    let date1 = $('#date1').val();
    let date2 = $('#date2').val();

    this.setState({
      start_date: data1,
      end_date: date2
    });

    const newTimeOffSegment = {
      start_date: date1,
      end_date: date2,
      hoursperday: this.state.hoursperday,
      notes: this.state.notes,
      include_weekend: this.state.include_weekend,
      include_holidays: this.state.include_holidays,
      employeeId: this.props.employeeId
    };

    API.saveTimeOffSegment(newTimeOffSegment).then(this.props.getTimeOffSegment)
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date" className="datepicker"
                id="date1"
                name="start_date"
              />
              <label>End Date</label><br />
              <input
                type="date" className="datepicker"
                id="date2"
                name="end_date"
              />
              <label>Hours Per Day</label><br />
              <input
                name="hoursperday"
                onChange={this.handleInputChange}
              />
              <label>Notes</label><br />
              <textarea
                name="notes"
                className="materialize-textarea"
                onChange={this.handleInputChange}
              />
              <br />
              <input
                name="include_weekend"
                type="checkbox" id="include_weekend"
                value={this.state.include_weekend}
                onChange={this.handleWeekendChange}
              />
              <label htmlFor="include_weekend">Include Weekend</label>
              <br />
              <input
                name="include_holidays"
                type="checkbox" id="include_holidays"
                value={this.state.include_holidays}
                onChange={this.handleHolidaysChange}
              />
              <label htmlFor="include_holidays">Inlude Holidays</label>
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

export default TimeOffForm;