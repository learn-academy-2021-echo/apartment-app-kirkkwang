import React from "react";
import keyfinder from "../assets/keyfinder.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
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
      <nav>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img src={keyfinder} alt="Key Finder Logo" />
            Apartment App
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {!logged_in && (
                  <NavLink href={sign_in_route}>Sign In/Register</NavLink>
                )}
                {logged_in && (
                  <NavLink href="/apartmentprotectedindex">My Listings</NavLink>
                )}
              </NavItem>
              <NavItem>
                <NavLink href="/apartmentindex">Listings</NavLink>
              </NavItem>
              <NavItem>
                {logged_in && <NavLink href={sign_out_route}>Sign Out</NavLink>}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    );
  }
}
