const express=require('express');
const app=express();

const router=new express.Router();
let Teacher=require("../models/teachersmodel.js");




router.route('/').get((req,res)=>{
  Teacher.find()
  .then(techdata=>res.json(techdata))
  .catch(err=>res.status(400).json('Error: ' + err))
 

})


router.route('/:id').get((req,res)=>{
  Teacher.findById(req.params.id)
  .then(techdata=>res.json(techdata))
  .catch(err=>res.status(400).json('Error: ' + err))
});





router.route('/add').post((req,res)=>{
 

    const teachname=req.body.teachname;
    const teachemail=req.body.teachemail;
    const teachpassword=req.body.teachpassword;
    const teachsubjects=Number(req.body.teachsubjects);
       const status=req.body.status;
       

    const newTech=new Teacher({
        
     teachname,
     teachemail,
     teachpassword,
     teachsubjects,
    status

    })
   

    newTech.save()
    .then(() => res.json('Teacher added!'))
      .catch(err => res.status(400).json('Error: ' + err));
})


module.exports=router;