import { Link } from 'react-router';
import React, { Component } from "react";
import API from "../../utils/API";

class NewCompany extends React.Component {
  constructor() {
    super();
    this.state = {
      company_name: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleButtonClick() {
    const newCompany = {
      company_name: this.state.company_name
    }
    API.saveCompany(newCompany).then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="company_name"
                onChange={this.handleInputChange}
              />
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

export default NewCompany;