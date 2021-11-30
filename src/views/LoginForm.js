import React, { useState } from 'react';
import Homepage from './Homepage';

function LoginForm() {

    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const usernameChangeHandler = (event) => {
        setCredentials((prevState) => {
            return { ...prevState, username: event.target.value }
        })
    }

    const passwordChangeHandler = (event) => {
        setCredentials((prevState) => {
            return { ...prevState, password: event.target.value }
        })
    }

    const submitHandler = c => {
        c.preventDefault();
        Login(credentials);
    }

    const Login = credentials => {
        console.log(credentials);
        // TODO: collect username in order to use it..
        // TODO: check if the user exists in the DB
        if (credentials.username === "admin" && credentials.password === "admin") {
          <Homepage />
          console.log("Welcome");
        } else {
          console.log("Wrong credentials");
        }
      }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Userame:</label>
                    <input type="text" name="username" id="username" onChange={usernameChangeHandler} value={credentials.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={passwordChangeHandler} value={credentials.password} />
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    )
}

export default LoginForm;
