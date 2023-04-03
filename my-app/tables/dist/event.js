"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var AddEvent = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    eventType: { type: String, required: true },
    eventdesc: { type: String },
    eventDate: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    totalGuest: { type: String, required: true }
}, { timestamps: true });
mongoose.models = {};
exports["default"] = mongoose.model.AddEvent || mongoose.model("AddEvent", AddEvent);
