const mongoose = require('mongoose')

const SignUpSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true}
}, {timestamps : true});

mongoose.models = {};
export default mongoose.model.user || mongoose.model("user", SignUpSchema);