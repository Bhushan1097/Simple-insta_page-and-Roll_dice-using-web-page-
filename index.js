const express = require("express");

const app = express();

let port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public")); // Make sure the public folder exists for serving static files

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/RollDice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6 + 1);
    res.render("rollDice.ejs", { num: diceVal });
});

app.get("/id/:username", (req, res) => {
    const { username } = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
    res.render("instagram.ejs", { data });
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
