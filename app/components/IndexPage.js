import { Link } from 'react-router';
import React, { Component } from "react";
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';

class IndexPage extends Component {
    constructor() {
        super();
        this.state = {
            user: "some value" // React.PropTypes.object
        };
    }
    render() {
        return (
        <div className="container">
            <h2 className="text-center">Welcome { this.state.user }</h2>
            <hr />
            <div className="jumbotron">
            <p>
                <strong>Payroll Management System</strong>
            </p>
            <p>Manage your day easily and efficiently.</p>
            <ol className="lead">
                <NotAuthenticated>
                    <li><LoginLink /></li>
                </NotAuthenticated>
                <li><Link to="/profile">Custom Profile Data</Link></li>
            </ol>
            </div>
        </div>
        );
    }
};

export default IndexPage;