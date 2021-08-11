//Express router to fix middleware issue 
const router = require("express").Router();
const path = require("path");

//module.exports = function(app) {
    //home page
    router.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //exercise page
    router.get("/exercise", (req, res) =>{
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    //stats page
    router.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    module.exports = router;