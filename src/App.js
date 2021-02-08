import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 

  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import NoMatch from './Components/NoMatch/NoMatch';
import SingUp from './Components/LogIn/SingUp';
import LogIn from './Components/LogIn/LogIn';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BookingDetails from './Components/BookingDetails/BookingDetails';


  export const UserContext = createContext();

function App() {
const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>

        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking/:id">
            <Booking> </Booking>
          </Route>
          <Route path="/singup">
            <SingUp></SingUp>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/bookingDetails/:id">
            <BookingDetails></BookingDetails>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route> 
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
