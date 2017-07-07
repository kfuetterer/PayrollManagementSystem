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
            schedules: [],
            timeoffsegments: [],
            worksegments: []
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
    getSchedule() {
        API.getSchedule().then((res) => {
          this.setState({ schedules: res.data });
        });
    }
    getTimeOffSegment() {
        API.getTimeOffSegment().then((res) => {
          this.setState({ timeoffsegments: res.data });
        });
    }
    getWorkSegment() {
        API.getWorkSegment().then((res) => {
          this.setState({ worksegments: res.data });
        });
    }
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col m4 s12">
              <div className="row">
                <h5 className="blueHeader z-depth-3">Clock In/Out</h5>
              </div>
              <div className="row" id="clockin_border">
                <div className="col s12">
                  <ClockIn
                    email={this.state.email}
                  />
                </div>
              </div>
            </div>
            <div className="col m1">
            </div>
            <div className="col m7 s12">
              <div className="row">
                <h5 className="blueHeader z-depth-3">Schedule</h5>
              </div>
              <div className="row" id="schedule_border">
                  <Schedule
                      schedules={this.state.schedules}
                      getSchedule={this.getSchedule}
                      email={this.state.email}
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
                  worksegments={this.state.worksegments}
                  getWorkSegment={this.getWorkSegment}
                  email={this.state.email}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m5 s12">
              <div className="row">
                <h5 className="blueHeader z-depth-3">Time Off Form</h5>
              </div>
              <div className="row" id="timeoffform_border">
                <TimeOffForm
                  timeoffsegments={this.state.timeoffsegments}
                  getTimeOffSegment={this.getTimeOffSegment}
                  email={this.state.email}
                />
              </div>
            </div>
            <div className="col m1">
            </div>
            <div className="col m6 s12">
              <div className="row">
                <h5 className="blueHeader z-depth-3">Time Off Requests</h5>
              </div>
              <div className="row" id="timeoffsegment_border">
                <TimeOffSegment
                  timeoffsegments={this.state.timeoffsegments}
                  getTimeOffSegment={this.getTimeOffSegment}
                  email={this.state.email}
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default ProfilePage;