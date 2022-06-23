const express = require("express");
const router = express.Router();
const axios = require("axios").default;

const apiKey = process.env.API_KEY;
const uriMovie = "https://api.themoviedb.org/3/discover/movie?api_key=";
const uriGenre = "https://api.themoviedb.org/3/genre/movie/list?api_key=";
const uriImg = "https://image.tmdb.org/t/p/w500";

// fetching first page on first load
router.get("/", (req, res, next) => {
	axios
		.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`)
		.then((response) => response.data)
		.then((data) =>
			res.render("dashboard", { title: "Dashboard", data: data.results, uriImg: uriImg })
		)
		// .then((data) => console.log(data.results))
		.catch((err) => console.log(err));
	// res.render("dashboard", { title: "dashboard" });
});

// fetching others page depend on what page is request on pagination
router.get("/:page", (req, res) => {
	axios
		.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&page=${req.params.page}`
		)
		.then((response) => response.data)
		.then((data) =>
			res.render("dashboard", { title: "Dashboard", data: data.results, uriImg: uriImg })
		)
		.catch((err) => console.log(err));
});

module.exports = router;
