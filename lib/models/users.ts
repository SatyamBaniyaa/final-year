import mongoose, {Schema ,models } from "mongoose";
import { CgPassword } from "react-icons/cg";
import { string } from "zod";
import { required } from "zod/v4-mini";


const userSchema= new Schema({
  email: {type:String, required: true, unique:true},
  Password: {type:String, required:true }


})

export default models.User || mongoose.model('User', userSchema)
