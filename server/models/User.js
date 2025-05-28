import mongoose  from "mongoose";

const userSchema = mongoose.Schema({
    _id:{type:String,required:true},
    username:{type:String,required:false},
    email:{type:String,required:true},
    image:{type:String,required:false},
    role:{type:String,enum:["user","hotelOwner"],default:"user"},
    recentSearchedCities:[{type:String,required:false}]
},{timestamps:true});

const User = mongoose.model("User",userSchema);


export default User;