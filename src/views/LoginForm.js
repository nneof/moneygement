import React, {useState} from 'react';

function LoginForm({Login}){

    const [credentials, setCredentials] = useState({username: "", password: ""});

    const submitHandler = c => {
        c.preventDefault();
        Login(credentials);
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Userame:</label>
                    <input type="text" name="username" id="username" onChange={u => setCredentials({...credentials, username: u.target.value})} value={credentials.username}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label> 
                    <input type="password" name="password" id="password" onChange={p => setCredentials({...credentials, password: p.target.value})} value={credentials.password}/>
                </div>
            <input type="submit" value="Login"/>
            </div>
        </form>
    )
}

export default LoginForm;
