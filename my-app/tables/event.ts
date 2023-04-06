import { nanoid } from 'nanoid';
const mongoose = require('mongoose')

const AddEvent = new mongoose.Schema({
    uniqueId: {
        type: String,
        required: true,
        default: () => nanoid(5),
        index: { unique: true },
      },
    name : {type : String, required : true},
    email : {type : String, required : true,},
    phone : {type : String, required : true},
    eventType : {type : String, required : true},
    eventdesc : {type : String, required : true},
    eventDate : {type : String, required : true},
    startTime : {type : String, required : true},
    endTime : {type : String, required : true},
    totalGuest : {type : String, required : true}

}, {timestamps : true});

mongoose.models = {};
export default mongoose.model.AddEvent || mongoose.model("AddEvent", AddEvent);