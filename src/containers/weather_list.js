import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData, index) {
		const temps = _.map(cityData.list.map(elem => elem.main.temp), temp => temp - 273);
		const humidities = cityData.list.map(elem => elem.main.humidity);
		const perssures = cityData.list.map(elem => elem.main.pressure);
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={cityData.city.name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units={'C'}/></td>
				<td><Chart data={perssures} color="green" units={'hPa'}/></td>
				<td><Chart data={humidities} color="black" units={'%'}/></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
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
	return { weather };
}

// Same functionality as above
// function mapStateToProps(state) {
// 	return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList);