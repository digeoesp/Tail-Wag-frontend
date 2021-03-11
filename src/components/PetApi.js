import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
  const listOfPets = petApi.map((petItem, index) => {

    return (


      <Card className="animalCard">
        <CardContent>
          <div key={index}>
            {petItem.photos[0] ? <img src={petItem.photos[0].medium} /> : <p>no photo</p>}
            <Typography variant="h5"><p className="petName">Name: {petItem.name}</p></Typography>

            {/* <img src={petItem.photos.medium} /> */}
            {/* <p>Type: {petItem.type}</p> */}
            <Typography variant="body2" color="textSecondary" component="p">
              <p><b>Species:</b> {petItem.species}   <b>Gender:</b> {petItem.gender}   <b>Age:</b> {petItem.age}</p>
              <p><b>Email:</b> {(petItem.contact[0].email)}</p>
              <p><b>Phone Number:</b> {(petItem.contact[0].phone)}</p>
              <p><b>City:</b> {(petItem.contact[0].address.city)}   <b>State:</b> {(petItem.contact[0].address.state)}   <b>Zip Code:</b> {(petItem.contact[0].address.postcode)}</p>
              <p><b>Country:</b> {(petItem.contact[0].address.country)}</p>
            </Typography>
          </div>
        </CardContent>  
        </Card>
    )  
  })
  
  return (
    <div className="animalCard">
      {listOfPets}
    </div>
  );
}

export default PetApi

