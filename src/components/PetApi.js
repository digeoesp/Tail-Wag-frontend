import axios from 'axios'
import React, { useEffect, useState } from 'react';
const { REACT_APP_SERVER_URL } = process.env;

function PetApi() {
    // state
    const [petApi, setPetApi] = useState([]);
  
    useEffect(() => {
      const fetchPetApi = async () => {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/fetch-pets`);
        const data = response.data;
        
        // destructuring
        console.log(data);
        setPetApi(data);
  
      }
      fetchPetApi();
    }, [])
    const listOfPets = petApi.map((petItem, index)=> {
        return (
            <div key={index}>
                {petItem.photos[0] ? <img src={petItem.photos[0].medium}/> : <p>no photo</p>}
                <p>Name: {petItem.name}</p>
                {/* <img src={petItem.photos.medium} /> */}
                <p>Type: {petItem.type}</p>
                <p>Species: {petItem.species}</p>
                <p>Gender: {petItem.gender}</p>
                <p>Age: {petItem.age}</p>
                <p>Email: {JSON.stringify(petItem.contact[0].email)}</p>
                <p>Phone Number: {JSON.stringify(petItem.contact[0].phone)}</p>
                <p>City: {JSON.stringify(petItem.contact[0].address.city)}</p>
                <p>State: {JSON.stringify(petItem.contact[0].address.state)}</p>
                <p>Postcode: {JSON.stringify(petItem.contact[0].address.postcode)}</p>
                <p>Country: {JSON.stringify(petItem.contact[0].address.country)}</p>
                
                <br/>
            </div>
        )
    })
    return (
      <div>
        {listOfPets}
      </div>
    );
  }
  
export default PetApi
    
               