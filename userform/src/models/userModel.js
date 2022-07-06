

import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,},
    email:{type:String,required:true,unique:true},
    phone:{type:Number,minlength:10,maxlength:10,unique:true},
    
})

const userModel = mongoose.model('user',userSchema)



export default userModel