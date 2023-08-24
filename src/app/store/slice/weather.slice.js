import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./weather.fetch.js";

export const weatherSlice = createSlice({
	name: "weatherSlice",
	initialState: { error: "nothing", weather: {} },
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getWeather.fulfilled, (state, action) => {
				state.weather = action.payload;
				state.error = "success";
			})
			.addCase(getWeather.rejected, (state) => {
				state.error = "error";
			});
	},
});

export const getWeather = createAsyncThunk(
	"getWeather",
	async (inputPayload) => {
		const res = await fetchWeather(inputPayload);
		return res;
	}
);

export const { reducer } = weatherSlice;
