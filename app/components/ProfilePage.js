import React, { Component } from "react";
import ClockIn from "./home/ClockIn";
import Schedule from "./home/Schedule";
import TimeOffSegment from "./home/TimeOffSegment";
import TimeOffForm from "./home/TimeOffForm";
import TimeStamp from "./home/TimeStamp";
import API from "../utils/API";
import LoginPage from "./LoginPage";

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
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
    signOut() {
      API.signOut().then((res) => {
        this.setState({ email: "", password: "" });
      })
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
        <div className="container">
          <div className="row">
            <div id="clockin_border" className="col s4">
              <ClockIn
              />
            </div>
            <div id="schedule_border" className="col s8">
              <Schedule 
                getSchedule={this.getSchedule}
              />
            </div>
          </div>
          <div id="timestamp_border" className="row">
            <div className="col s12">
              <TimeStamp 
                getTimestamp={this.getTimestamp}
              />
            </div>
          </div>
          <div className="row">
            <div id="timeoffform_border" className="col s6">
              <TimeOffForm
                getTimeOffSegment={this.getTimeOffSegment}
              />
            </div>
            <div id="timeoffsegment_border" className="col s6">
              <hr />
              <TimeOffSegment 
                getTimeOffSegment={this.getTimeOffSegment}
              />
            </div>
          </div>
        </div>
    );
  }
};

export default ProfilePage;