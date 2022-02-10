import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <nav>
        <ul>
          <li>
            {logged_in && (
              <div>
                <a href={sign_out_route}>Sign Out</a>
              </div>
            )}
          </li>
          <li>
            {!logged_in && (
              <div>
                <a href={sign_in_route}>Sign In</a>
                <a href={new_user_route}>Sign Up</a>
              </div>
            )}
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/apartmentindex">Listings</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
