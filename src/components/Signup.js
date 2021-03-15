// Imports
import cd from "./../Images/cd.jpeg"
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // make sure password and confirm pass word are equal
        //password link is greater than or equal to 8 characters
        if (password === confirmPassword && password.length >= 8) {
            const newUser = { name, email, password };
            axios.post(`${REACT_APP_SERVER_URL}/users/register`, newUser)
                .then(response => {
                    console.log(response);
                    setRedirect(true);
                })
                .catch(error => console.log('****** error in signup', error));
        } else {
            if (password !== confirmPassword) return alert('Password don\'t match')
            alert('Password needs to be at least 8 characters. Please try again');
        }
    }

    if (redirect) return <Redirect to="/login" />

    return (
        <div style={{ backgroundImage: `url(${cd})` }} className="signupPage">
            <div className="row mt-4">
                <div>
                    <div className="card card-body">
                        <h2 className="py-2" className="pagesText">Signup🐾</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group" >
                                <label htmlFor="name" className="pagesText">Name</label>
                                <input type="text" name="name" value={name} onChange={handleName} className="form-control" />
                            </div>
                            <div className="form-group" >
                                <label htmlFor="email" className="pagesText">E-mail</label>
                                <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                            </div>
                            <div className="form-group" >
                                <label htmlFor="password" className="pagesText">Password</label>
                                <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                            </div>
                            <div className="form-group" >
                                <label htmlFor="confirmPassword" className="pagesText">Confirm Password</label>
                                <input type="password" name="confirPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
   
    )
}

export default Signup;
