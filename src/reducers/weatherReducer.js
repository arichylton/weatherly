export default (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_WEATHER':
			return { ...action.payload.area, ...action.payload.weather, ...action.payload.allWeather, ...action.payload.todayWeather, ...action.payload.weatherData };
		default:
			return state;
	}
};
