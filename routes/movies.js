const { response } = require("express");
const express = require("express");
const axios = require("axios").default;
const router = express.Router();

const apiKey = process.env.API_KEY;
const uriDetails = process.env.URI_DETAILS;
const uriImg = process.env.URI_IMG;

router.get("/:id", (req, res) => {
	axios
		.get(`${uriDetails}${req.params.id}?api_key=${apiKey}`)
		.then((response) => response.data)
		.then((data) =>
			res.render("movie", { title: data.original_title, data: data, uriImg: uriImg })
		)
		// .then((data) => console.log(data.genres.length))
		.catch((err) => console.log(err));
});

module.exports = router;
