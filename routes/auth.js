const express = require("express");
const axios = require("axios").default;

const router = express.Router();

router.get("/", (req, res) => {
	res.render("login", { title: "Login" });
});

router.get("/register", (req, res) => {
	res.render("register", { title: "register" });
});

router.post("/login", (req, res) => {
	axios
		.post("http://localhost:3000/users", {
			email: req.body.email,
			password: req.body.password,
		})
		.then((response) => console.log(response))
		.catch((err) => console.log(err));
});

router.post("/register", (req, res) => {
	axios
		.post("http://localhost:3000/users", {
			email: req.body.email,
			password: req.body.password,
		})
		.then((response) => console.log(response))
		.catch((err) => console.log(err));
});

module.exports = router;
