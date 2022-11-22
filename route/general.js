const express = require('express');
const router = express.Router();
const path = require("path").resolve("./");

router.get("/", (req, res) => {
    res.sendFile(path + "/view/home.html");
})

router.get("/about", (req, res) => {
    res.sendFile(path + "/view/about.html");
})

// Add more pages

module.exports = { 
    router
}