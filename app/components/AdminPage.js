import React, { Component } from "react";
import NewCompany from "./admin/NewCompany";
import NewSchedule from "./admin/NewSchedule";
import API from "../utils/API";
import LoginPage from "./LoginPage";

class AdminPage extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col m4 s12">
              <div className="row">
                <h5 className="blueHeader z-depth-2">Assign New Company</h5>
              </div>
              <div className="row border">
                <div className="col s12">
                  <NewCompany
                  />
                </div>
              </div>
            </div>
            <div className="col m1">
            </div>
            <div className="col m7 s12">
              <div className="row">
                <h5 className="blueHeader z-depth-2">Assign New Schedule</h5>
              </div>
              <div className="row border">
                <NewSchedule
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default ProfilePage;