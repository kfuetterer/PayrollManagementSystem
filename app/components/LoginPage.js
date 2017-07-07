import React, { Component } from "react";
 
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
  handleInputEmailChange(event) {
    this.setState({ 
      email: event.target.value
    });
  }
  handleInputPasswordChange(event) {
    this.setState({ 
      password: event.target.value
    });
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
            <div className="col s6 offset-s3" id="signin_border">
                <div className="form-group">
                  <br />

                  <label htmlFor="email">Email</label><br />
                  <input
                    onChange={this.handleInputEmailChange}
                    value={this.state.email}
                  />
                  <br />
                  <label htmlFor="password">Password</label><br />
                  <input
                    onChange={this.handleInputPasswordChange}
                    value={this.state.password}
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