import { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import './Register.css';
import { Navigate } from 'react-router-dom';
import React from "react";

const Register = () => {
    const[user,setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const[errorText, setErrorText] = useState('');

    const [redirect, setRedirect] = useState(false);

    const Submit = async(e: SyntheticEvent) => {
        e.preventDefault();

        const data = {
            user,
            email,
            pass
        }

        const res = await axios.post('http://localhost:3001/auth/register', data);

        if(res.status == 201){
            setRedirect(true);
        }

        if(res.status !== 201){
            setErrorText('Napaka v podatkih');
            console.log(errorText);
        }

    }

    if (redirect){
        return <Navigate to='/login' />
    }

    return (
        <>
            <h2>{errorText}</h2>
            <form onSubmit={Submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingFirstName" placeholder="First name"
                           onChange={(e) => setUser(e.target.value)}/>
                    <label htmlFor="floatingFirstName">Username</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                           onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                           onChange={(e) => setPass(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;