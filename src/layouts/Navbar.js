import React from "react-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink} from "react-router-dom";
  
 
function MyNav() {
    return (
     
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">CRUD App</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink className="nav-link" exact to="/">Home</NavLink>
      <NavLink className="nav-link" exact to="/About">About</NavLink>
      <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
    </Nav>
  
  <NavLink className="btn btn-outline-light" to="/Users/AddUser">Add User</NavLink>
  </Navbar>
 

    );
}

export default MyNav;