import React, { Component } from "react";
import API from "../utils/API";
 
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      email: "",
      password: ""
    };
    this.handleInputEmailChange = this.handleInputEmailChange.bind(this);
    this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleButtonClick() {
    const newUserLogin = {
      email: this.state.email,
      password: this.state.password
    }
    API.signIn(newUserLogin).then((res) => {
      this.setState({authenticated: true});
      console.log(res);
    });
  }
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col m6 s12 offset-m3" id="signin_border">
                <div className="form-group">
                  <br />

                  <label htmlFor="email">Email</label><br />
                  <input
                    className="validate"
                    type="email"
                    id="email"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <label htmlFor="password">Password</label><br />
                  <input
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
    );
  }
}

export default LoginPage;