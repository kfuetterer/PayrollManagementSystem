import React, { Component } from "react";
import API from "../utils/API";
 
class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            street_address: "",
            phone_number: "",
            email: "",
            password: "",
            pay_type: "",
            pay_rate: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
   handleInputChange (e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleButtonClick() {
        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            street_address: this.state.street_address,
            phone_number: this.state.phone_number,
            email: this.state.email,
            password: this.state.password,
            pay_type: this.state.pay_type,
            pay_rate: this.state.pay_rate
        }
        const newLogin = {
            email: this.state.email,
            password: this.state.password
        }
        API.signUp(newUser).then((res) => {
            console.log(res.data);
        });
        API.signUP(newLogin).then((res) => {
            console.log(res.data);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col m6 s12 offset-m3">
                        <div className="row">
                            <h5 className="blueHeader z-depth-3">Sign Up</h5>
                        </div>
                        <div className="row border">
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label><br />
                                <input type="text" value={this.state.first_name} name="first_name" onChange={this.handleInputChange} />
                                <label htmlFor="last_name">Last Name</label><br />
                                <input type="text" value={this.state.last_name} name="last_name" onChange={this.handleInputChange} />
                                <label htmlFor="street_address">Street Address</label><br />
                                <input type="text" value={this.state.street_address} name="street_address" onChange={this.handleInputChange} />
                                <label htmlFor="phone_number">Phone Number</label><br />
                                <input type="text" value={this.state.phone_number} name="phone_number" onChange={this.handleInputChange} />
                                <label htmlFor="email">Email</label><br />
                                <input type="text" value={this.state.email} name="email" onChange={this.handleInputChange} />
                                <label htmlFor="password">Password</label><br />
                                <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} />
                                <label htmlFor="pay_type">Pay Type</label><br />
                                <input type="text" value={this.state.pay_type} name="pay_type" onChange={this.handleInputChange} />
                                <label htmlFor="pay_rate">Pay Rate</label><br />
                                <input type="text" value={this.state.pay_rate} name="pay_rate" onChange={this.handleInputChange} />
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

export default SignUp;