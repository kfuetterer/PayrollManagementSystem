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
      include_holidays: false,
      approved: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleButtonClick() {
    const newTimeOffSegment = {
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      hoursperday: this.state.hoursperday,
      notes: this.state.notes,
      include_weekend: this.state.include_weekend,
      include_holidays: this.state.include_holidays,
      approved: this.state.approved
    }
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
                  name="start_date"
                  onChange={this.handleInputChange}
                  value={this.state.start_date}
              />
              <label>End Date</label><br />
              <input
                type="date" className="datepicker"
                name="end_date"
                onChange={this.handleInputChange}
                value={this.state.end_date}
              />
              <label>Hours Per Day</label><br />
              <input
                name="hoursperday"
                onChange={this.handleInputChange}
                value={this.state.hoursperday}
              />
              <label>Notes</label><br />
              <textarea
                name="notes"
                className="materialize-textarea"
                onChange={this.handleInputChange}
                value={this.state.notes}
              />
              <br />
              <input
                name="include_weekend"
                type="checkbox" id="include_weekend"
                onChange={this.handleInputChange}
                value={this.state.include_weekend}
              />
              <label htmlFor="include_weekend">Include Weekend</label>
              <br />
              <input
                name="include_holidays"
                type="checkbox" id="include_holidays"
                onChange={this.handleInputChange}
                value={this.state.include_holidays}
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