import React, { Component } from "react";
import { Link } from 'react-router';
import API from "../utils/API";
import { browserHistory } from 'react-router';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      email: "dfasjfdas",
      password: ""
    }
  }
  signOut() {
      API.signOut().then((res) => {
        this.setState({ email: "", password: "" });
        browserHistory.push('/');
      });
  }
  authenticated() {
    if (this.state.email) {
      return(
        <li>
          <Link activeClassName="active" onClick={this.signOut}>Sign Out</Link>
        </li>
      )
    } else if (!this.state.email) {
      return(
        <li>
          <Link to="/signuppage" activeClassName="active">Sign Up</Link>
        </li>
      )
    }
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper light-blue accent-2"><a className="brand-logo"><i className="large material-icons left">nbsp business</i> Busy Day</a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
            </li>
            {this.authenticated()}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;