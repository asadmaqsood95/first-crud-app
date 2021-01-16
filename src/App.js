import './App.css';
import  Home  from "./components/Home";
import  About  from "./components/About";
import  Contact  from "./components/Contact";
import Navbar from "./layouts/Navbar";
import AddUser from "./components/Users/AddUser";
//import PageNotFound from "./components/PageNotFound"

import {
  BrowserRouter as Router,Switch,
  Route,
} from "react-router-dom";
import EditUser from './components/Users/EditUser';
import Users from './components/Users/Users';

 

function App() {
  return (
  <Router>
      <div className="App">
     <Navbar></Navbar>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/About" component={About} />
       <Route exact path="/Contact" component={Contact} />
       <Route exact path="/Users/AddUser" component={AddUser} />
       <Route exact path="/Users/EditUser/:id" component={EditUser} />
       <Route exact path="/Users/:id" component={Users} />
      {/* <Route component={PageNotFound} />*/}
    </Switch>
    </div>
  </Router>
  );
}

export default App;
 