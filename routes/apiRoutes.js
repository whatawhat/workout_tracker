//Import express router
//const router = require("express").Router();

//Import workout model via models directory
const db = require("../models");

module.exports = function(app) {
    //Gets all workouts
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    //get workout range
    app.get('/api/workouts/range', ({}, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    //add new workouts
    app.post('/api/workouts', (req, res) => {
        db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    //update workout
    app.put('/api/workouts/:id', (req, res) => {
        db.Workout.findByIdAndUpdate(
            {_id: req.params.id},
            {exercise: req.body}
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
};