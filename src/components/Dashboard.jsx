import React, {useEffect, useState } from 'react';
import {Button, Breadcrumb ,Card} from 'react-bootstrap';

import './dashboard.css';
import Portalnavbar  from './Portalnavbar';
import Portalmainbody from './Main';
import {useParams,useLocation} from 'react-router-dom';
import axios from 'axios';




function Dashboard(props){


    var location =useLocation();
    const _id=[location.pathname.slice(11)]
     console.log(_id)
  console.log(props.location.toSend)

const [name,setName]=useState("");
const [noofsubj,setNoofsubj]=useState("");
const [status,setStatus]=useState("");
const [grade,setGrade]=useState("")
const [school,setSchool]=useState("Westview School")

const [studdata,setStuddata]=useState({})



useEffect(() => {


    
       

           axios.get('http://localhost:7781/users/'+_id).then(
              (resadm)=>{
                console.log("adminresponse "+ JSON.stringify(resadm.data))
                if(resadm!=null){
                  setName(
                    resadm.data.username
                   ) 
                   console.log(name)
                   setStatus(
                    resadm.data.password
                   ) 
                  console.log(status)
                }
   
             }).catch((err)=>{
              console.log("err is " + err)
            })





            axios.get('http://localhost:7781/teachers/'+_id).then(
              (resteach)=>{
                console.log("teachrrs response "+ JSON.stringify(resteach.data))
              if(resteach!=null){
                setName(
                  resteach.data.teachname
                 ) 
                 console.log(name)
                 setNoofsubj(
                  resteach.data.teachsubjects
                 ) 
                 console.log(noofsubj)
                 
                 setStatus(
                  resteach.data.status
                 ) 

                 console.log(status)

              }

             }).catch((err)=>{
              console.log("err is " + err)
            })








            axios.get('http://localhost:7781/students/'+_id).then(
              (resstu)=>{
                console.log("students response " + JSON.stringify(resstu.data))

                setName(
                  resstu.data.studname
                 ) 
                 console.log(name)
                 setNoofsubj(
                  resstu.data.studsubjects
                 ) 
                 console.log(noofsubj)
                 setGrade(
                  resstu.data.studgrade
                 ) 
                 console.log(grade)
                 setStatus(
                  resstu.data.status
                 ) 

                 console.log(status)




             }).catch((err)=>{
              console.log("err is " + err)
            })



//     axios.get('http://localhost:7785/users/'+id).then(
//       (resadm)=>{                                            // ( { { ( { { ( { } ) } } ) } )
//         console.log("admin response "+ resadm.data)
//        if(resadm==null){
           
//         axios.get('http://localhost:7785/teachers/'+id).then(
//           (resteach)=>{;
//             console.log("teacher response "+ resteach.data)
//           if(resteach==null){
           

//             axios.get('http://localhost:7785/students/'+id).then(
//               (resstu)=>{
//                 console.log("students response "+ resstu.data)
//              }).catch((err)=>{
//               console.log("err is " + err)
//             })

//        }
        
//         // setName(res.data.studname);
//         // setStatus(res.data.status);
       
//       }).catch((err)=>{
//         console.log("err is " + err)
//       })
    
// }
//  }).catch((err)=>{
//    console.log("err is " + err)
//  }),[]
})
  
    return(
        <>
{/* navbar */}


<Portalnavbar status={status}/>


{/* 
offcanvas */}




<div className="offcanvas offcanvas-start sidebar-nav  left-side bg-dark  " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
 
  <div className="offcanvas-body p-0">


  <nav className="navbar-dark">
      <ul className="navbar-nav">
          <li>
              <div className="text-dark fw-bold text-uppercase px-3">
                    INFORMATION
              </div>
          </li>
          <li>
              <a href="#" className="nav-link ms-5">
              <img src="data:image/png;base64,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" alt="Avatar"  class="avatar"/>
              </a>
              <a href="#"  className="text-dark fw-bold text-uppercase px-5 center ">Mustafa </a>
          </li>
          <li className="my-4">
              Lorem Ipsum
             <span><i class="bi bi-caret-down"></i></span> 
              <hr className="dropdown-divider" />
          </li>
          <li>
              <div className="text-uppercase fw-bold  px-3">
                    Name : {name}
              </div>
              <hr className="dropdown-divider" />
          </li>
          <li>
              <div className="text-uppercase fw-bold  px-3">
                    Grade : {noofsubj}
              </div>
              <hr className="dropdown-divider" />
          </li>
          <li>
              <div className="text-uppercase fw-bold  px-3">
                    School Name : {school}
              </div>
              <hr className="dropdown-divider" />
          </li>
          <li>
              <div className="text-uppercase fw-bold  px-3">
                    Status :{ status}
              </div>
              <hr className="dropdown-divider" />
          </li>
      </ul>

  </nav>

    







  </div>
</div>



<Portalmainbody/>







     {/* <Card classNameName="mb-3" style={{"color":"#000"}}> */}

    {/* <Card.Img src="https://picsum.photos/50/50"> */}
    {/* <Card.Img >
    </Card.Img>
    <Card.Body>
    <Card.Title>
            Card Example
    </Card.Title>
     <Card.Text>
        Text of Card
     </Card.Text>

     </Card.Body>

     </Card> */}
        
  {/* <Button variant="success" >Test Button</Button>
  <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
      */}

        </>
    );
}

export default Dashboard;