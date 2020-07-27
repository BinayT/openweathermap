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
    });
  };

  enterPressed = (e) =>
    e.keyCode === 13
      ? this.setState({ show: true })
      : this.setState({ show: false });

  render() {
    const initialText = "Your city/country will be shown here";
    return (
      <div>
        <input
          type="text"
          onChange={this.inputChangedHandler}
          onKeyDown={this.enterPressed}
          name="userCity"
          value={this.state.userCity}
          placeholder="Press enter..."
        />
        {/* <button onClick={this.showCityData}>Show</button> */}
        <br />
        {this.state.show ? (
          <ShowCity
            requestedCity={this.state.userCity}
            initialText={initialText}
          />
        ) : (
          <h1>{initialText}</h1>
        )}
      </div>
    );
  }
}
