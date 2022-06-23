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
	axios.post("http://localhost:3000/users");
});

module.exports = router;
