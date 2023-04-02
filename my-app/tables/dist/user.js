"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var SignUpSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });
mongoose.models = {};
exports["default"] = mongoose.model.user || mongoose.model("user", SignUpSchema);
