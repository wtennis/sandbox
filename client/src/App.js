import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp'; 
import Home from './Home'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 


function App() {
  const [user, setUser] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    fetch('/me')
    .then(r=>{
      if(r.ok){
        r.json().then((user)=>{
          setUser(user)

          // `/${username}/projects`
          setIsLoading(false)
        })
      }else{
        setIsLoading(false)
      }
    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path ="/signin">
          <SignIn setUser = { setUser } />
        </Route>
        <Route path = "/signup"> 
          <SignUp setUser = { setUser } />
        </Route>
        <Route path ="/">
            <Home user={user} setUser={setUser} isLoading = {isLoading}></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
