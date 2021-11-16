import React from 'react';
import LoginForm from './pages/LoginForm';

function App() {

  const Login = credentials => {
    console.log(credentials);
    // TODO: check if the user exists in the DB
    // TODO: collect username in order to use it..
    
  }

  return (
    <div className="App">
      <LoginForm Login={Login}/>
    </div>
  );
}

export default App;
