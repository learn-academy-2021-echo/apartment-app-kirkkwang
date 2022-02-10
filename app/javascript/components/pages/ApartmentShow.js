import React, { Component } from "react";

export default class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props;
    return (
      <section>
        <h2>ApartmentShow</h2>
        {/* {console.log(apartment)} */}
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
      </section>
    );
  }
}
