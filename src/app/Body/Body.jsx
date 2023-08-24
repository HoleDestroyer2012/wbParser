import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./body.css";

const Body = () => {
	const [temperatureSign, setTemperatureSign] = useState("");
	const { error, weather } = useSelector((state) => state.reducers.weather);
	useEffect(() => {
		if (error === "success" && Math.round(weather.main.temp - 273) > 0) {
			setTemperatureSign("+");
		} else {
			setTemperatureSign("");
		}
	}, [error, weather]);
	console.log(error, weather);
	return (
		<div className="weather-body">
			{error === "success" ? (
				<div className='body-city'>
					<div className='city-name'>{weather.name}</div>
					<div className='main-weather'>
						{weather.weather[0].description}
					</div>
					<div className='temperature'>
						{temperatureSign}
						{Math.round(weather.main.temp - 273)}°C
					</div>
					<div className='wind-speed'>{weather.wind.speed} km/h</div>
				</div>
			) : error === "nothing" ? (
				<p>On this website you can check the weather</p>
			) : (
				<p>Something went wrong...</p>
			)}
		</div>
	);
};

export default Body;
