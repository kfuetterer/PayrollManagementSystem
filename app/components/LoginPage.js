import React, { Component } from "react";
import API from "../utils/API";
import { browserHistory } from 'react-router';
 
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleButtonClick() {
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    API.signIn(user).then((res) => {
      console.log(res.data.id);
      if (res.data) {
        browserHistory.push('/profile/:' + res.data.id);
      }
    });
  }
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col m6 s12 offset-m3">
              <div className="row border">
                <div className="form-group">
                  <br />
                  <label htmlFor="email">Email</label><br />
                  <input
                    name="email"
                    className="validate"
                    type="email"
                    id="email"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <label htmlFor="password">Password</label><br />
                  <input
                    name="password"
                    className="validate"
                    type="password"
                    id="password"
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
        </div>
    );
  }
}

export default LoginPage;