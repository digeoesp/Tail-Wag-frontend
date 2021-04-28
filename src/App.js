// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';


// CSS
import './App.css';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL
console.log(REACT_APP_SERVER_URL)
// Components
import Signup from './components/Signup'
import Login from './components/Login';
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Welcome from './components/Welcome'
import NoMatch from './components/NoMatch'
import PetApi from './components/PetApi'
import SearchBar from './components/SearchBar'

const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  console.log('****** Hititng a private route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login" />
  }} />
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
 
  useEffect(() => {
   let token;
   
   if(!localStorage.getItem('jwtToken')) {
     setIsAuthenticated(false);
     console.log('******** Authenticate is not FALSE')
   } else {
     token = jwt_decode(localStorage.getItem('jwtToken'));
     setAuthToken(localStorage.getItem('jwtToken'));
     setCurrentUser(token);
   }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('****** nowCurrent is here')
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }
  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      //remove token from localstorage
      localStorage.removeItem('jwtToken')
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">
      {/* <h1>Tail Wag</h1> */}
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container mt-5">
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route 
           path="/login"
           render={(props) => <Login {...props} 
           nowCurrentUser={nowCurrentUser} 
           setIsAuthenticated={setIsAuthenticated}
           user={currentUser} />}
          />
          
          <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
          <Route exact path="/" component={Welcome} />

          <Route path="/about" component={About} />

          <Route path="/pets" component={PetApi} />


          <Route path='*' component={NoMatch} /> 
        </Switch>

      </div>

      <Footer />
    </div>
  );
}

export default App;