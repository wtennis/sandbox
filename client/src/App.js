import './App.css';
import SignIn from './Signin';
import SignUp from './SignUp'; 
import Home from './Home'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 


function App() {
  const [user, setUser] = useState(true)
  
  useEffect(() => {
    fetch('/me')
    .then(r=>{
      if(r.ok){
        r.json().then((user)=>{setUser(user)})
      }
    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path ="/signin">
          <SignIn onSignin = { setUser } />
        </Route>
        <Route path = "/signup"> 
          <SignUp setUser = { setUser } />
        </Route>
        <Route path ="/">
            <Home user={user} setUser={setUser}></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
