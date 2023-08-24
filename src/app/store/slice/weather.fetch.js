import axios from "axios";

let response = null;
export const fetchWeather = async (inputPayload) => {
	return new Promise(async (resolve, reject) => {
		try {
			response = await axios.post(`http://localhost:5000/`, {
				city: inputPayload,
			});
		} catch (err) {
			response = null;
			console.log("err");
			reject("something went wrong");
		}
		if (response) {
			resolve(response.data);
		}
	});
};
