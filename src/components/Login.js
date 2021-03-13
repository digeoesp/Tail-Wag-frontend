// Imports
import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken'
const { REACT_APP_SERVER_URL } = process.env;


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { email, password };
        axios.post(`${REACT_APP_SERVER_URL}/users/login`, userData)
            .then(response => {
                const { token } = response.data;
                // save token to local storage
                localStorage.setItem('jwtToken', token);
                // set token to headers
                setAuthToken(token);
                // decode token to get the user data
                const decoded = jwt_decode(token);
                //set the current user
                props.nowCurrentUser(decoded); //going to be a function passed down as props
            })
            .catch(error => {
                console.log('******error on loggin', error);
                alert('Either email or password is incorrect. Please try again')
            });
    }
    if (props.user) return <Redirect to="/profile" />

    return (
        <div className="loginPage">
            <div className="row mt-4">
                <div className="col-md-7 offset-md-3">
                    <div className="card card-body">
                        <img class="card-img-top" src="https://res.cloudinary.com/dvzw25pxu/image/upload/v1615447098/dogscats_lzldqw.jpg" alt="Cats and Dogs" />
                        <h2 className="pagesText">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email" className="pagesText">Email</label>
                                <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="pagesText">Password</label>
                                <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </form>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>

    )

}

export default Login;

