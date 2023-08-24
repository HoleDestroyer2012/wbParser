import express from "express";
import cors from "cors";
import { getWeather } from "./middleware.js";

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(getWeather)

app.get("/", (req, res) => {
	res.send("123");
});

app.post("/", (req, res) => {
	res.send(req.getWeather);
});

app.listen(PORT, () => {
	console.log(`server has been started on port: ${PORT}`);
});
