const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a new instance of the schema
const workoutSchema = newSchema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
        name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
        },
        type: {
            type: String,
            trim: true,
            required: "Please enter type of exercise"
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number
        },
        }]
});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;