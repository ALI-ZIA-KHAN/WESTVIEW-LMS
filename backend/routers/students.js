const express=require('express');
const app=express();
const router=new express.Router();
let Student = require('../models/studentsmodel.js');



router.route('/').get((req,res)=>{
    Student.find()
    .then(studata=>res.json(studata))
    .catch(err=>res.status(400).json('Error: ' + err));
})





router.route('/:id').get((req,res)=>{
    Student.findById(req.params.id)
    .then(studata=>res.json(studata))
    .catch(err=>res.status(400).json('Error: ' + err))
  });
  
    
router.route('/add').post((req,res)=>{
   
    const studname=req.body.studname;
    const studemail=req.body.studemail;
    const studpassword=req.body.studpassword;
    const studgrade=req.body.studgrade;
    const studsubjects=Number(req.body.studsubjects);
    const studattquiz=Number(req.body.studattquiz);
    const studlastquizscore=Number(req.body.studlastquizscore);
    const status=req.body.status;

    const newStud= new Student({
       studname,
       studemail,
       studpassword,
       studgrade,
       studsubjects,
       studattquiz,
       studlastquizscore,
       status
      })
    
      newStud.save()
      .then(() => res.json('Student added!'))
      .catch(err => res.status(400).json('Error: ' + err));
    });
    


    







module.exports=router;


