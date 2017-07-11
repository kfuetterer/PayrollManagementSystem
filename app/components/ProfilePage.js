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
        console.log(this.state.schedules);
      });
    }
    getTimeOffSegment() {
        API.getTimeOffSegment().then((res) => {
          this.setState({ timeoffsegments: res.data });
          console.log(this.state.timeoffsegments);
        });
    }
    getWorkSegment() {
        API.getWorkSegment().then((res) => {
          this.setState({ worksegments: res.data });
          console.log(this.state.worksegments);
        });
    }
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col m4 s12">
              <div className="row">
                <h5 className="blueHeader z-depth-2">Clock In/Out</h5>
              </div>
              <div className="row border">
                <div className="col s12">
                  <ClockIn />
                </div>
              </div>
            </div>
            <div className="col m1">
            </div>
            <div className="col m7 s12">
              <div className="row">
                <h5 className="blueHeader z-depth-2">Schedule</h5>
              </div>
              <div className="row border">
                  <Schedule
                      schedules={this.state.schedules}
                      getSchedule={this.getSchedule}
                  />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="row">
                <h5 className="blueHeader z-depth-2">Hours Worked</h5>
              </div>
              <div className="row border">
                <WorkSegment
                  worksegments={this.state.worksegments}
                  getWorkSegment={this.getWorkSegment}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m5 s12">
              <div className="row">
                <h5 className="blueHeader z-depth-2">Time Off Form</h5>
              </div>
              <div className="row border">
                <TimeOffForm
                  timeoffsegments={this.state.timeoffsegments}
                  getTimeOffSegment={this.getTimeOffSegment}
                />
              </div>
            </div>
            <div className="col m1">
            </div>
            <div className="col m6 s12">
              <div className="row">
                <h5 className="blueHeader z-depth-2">Time Off Requests</h5>
              </div>
              <div className="row border">
                <TimeOffSegment
                  timeoffsegments={this.state.timeoffsegments}
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