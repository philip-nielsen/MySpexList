const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path").resolve("./");

router.get("/", (req, res) => {
    res.sendFile(path + "/view/home.html");
})

module.exports = {
    router
}