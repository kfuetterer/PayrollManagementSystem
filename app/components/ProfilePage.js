import React, { Component } from "react";
import DocumentTitle from 'react-document-title';
import ClockIn from "./home/ClockIn";
import Schedule from "./home/Schedule";
import TimeOffSegment from "./home/TimeOffSegment";
import TimeOffForm from "./home/TimeOffForm";
import TimeStamp from "./home/TimeStamp";
import API from "../utils/API";

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            user: "", // React.PropTypes.object
            schedule: [],
            timeoffsegment: [],
            timestamp: []
        };
        this.getSchedule = this.getSchedule.bind(this);
        this.getTimeOffSegment = this.getTimeOffSegment.bind(this);
        this.getTimeStamp = this.getTimeStamp.bind(this);
    }
    componentDidMount() {
        this.getSchedule();
        this.getTimeOffSegment();
        this.getTimeStamp();
    }
    getSchedule() {
        API.getSchedule().then((res) => {
          this.setState({ schedule: res });
        });
    }
    getTimeOffSegment() {
        API.getTimeOffSegment().then((res) => {
          this.setState({ timeoffsegment: res });
        });
    }
    getTimeStamp() {
        API.getTimeStamp().then((res) => {
          this.setState({ timestamp: res });
        });
    }
    renderClockIn() {
      return
      <ClockIn
        employee={employee}
        key={employee.id}
      />
    }
    renderSchedule() {
        return this.state.schedule.map(schedule => (
            <Schedule
              schedule={schedule}
              key={schedule.id}
              getSchedule={this.getSchedule}
            />
        ));
    }
    renderTimeOffSegment() {
        return this.state.timeoffsegment.map(timeoffsegment => (
            <TimeOffSegment
              timeoffsegment={timeoffsegment}
              key={timeoffsegment.id}
              getTimeOffSegment={this.getTimeOffSegment}
            />
        ));
    }
    renderTimeStamp() {
        return this.state.timestamp.map(timestamp => (
            <TimeStamp
              timestamp={timestamp}
              key={timestamp.id}
              getTimestamp={this.getTimestamp}
            />
        ));
    }
  render() {
    return (
      <DocumentTitle title={`My Profile`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {this.renderClockIn()}
            </div>
            <div className="col-md-6">
              {this.renderSchedule()}
            </div>
          </div>
          <div classNAme="row">
            <div className="col-md-12">
              {this.renderTimeStamp()}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TimeOffForm
                getTimeOffSegment={this.getTimeOffSegment}
              />
            </div>
            <div className="col-md-6">
              <hr />
              {this.renderTimeOffSegment()}
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
};

export default ProfilePage;