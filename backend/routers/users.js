const { default: userEvent } = require('@testing-library/user-event');
const express=require('express');
const app=express();
const router=new express.Router();

let User = require('../models/loginmodels.js');



router.route('/').get((req,res)=>{
    User.find()
    .then(admdata=>res.json(admdata))
    .catch(err=>res.status(400).json('Error: ' + err));
}


)

// router.route('/signin').post((req,res)=>{
//     const username=req.body.username; 
//     const password=req.body.password;
//     const newUser= new User({
//         username, 
//         password,
//       })
//       newUser.save()
//       .then(() => res.json('User added!'))
//       .catch(err => res.status(400).json('Error: ' + err));
//     });
    
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(use => res.json(use))
      .catch(err => res.status(400).json('Error: ' + err));
  });





    

// router.post('/login',async (req,res)=>{
//     // console.log(req.body)
//     // res.json( {message:"awesome"})
//     try {
       
//         const {username,password}=req.body;
//         if(!username || !password){
//             return res.status(400).json({error:"Plz Filled all the required fields"})
//         }
//         const user_login= await User.findOne({username:username});

//         if(user_login){
//             const isMatch= password==user_login.password;
            
//            const token= await user_login.generateAuthToken();

//           console.log(token)
//         if(!isMatch){
//             res.status(400).json({error:"invalid credentials"});
//         } else{
//             res.status(400).json({error:"success"});
//         } 
//          }else{
//         res.json({message:"no found"})
//        }
    
        
       
//     } catch (error) {
//         console.log(error)
//     }
// })





module.exports=router;


