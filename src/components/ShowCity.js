import React from "react";
import { KEY } from "./API_KEY";
import axios from "axios";

export default class ShowCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      API_KEY: `http://api.openweathermap.org/data/2.5/weather?q=${this.props.requestedCity}&appid=${KEY}`,
      items: [],
      weather: [],
      main: [],
      recieved: false,
    };
  }

  componentDidMount = async () => {
    await axios
      .get(this.state.API_KEY)
      .then((items) =>
        this.setState({
          items: items.data,
          weather: items.data.weather[0],
          main: items.data.main,
          recieved: true,
        })
      )
      .then(() => console.log(this.state.items));
  };

  render() {
    const { weather, main, name } = this.state.items;
    if (!this.state.recieved) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        {this.state.items.length === 0 ? (
          <h1>The City you typed doesn't exist</h1>
        ) : (
          <div>
            <h1>{name}</h1>
            <img
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            />
            <p>Description: {weather[0].main}</p>
            <h3>Temp: {(main.temp - 273.15).toFixed(2)}</h3>
            <h4>Feels like: {(main.feels_like - 273.15).toFixed(2)}</h4>
          </div>
        )}
      </div>
    );
  }
}
