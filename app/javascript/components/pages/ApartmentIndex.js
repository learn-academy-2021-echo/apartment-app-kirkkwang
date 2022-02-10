import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props;
    return (
      <section>
        <h1>Apartment Listings</h1>
        <div className="Index">
          {apartments.map((apartment) => {
            return (
              <NavLink
                to={`/apartmentshow/${apartment.id}`}
                key={apartment.id}
                style={{ textDecoration: "none" }}
              >
                <div className="Apartment Info">
                  <ul>
                    <li>Street: {apartment.street}</li>
                    <li>City: {apartment.city}</li>
                    <li>State: {apartment.state}</li>
                    <li>Manager Name: {apartment.manager_name}</li>
                    <li>Manager Email: {apartment.manager_email}</li>
                    <li>Monthly Rent: {apartment.monthly_rent}</li>
                    <li>Bedrooms: {apartment.number_of_bedrooms}</li>
                    <li>Bathrooms: {apartment.number_of_bathrooms}</li>
                    <li>Pets: {apartment.allow_pets ? "Yes" : "No"}</li>
                    <li>User ID: {apartment.user_id}</li>
                  </ul>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    );
  }
}
