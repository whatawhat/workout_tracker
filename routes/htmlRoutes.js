//Express router to fix middleware issue 
const router = require("express").Router();
const path = require("path");

module.exports = function(app) {
    //home page
    app.get("/", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/index.html"));
    });
    //exercise page
    app.get("/exercise", (req, res) =>{
        res.sendFile(path.join(_dirname, "../public/exercise.html"));
    });
    //stats page
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/stats.html"));
    });
};