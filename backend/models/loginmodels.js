const mongoose=require("mongoose");


const loginSchema= new mongoose.Schema({

username:{
    type:String,
    minlength:3,
    required:true,
},

password:{
    type:String,
    minlength:3,
    required:true,
}

})

const User=mongoose.model('User',loginSchema);

module.exports=User;