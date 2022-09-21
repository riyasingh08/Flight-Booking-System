import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function BoardUser()
{

 const [allcustomer,setAllcustomer] = useState([]);
 const fecthdata = () =>
 {
  
  axios.get('http://localhost:8098/api/auth/getallusers')
  .then(response => setAllcustomer(response.data));
 }
 useEffect(() => {
  fecthdata();
  console.log(allcustomer);
}, []);
return(
  <div className="adminback">
  <h2><center>Sign Up Details All Users</center></h2>
  <br></br>
  <br></br>
  <br></br>
  <center><table className="tabledesign table-bordered table-striped" border={3} >
  <thead style={{color:"rgb(3, 4, 114)"}}>
        <tr>
          <th><center>ID</center></th>
          <th><center>User_Name</center></th>       
          <th><center>Email</center></th>
          <th style={{width:"100px"}}><center>Password</center></th>
          <th><center>User_Role</center></th>
        </tr>
  </thead> 
  <tbody>
  {
    allcustomer.map((customer,index)=>(
      <tr>
      <td>{customer.id}</td>
      <td>{customer.username}</td>
      <td>{customer.email}</td>
      <td style={{width:"100px"}}>{customer.password}</td>
      <td>{customer.roles.map((rolename)=> (
        <div>{rolename.name}</div>
      ))}</td>
      </tr>

    ))
  }
  </tbody>
  </table>
  </center> 
  <br></br>
   <br></br>
  </div>
)
}
export default BoardUser;