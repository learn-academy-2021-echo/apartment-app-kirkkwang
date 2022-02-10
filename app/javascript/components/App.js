import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentShow from "./pages/ApartmentShow";
import Home from "./pages/Home";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
    };
  }

  componentDidMount() {
    this.readApartment();
  }

  readApartment = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((apartmentsArray) => this.setState({ apartments: apartmentsArray }))
      .catch((errors) => console.log("Apartment read errors:", errors));
  };

  // createApartment = (newApartment) => {
  //   fetch("/apartments", {
  //     body: JSON.stringify(newApartment),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //   })
  //     .then((response) => response.json())
  //     .then(() => this.readApartment())
  //     .catch((errors) => console.log("Apartment create errors:", errors));
  // };

  // updateApartment = (updateApartment, id) => {
  //   fetch(`/apartments/${id}`, {
  //     body: JSON.stringify(updateApartment),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "PATCH",
  //   })
  //     .then((response) => response.json())
  //     .then(() => this.readApartment())
  //     .catch((errors) => console.log("Apartment update errors:", errors));
  // };

  // deleteApartment = (id) => {
  //   fetch(`/apartments/${id}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then(() => this.readApartment())
  //     .catch((errors) => console.log("Apartment update errors:", errors));
  // };

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
            path="/apartmentshow/:id"
            render={(props) => {
              let id = +props.match.params.id;
              let apartment = this.state.apartments.find(
                (apartment) => apartment.id === id
              );
              return <ApartmentShow apartment={apartment} />;
            }}
          />
          <Route
            path="/apartmentindex"
            render={() => <ApartmentIndex apartments={this.state.apartments} />}
          />
        </Switch>
      </Router>
    );
  }
}
