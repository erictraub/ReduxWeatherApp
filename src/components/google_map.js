import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.map(this.refs.map, {
			zoom: 12,
			center: {
				this.props.lat,
				this.props.lon
			}
		});
	}

	reunder() {
		// this.refs.map
		return <div ref="map" />;
	}
};

export default GoogleMap;