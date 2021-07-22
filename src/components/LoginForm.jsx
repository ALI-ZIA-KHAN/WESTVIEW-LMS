

import "./LoginForm.css";
import React from 'react';
import {useEffect,useState} from 'react';
import {useHistory } from "react-router";
import {NavLink} from 'react-router-dom';
import axios from 'axios'

function Login() {


	const history = useHistory();

   
	//for logging in
	 var take_username;  //getting username
	 var take_password;  //getting password
	 var role;
	 var _id;            //getting id
  
  
   //Arrays for Admin  
	const [admname,setAdmname]=useState([]); //for all admin name
	const [admpassword,setAdmpassword]=useState([]);//for all admin password
	const[admid,setAdminid]=useState([]);  //for id
  
  
  
  
  //Arrays for Student
  
  const [stuname,setStuname]=useState([]);
  const [stupassword,setStupassword]=useState([]);
  const [stuid,setStuid]=useState([]);
  
  
  
  //Arrays for Teacher
  
  const [teachname,setTeachname]=useState([]);
  const [teachpassword,setTeachpassword]=useState([]);
  const [teachid,setTeachid]=useState([]);
  
  
	// const [students,setStudents]=useState([]);
  
  
  
  
  //to get input filed's values
  
	const[getinpVal,setinpVal]=useState({
	  username:"",
	  password:"",
	  _role:""
	});
  
  
  //to send data to next page
	const [toSend,setTosend]=useState({
	  sending_name:"",
	  sending_password:"",
	})
  
  
	  
  
  
  
  
	//on page load all data of admin comes in arrays
	useEffect(() => {
  
  
  //for admin
  
	  axios.get('http://localhost:7781/users/').then(
		(res)=>{
		  console.log(res.data)
		  setAdmname(
			 res.data.map(alladmname=>alladmname.username),
		 )
		 setAdmpassword(
		   res.data.map(alladminpassword=>alladminpassword.password)
		 )
		 setAdminid(
		  res.data.map(alladminid=>alladminid._id)
		 ) 
		}).catch((err)=>{
		  console.log(err)
		})
  
  
  
  
  
  
  
  
  //for student
		
	  axios.get('http://localhost:7781/students/').then(
		(res)=>{
		  console.log(res.data)
		  setStuname(
			 res.data.map(allstuname=>allstuname.studname),
		 )
		 setStupassword(
		   res.data.map(allstupassword=>allstupassword.studpassword)
		 )
		 setStuid(
		  res.data.map(allstuid=>allstuid._id)
		 ) 
		}).catch((err)=>{
		  console.log(err)
		})
  
  
  
  
		axios.get('http://localhost:7781/teachers/').then(
		(res)=>{
		  console.log(res.data)
		  setTeachname(
			 res.data.map(allteacname=>allteacname.teachname),
		 )
		 setTeachpassword(
		   res.data.map(allteacpassword=>allteacpassword.teachpassword)
		 )
		 setTeachid(
		  res.data.map(allteacid=>allteacid._id)
		 ) 
		}).catch((err)=>{
		  console.log(err)
		})
  
  
		
  
	  },[])
  
  
  
  
  
  
  //For students
			
	//     axios.get('http://localhost:7785/students').then((response)=>{
	//       // console.log(response.data);
	//       setStudents(response.data);
	//       console.log(students)
	//  }).catch((err)=>{
	//    console.log(err);
	//  });
  
	  
	   
	  
  
	  
  
  
  
	 
  
	  
  
	  
  
  const try_two=()=>{
  
	
  
  // console.log(document.getElementById('user_name').value)
  // console.log(document.getElementById('password').value)
  setinpVal({
   username : document.getElementById('user_name').value,
   password : document.getElementById('pass_word').value
  })
  
  
  
  // console.log(getinpintoit.username);
  // console.log(getinpintoit.password)
  
  
  
  
  
  // axios.post('http://localhost:7785/users/login').then((response)=>{
  //   // console.log(response.data);
  //   console.log(response.data);
  // }).catch((err)=>{
  // console.log(err);
  // });
  
  
  }
  
  const getinpintoit={
	username:getinpVal.username,
	password:getinpVal.password,
  }
  
  
  
  
  take_username=getinpintoit.username;
  take_password=getinpintoit.password;
  
  console.log(take_username);
  console.log(take_password);
  
  // const try_one =()=>{
  //   //  students.map(currentstu => {
  
  //   //     // <Tosend value={currentcus.username}>
  //   //        console.log(currentstu.studentname,currentstu.password) 
		
  //        // </Tosend>
  //     // }
  //     // )
  
  // console.log("admname=>",stuname)
  
  // console.log("usearr", stupassword)
  
  // console.log("admid",stuid)
  
  // }
  
  const try_me=()=>{
	  
	    console.log("admname=>",stuname)
  
  console.log("usearr", stupassword)
  
   console.log("admid",stuid)
  
  }
  
  const log_in=()=>{
	
	let result=true;
  
	if (document.getElementById('admin').checked) {
	  role = document.getElementById('admin').value;
	}
	else if (document.getElementById('student').checked) {
	  role = document.getElementById('student').value;
	}
	else if(document.getElementById('teacher').checked){
	  role = document.getElementById('teacher').value;
	}else{
	  alert("Select a Role please")
	}
  
	// console.log(role)
  
  
  if(role=="admin"){
  
	for(var i=0;i<admname.length;i++){
	  
	  if(admname[i]==take_username && admpassword[i]==take_password){
		result=false;
		_id=admid[i];
		console.log(_id);
		break;
	  }
	}
	if(result!=false){
	  alert("Wrong Credentials")
	   history.push({
		 pathname:'/'}
		 );
  
	}else if(result==false){
	 alert("Sign in Succcessful");
	 setTosend({
	  sending_name:take_username,
	  sending_password:take_password
	})
  
  
   // console.log(toSend.sending_name,toSend.sending_password)
  
   history.push({
	 pathname:  "/dashboard/"+_id,
	 state: {
	   response: toSend
	 } 
  });
  
  
  
  
	}
  
  
  
  
  
  
  
  
  }else if(role=="student"){
  
  
  
  
	for(var i=0;i<stuname.length;i++){
	  
	  if(stuname[i]==take_username && stupassword[i]==take_password){
		result=false;
		_id=stuid[i];
		console.log(_id);
		break;
	  }
	}
	if(result!=false){
	  alert("Wrong Credentials")
	   history.push({
		 pathname:'/'}
		 );
  
	}else{
	 alert("Sign in Succcessful");
  
	 setTosend({
	  sending_name:take_username,
	  sending_password:take_password
	})
  
   // console.log(toSend.sending_name,toSend.sending_password)
  
   history.push({
	 pathname:  "/dashboard/"+_id,
	 state: {
	   response: toSend
	 } 
  });
  
  
	}
	
  
  
  
  
  }else if(role=="teacher"){
  
  
  
  
	for(var i=0;i<teachname.length;i++){
	  
	  if(teachname[i]==take_username && teachpassword[i]==take_password){
		result=false;
		_id=teachid[i];
		console.log(_id);
		break;
	  }
	}
	if(result!=false){
	  alert("Wrong Credentials")
	   history.push({
		 pathname:'/'}
		 );
  
	}else{
	 alert("Sign in Succcessful")
	 setTosend({
	  sending_name:take_username,
	  sending_password:take_password
	})
  
   // console.log(toSend.sending_name,toSend.sending_password)
  
   history.push({
	 pathname:  "/dashboard/"+_id,
	 state: {
	   response: toSend
	 } 
  });
  
  
	}
	 
  
  
  
  
  
  
  
  }
  
  else if(role=""){
  
	alert("Ooops !   WRONG CREDENTIALS")
  }
  
  
  
  }























































  return (
    <div>
      <img class="wave" src="https://github.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true" />
	<div class="login-container">
		<div class="img">
			<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg" />
		</div>
		<div class="login-content">
			<form >
				<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" />
				<h2 class="title">Welcome</h2>
				<div>
           		    	<h5>Choose one...</h5>
					  <input type="radio" id="admin" name="role" value="admin"/>
                      <label for="admin">Admin</label>
                      <input type="radio" id="student" name="role" value="student"/>
                      <label for="student">Student</label>
					  <input type="radio" id="teacher" name="role" value="teacher"/>
                      <label for="teacher">Teacher</label>
            	   </div>
				   <br/>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>


           		   <div class="div">
           		   		<h5>Username</h5>
           		   		{/* <input type="text" class="input" /> */}
							  <input type="text" class="input" id="user_name" name="username" />
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	{/* <input type="password" class="input" /> */}
						   <input type="password" class="input" id="pass_word" name="password" />
            	   </div>
            	</div>
            	<a class = "log" href="/">Forgot Password?</a>
            	{/* <input type="submit" class="btn-log" value="Login" /> */}
                <button class="btn-log" onClick={try_two}>Demo two</button>
                
				<button  onClick={try_me}>Demo two</button>
                   <button class="btn-log" onClick={log_in}>Sign In</button>

{/* <button onClick={toCheck}>Demo</button> */}



            </form>
        </div>
    </div>
    </div>
  );

  
}

export default Login;