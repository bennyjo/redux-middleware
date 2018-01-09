import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const city = cityData.city;
    const temperatures = cityData.list
      .map(weather => weather.main.temp)
      .map(temp => temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={city.name}>
        <td>{city.name}</td>
        <td><GoogleMap lat={city.coord.lat} lon={city.coord.lon}/></td>
        <td>
          <Chart data={temperatures} color='orange' unit='°C'/>
        </td>
        <td>
          <Chart data={pressures} color='blue' unit='hPa' />
        </td>
        <td>
          <Chart data={humidities} color='red' unit='%' />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="weather-list table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Map</th>
              <th>Temperature (°C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
              {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      );
  }
}

function mapStateToProps({ weather }) {
  console.log(weather);
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);