'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cinemaSchedule = new Schema({
    name: String,
    place: String,
    city: String,
    sessions: [{
        title: String,
        censorship: String,
        special: Boolean,
        hours: [String]
    }]
});

let schedulesSchema = mongoose.model('schedules', cinemaSchedule);

module.exports = schedulesSchema;
