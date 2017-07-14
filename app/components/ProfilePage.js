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
            employeeId: 1,
            schedules: [],
            timeoffsegments: [],
            worksegments: [],
            company: [],
            currentId: ""
        };
        this.getSchedule = this.getSchedule.bind(this);
        this.getTimeOffSegment = this.getTimeOffSegment.bind(this);
        this.getWorkSegment = this.getWorkSegment.bind(this);
    }
    componentWillMount() {
        var employeeId = this.props.params.employeeId
        this.getCompany();
        this.getSchedule();
        this.getTimeOffSegment();
        this.getWorkSegment();
        var res = employeeId.slice(1, 2);
        console.log(res);
        this.setState({employeeId: res});
    }
    getCompany() {
      API.getCompany(this.state.employeeId).then((res) => {
        this.setState({ company: res.data });
        console.log(this.state.company);
      })
    }
    getSchedule() {
      API.getSchedule(this.state.employeeId).then((res) => {
        this.setState({ schedules: res.data });
        console.log(this.state.schedules);
      });
    }
    getTimeOffSegment() {
        API.getTimeOffSegment(this.state.employeeId).then((res) => {
          this.setState({ timeoffsegments: res.data });
          console.log(this.state.timeoffsegments);
        });
    }
    getWorkSegment() {
        API.getWorkSegment(this.state.employeeId).then((res) => {
          let IDS = [];
          for (var i=0; i < res.data.length; i++) {
            IDS.push(res.data[i].id);
          }
          console.log(res.data[0].id);
          let currentWorkId = IDS.slice(-1)[0];
          console.log(currentWorkId);
          console.log(IDS);
          this.setState({ currentWorkId: currentWorkId });
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
                  <ClockIn 
                    employeeId={this.state.employeeId}
                    company={this.state.company}
                    getCompany={this.getCompany}
                    currentWorkId={this.state.currentWorkId}
                  />
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
                  employeeId={this.state.employeeId}
                  schedules={this.state.schedules}
                  getSchedule={this.getSchedule}
                  wait={600}
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
                  employeeId={this.state.employeeId}
                  worksegments={this.state.worksegments}
                  getWorkSegment={this.getWorkSegment}
                  wait={600}
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
                  employeeId={this.state.employeeId}
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
                  employeeId={this.state.employeeId}
                  timeoffsegments={this.state.timeoffsegments}
                  getTimeOffSegment={this.getTimeOffSegment}
                  wait={600}
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default ProfilePage;