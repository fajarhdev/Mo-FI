// const fetch = require("node-fetch");
const express = require("express");
const axios = require("axios").default;
const router = express.Router();

router.get("/", (req, res) => {
	// axios
	// 	.get("http://localhost:3000/brick")
	// 	// .then((response) => console.log(response))
	// 	.then((response) => res.render("landpage", { title: "Home", publicApiKey: response.data }))
	// 	.catch((err) => console.log(err));
	res.render("landpage", { title: "Mo-Fi" });
});

module.exports = router;
