import React from 'react-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link} from "react-router-dom";

const Home = ()=> {
   let [users,setUsers]=useState([]);

    useEffect(()=> {
         loadUser();
      },[]);

      const loadUser= async() => {
          const result= await axios.get("http://localhost:3000/users");
          setUsers(result.data.reverse());
      }

     const deleteuser= async id => {
       await axios.delete(`http://localhost:3000/users/${id}`);
       loadUser();
     }

    return(
        <div className="container">
        <h1>Users List</h1>

        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>UserName</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {users.map((user,index) => (
        <tr key={index}>
       <td>{index +1}</td>
       <td>{user.name}</td>
       <td>{user.username}</td>
       <td>{user.email}</td>
       <td>
           <Link className="btn btn-primary" to={`Users/${user.id}`}>View</Link>
           <Link className="btn btn-outline-primary m-2" to={`Users/EditUser/${user.id}`}>Edit</Link>
           <Link className="btn btn-danger" onClick={()=>deleteuser(user.id)}>Delete</Link>
       </td>
       </tr>
      ))}
   
    
   

  </tbody>
</Table>

        </div>
    );
}
export default Home; 