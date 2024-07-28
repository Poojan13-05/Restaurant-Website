const mongoose=require("mongoose")
const passwordcheck=/^(?=.[0-9])(?=.[!@#$%^&*])/

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        min:3,
        max:20,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:[10,"Password must be atleast 10 character long"],
        validate:{
            validator:function(value){
                return passwordcheck.test(value)
        },
        message:"Password must contain atleast one number and one special character"


    }
},
    email:{
        type:String,
        required:true,
    }

    
})
module.exports=mongoose.model("User",UserSchema);