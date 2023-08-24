import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as weatherReducer } from "./slice/weather.slice.js";

const reducers = combineReducers({
	weather: weatherReducer,
});

const store = configureStore({
	reducer: { reducers },
});

export default store;
