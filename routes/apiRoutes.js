//Import express router
const router = require("express").Router();

//Import workout model via models directory
const db = require("../models");

//module.exports = function(app) {
    //Gets all workouts
    // router.get('/api/workouts', (req, res) => {
    //     db.Workout.find({})
    //     .then(dbWorkout => {
    //         res.json(dbWorkout);
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     });
    // });


    router.get('/api/workouts', (req, res) => {
        db.Workout.aggregate([{
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }])
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });


    //get workout range
    // router.get('/api/workouts/range', ({}, res) => {
    //     db.Workout.find({})
    //     .then((dbWorkout) => {
    //         res.json(dbWorkout);
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     });
    // });

    //get workout range
    router.get('/api/workouts/range', ({}, res) => {
        db.Workout.aggregate([{
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }])
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });



    //add new workouts
    router.post('/api/workouts/', (req, res) => {
        db.Workout.create(req.body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    //update workout
    // router.put('/api/workouts/:id', ( req, res) => {
    //     db.Workout.findByIdAndUpdate(
    //         {_id: req.params.id},
    //         {exercise: req.body}
    //     )
    //     .then((dbWorkout) => {
    //         res.json(dbWorkout);
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     });
    // });

    //update workout
    router.put("/api/workouts/:id", ({body, params}, res) => {
        db.Workout.findByIdAndUpdate(params.id, {$push: {exercises: body} })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });



    module.exports = router;