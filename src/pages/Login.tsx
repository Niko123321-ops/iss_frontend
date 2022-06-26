import { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import React from "react";

const Login = () => {

    const[user, setUser] = useState('');
    const[pass, setPass] = useState('');
    const[error, setError] = useState('');

    const[redirect, setRedirect] = useState(false);

    const Submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            user,
            pass
        }

        console.log(data);

        const res = await axios.post('http://localhost:3001/auth/login', data, {withCredentials: true});

        console.log(res);

        if(res.status == 201){
            setRedirect(true);
        }

        if(res.status !== 201){
            setError('Napaka v podatkih');
        }



    }

    if(redirect){
        return <Navigate to='/' />
    }

    return (
        <>
            <h2>{error}</h2>
            <form onSubmit={Submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Neki"
                           onChange={(e) => setUser(e.target.value)}/>
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                           onChange={(e) => setPass(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;