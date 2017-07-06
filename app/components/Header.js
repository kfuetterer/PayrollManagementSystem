import React, { Component } from "react";
import { Link } from 'react-router';

class Header extends Component {
  constructor() {
    super();
  }
  signOut() {
      API.signOut().then((res) => {
        this.setState({ email: "", password: "" });
      })
    }
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper light-blue accent-2"><a className="brand-logo"><i className="large material-icons left">nbsp business</i> Busy Day</a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
                  <li>
                    <Link to="/signup" activeClassName="active">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/profile" activeClassName="active">Profile</Link>
                  </li>
                  <li>
                    <Link to="/signout" activeClassName="active">Sign Out</Link>
                  </li>
                  <li>
                    {/*<Link to="/logout" activeClassName="active">Logout</Link>*/}
                  </li>
              </ul>
        </nav>
      </div>
    );
  }
}

export default Header;