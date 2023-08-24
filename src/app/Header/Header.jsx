import { useDispatch } from "react-redux";
import "./header.css";
import { useState } from "react";
import { getWeather } from "../store/slice/weather.slice";

const Header = () => {
	const [inputValue, setInputValue] = useState("");
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = () => {
		if (inputValue.trim() !== "") {
			dispatch(getWeather(inputValue));
		}
	};

	return (
		<header className='header'>
			<div className='header-elements'>
				<div className='input-container'>
					<input
						type='text'
						placeholder='Check the weather'
						onChange={handleInputChange}
						value={inputValue}
					/>
					<button className='header-button' onClick={handleSubmit}>
						Get Weather
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
