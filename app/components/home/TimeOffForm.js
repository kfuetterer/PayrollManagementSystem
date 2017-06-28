import { Link } from 'react-router';
import React, { Component } from "react";

class TimeOffForm extends React.Component {
  constructor() {
    super();
    this.state = {
      start_date: "",
      end_date: "",
      hoursperday: "",
      notes: "",
      include_weekend: "",
      include_holidays: "",
      approved: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange(event) {
    this.setState({ 
      start_date: event.target.value,
      end_date: event.target.value,
      hoursperday: event.target.value,
      notes: event.target.value,
      include_weekend: event.target.value,
      include_holidays: event.target.value,
      approved: event.target.value
    })
  }
  handleButtonClick() {
    const newTimeOffSegment = {
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      hoursperday: this.state.hoursperday,
      notes: this.state.notes,
      include_weekend: this.state.include_weekend,
      holidays: this.state.include_holidays,
      approved: this.state.approved
    }
    API.saveTimeOffSegment(newTimeOffSegment).then(this.props.getTimeOffSegment)
  }
  render() {
    return (
      <div className="col-md-6">
        <div className="form-group">
        <input
          onChange={this.handleInputChange}
          value={this.state.start_date}
        />
        <input
          onChange={this.handleInputChange}
          value={this.state.end_date}
        />
        <input
          onChange={this.handleInputChange}
          value={this.state.hoursperday}
        />
        <input
          onChange={this.handleInputChange}
          value={this.state.notes}
        />
        <input
          onChange={this.handleInputChange}
          value={this.state.include_weekend}
        />
        <input
          onChange={this.handleInputChange}
          value={this.state.include_holidays}
        />
        <button
          onClick={this.handleButtonClick}
          className="btn btn-success"
        >Submit</button>
      </div>
    </div>
    );
  }
};

export default TimeOffForm;