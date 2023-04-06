"use strict";
exports.__esModule = true;
var nanoid_1 = require("nanoid");
var mongoose = require('mongoose');
var AddEvent = new mongoose.Schema({
    uniqueId: {
        type: String,
        required: true,
        "default": function () { return nanoid_1.nanoid(5); },
        index: { unique: true }
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    eventType: { type: String, required: true },
    eventdesc: { type: String, required: true },
    eventDate: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    totalGuest: { type: String, required: true }
}, { timestamps: true });
mongoose.models = {};
exports["default"] = mongoose.model.AddEvent || mongoose.model("AddEvent", AddEvent);
