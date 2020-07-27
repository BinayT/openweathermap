import React, { Component } from "react";
import ShowCity from "./ShowCity";

export default class Front_UI extends Component {
  state = {
    userCity: "",
    show: false,
  };

  inputChangedHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      show: false,
    });
  };

  showCityData = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.inputChangedHandler}
          name="userCity"
          value={this.state.userCity}
          placeholder="Type the city..."
        />
        <button onClick={this.showCityData}>Show</button>
        <br />
        {this.state.show ? (
          <ShowCity requestedCity={this.state.userCity} />
        ) : (
          "Your city will be shown here"
        )}
      </div>
    );
  }
}
