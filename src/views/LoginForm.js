import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../styling/LoginForm.module.css';

function LoginForm() {
    const navigate = useNavigate();
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
            // TODO: connect to database and fetch user profile
            navigate('/homepage')
        } else {
            console.log("Wrong credentials");
        }
    }

    return (
        <div className={style.App}>
            <form onSubmit={submitHandler} className={style['login-form']}>
                <div className={style['form-inner']}>
                    <h2>Login</h2>
                    <div className={style['form-group']}>
                        <label htmlFor="username">Userame:</label>
                        <input type="text" name="username" id="username" onChange={usernameChangeHandler} value={credentials.username} />
                    </div>
                    <div className={style['form-group']}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={passwordChangeHandler} value={credentials.password} />
                    </div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div >
    )
}

export default LoginForm;
