import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

export default class Navbar extends Component {

  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);

    } catch (error) {
      console.log(error.message);

    }
  }
  render() {
    return (

      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand navbar-item">
          <h4><b>STRAYA CHILDREN HOSPITAL</b></h4>
        </div>

        <div className="buttons">
          <a href="/index.html" className="button is-light">
            <strong>HOME</strong>
          </a>
          <a href="/" className="button is-light">
            <strong>BOOK APPOINTMENT</strong>
          </a>
          <a href="/doctor.html" className="button is-light">
            <strong>DOCTORS DETAILS</strong>
          </a>
          <a href="/location.html" className="button is-light">
            <strong>HOSPITAL LOCATION</strong>
          </a>
          <a href="/feedback" className="button is-light">
            <strong>FEEDBACK</strong>
          </a>
        </div>
      </nav >
    )
  }
}
