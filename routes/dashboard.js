const express = require("express");
const router = express.Router();
const axios = require("axios").default;

// const apiKey = process.env.API_KEY;`
const uriMovie = process.env.URI_MOVIE;
const uriGenre = process.env.URI_GENRE;
const uriImg = process.env.URI_IMG;
// const uriSearch = 'https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher'
const uriSearch = process.env.URI_SEARCH;

// fetching first page on first load
router.get("/", (req, res, next) => {
	axios
		.get(`${uriMovie}${process.env.API_KEY}`)
		.then((response) => response.data)
		.then((data) =>
			res.render("dashboard", { title: "Dashboard", data: data.results, uriImg: uriImg, page: data })
		)
		// .then((data) => console.log(data.results))
		.catch((err) => console.log(err));
});

// fetching others page depend on what page is request on pagination
router.get("/:page", (req, res) => {
	axios
		.get(`${uriMovie}${process.env.API_KEY}&page=${req.params.page}`)
		.then((response) => response.data)
		// .then((data) => console.log(data.results))
		.then((data) =>
			res.render("dashboard", { title: "Dashboard", data: data.results, uriImg: uriImg, page: data })
		)
		.catch((err) => console.log(err));
});

// search feuture using the tmbdb direct rest api
router.post("/", (req, res) => {
	axios
		.get(`${uriSearch}${apiKey}&query=${req.body.search}`)
		.then((response) => response.data)
		.then((data) =>
			res.render("dashboard", { title: "Dashboard", data: data.results, uriImg: uriImg })
		)
		.catch((err) => console.log(err));
	// console.log(req.body);
});

module.exports = router;
