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
                <p>Name: {petItem.name}</p>
                <p>Type: {petItem.type}</p>
                <p>Species: {petItem.species}</p>
                <p>Gender: {petItem.gender}</p>
                <p>Age: {petItem.age}</p>
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
    