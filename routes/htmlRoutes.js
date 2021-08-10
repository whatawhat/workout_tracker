const path = require("path");

module.exports = function(app) {
    app.get("/exercise", (req, res) =>{
        res.sendFile(path.join(_dirname, "../public/exercise.html"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/stats.html"));
    });
};