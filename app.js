const express = require("express");
const app = express();

const port = 8000;
const server = app.listen(port, () => {
    console.log("Listening on port " + port);
    console.log(__dirname + "/public");
});

app.use(express.static(__dirname + "/public"));

const generalRoutes = require("./route/general.js").router

app.use(generalRoutes);
app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/view/error.html");
    console.log(req.url);
})
