import React, { Component } from "react";
import ClockIn from "./home/ClockIn";
import Schedule from "./home/Schedule";
import TimeOffSegment from "./home/TimeOffSegment";
import TimeOffForm from "./home/TimeOffForm";
import WorkSegment from "./home/WorkSegment";
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
            worksegment: []
        };
        this.getSchedule = this.getSchedule.bind(this);
        this.getTimeOffSegment = this.getTimeOffSegment.bind(this);
        this.getWorkSegment = this.getWorkSegment.bind(this);
    }
    componentDidMount() {
        this.getSchedule();
        this.getTimeOffSegment();
        this.getWorkSegment();
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
    getWorkSegment() {
        API.getWorkSegment().then((res) => {
          this.setState({ worksegment: res });
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
    renderWorkSegment() {
        return this.state.worksegment.map(worksegment => (
            <WorkSegment
              worksegment={worksegment}
              key={worksegment.id}
              getWorkSegment={this.getWorkSegment}
            />
        ));
    }
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col s4">
              <div className="row">
                <h5 className="blueHeader z-depth-3">Clock In/Out</h5>
              </div>
              <div className="row" id="clockin_border">
                <div className="col s12">
                  <ClockIn
                  />
                </div>
              </div>
            </div>
            <div className="col s1">
            </div>
            <div className="col s7">
              <div className="row">
                <h5 className="blueHeader z-depth-3">Schedule</h5>
              </div>
              <div className="row" id="schedule_border">
                <Schedule 
                  getSchedule={this.getSchedule}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="row">
                <h5 className="blueHeader z-depth-3">Hours Worked</h5>
              </div>
              <div className="row" id="worksegment_border">
                <WorkSegment
                  getWorkSegment={this.getWorkSegment}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s5">
              <div className="row">
                <h5 className="blueHeader z-depth-3">Time Off Form</h5>
              </div>
              <div className="row" id="timeoffform_border">
                <TimeOffForm
                  getTimeOffSegment={this.getTimeOffSegment}
                />
              </div>
            </div>
            <div className="col s1">
            </div>
            <div className="col s6">
              <div className="row">
                <h5 className="blueHeader z-depth-3">Time Off Requests</h5>
              </div>
              <div className="row" id="timeoffsegment_border">
                <TimeOffSegment
                  getTimeOffSegment={this.getTimeOffSegment}
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default ProfilePage;