import React from 'react-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import { NavLink} from "react-router-dom";

const Users = ()=> {
   let [users,setUsers]=useState([]);
   let {id} = useParams();
    useEffect(()=> {
         loadUser();
      },[]);

      const loadUser= async() => {
          const result= await axios.get(`http://localhost:3000/users/${id}`);
          setUsers(result.data);
      }


    return(
        <div className="container">
        <h1>Users Details</h1>

        <Table striped bordered hover>
  <thead>
    <tr>
      <th>User Id</th>
      <th>Name</th>
      <th>UserName</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Website</th>
    </tr>
  </thead>
  <tbody>
        <tr>
       <td>{users.id}</td>
       <td>{users.name}</td>
       <td>{users.username}</td>
       <td>{users.email}</td>
       <td>{users.phone}</td>
       <td>{users.website}</td>
       </tr>

       <tr>
        <td>
       <NavLink className="nav-link" exact to="/">Back To Home</NavLink>
       </td>
     </tr>
   

  </tbody>
</Table>

        </div>
    );
}
export default Users; 