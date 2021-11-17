import React from 'react';
import LoginForm from './views/LoginForm';
import Homepage from './views/Homepage';

function App() {

  const Login = credentials => {
    console.log(credentials);
    // TODO: collect username in order to use it..
    // TODO: check if the user exists in the DB
    if (credentials.username === "admin" && credentials.password === "admin") {
      <Homepage/>
      console.log("Welcome");
    } else {
      console.log("Wrong credentials");
    }
    
    
  }

  return (
    <div className="App">
      <LoginForm Login={Login}/>
    </div>
  );
}

export default App;
