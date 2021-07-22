const mongoose=require('mongoose');


const studentSchema=new mongoose.Schema({
   
    studname:{
        type:String,
        required:true,
        minlength:3
    },
    studemail:{
        type:String,
        minlength:5,
        required:true
    },
    studpassword:{
        type:String,
        minlength:6,
        required:true
    },
    studgrade:{
        type:String,
        required:true,
        minlength:2
    },
    studsubjects:{
        type:Number,
        maxlength:2,
        required:true,
    },
    studattquiz:{
        type:Number,
        maxlength:5,
        required:true,
    },
    studlastquizscore:{
        type:Number,
        maxlength:2,
        
    },
    status:{
        type:String,
        minlength:2
    }
}
)


const Student=new mongoose.model('Student',studentSchema);


module.exports=Student;