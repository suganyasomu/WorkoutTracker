const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    day:{
        type:String,
        trim:true
    },

    exercises:Array
})

const User = mongoose.model("User", UserSchema);
module.exports = User;