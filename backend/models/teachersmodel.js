const mongoose=require("mongoose");


const teacherSchema= new mongoose.Schema({

teachname:{
    type:String,
    minlength:3,
    required:true,
},
teachemail:{
    type:String,
    minlength:5,
    required:true,
},
teachpassword:{
    type:String,
    minlength:6,
    required:true,
},
teachsubjects:{
    type:Number,
    minlength:2,
    required:true,
},
status:{
    type:String,
    minlength:2,
    required:true,
}


})

const Teacher=mongoose.model('Teacher',teacherSchema);

module.exports=Teacher;