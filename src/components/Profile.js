
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;
const Profile = (props) => {
    const { handleLogout, user } = props;
    const { id, name, email, exp } = user;
    const experitionTime = new Date(exp * 1000)
    let currentTime = Date.now();
    const [userApi, setUserApi] = useState(null)
    useEffect(async() => {
        const fetchPetApi = async () => {
            const response = await axios.get(`${REACT_APP_SERVER_URL}/users/profile`);
            const data = response.data;

            // destructuring
            console.log(data);
            setUserApi(data);

        }
        fetchPetApi();


        // const data = response.data;

        // // destructuring
        // console.log(data);


    }, [])

    //make a condition that compares the two
    if (currentTime >= experitionTime) {
        handleLogout();
        alert('Session has ended. Please login to continue')
    }

    const userData = user ?
        (<div>
            <h1 className="profileText">Profile</h1>
            <p className="profileText"><b><u>Name</u></b>: {name} <b><u>Email</u>:</b> {email}</p>
            <h5 className="profileSaved">Your saved pets</h5>
        </div>) : <h2>Loading ...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };

    return (
        <div className="text-center pt-4">
            { user ? userData : errorDiv()}

        </div>
    );

}

export default Profile;