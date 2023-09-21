// Written by Veloric

const express = require("express");
//const {google} = require("googleapis");
//const keys = require("/keys.json");


//Begin inital set up of web app

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(1337, (req, res) => console.log("Running on port 1337"));