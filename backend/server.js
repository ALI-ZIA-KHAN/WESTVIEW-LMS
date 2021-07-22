const express=require('express');
const cors=require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

const app=express();
const port=process.env.PORT || 7781 ;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,  useUnifiedTopology: true ,useFindAndModify:false  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const studentsRouter = require('./routers/students');
const teachersRouter=require('./routers/teachers')
const usersRouter=require('./routers/users')


app.use('/students',studentsRouter);
app.use('/teachers',teachersRouter);
app.use('/users',usersRouter);


// app.use(function (req, res, next) {
//     /*var err = new Error('Not Found');
//      err.status = 404;
//      next(err);*/
  
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
  
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
//   //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
//     // Pass to next layer of middleware
//     next();
//   });
// app.use(function(req,res,next){
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers','Orgin,X-Requested-With,Content-Type,Accept');
//     next();
// });
// // 
//  middleware is used



app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})



