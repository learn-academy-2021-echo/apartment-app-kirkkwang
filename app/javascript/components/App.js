import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ApartmentIndex from "./pages/ApartmentIndex";
import Home from "./pages/Home";
import users from "./mockUsers.js";
import { Nav, Navbar, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
    };
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/apartmentindex"
            render={() => <ApartmentIndex users={this.state.users} />}
          />
        </Switch>
      </Router>
    );
  }
}
