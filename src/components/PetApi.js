import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab'
import FavoriteIcon from '@material-ui/icons/Favorite'

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
  const handleFavorite = async (id) => {
    await axios.post(`${REACT_APP_SERVER_URL}/users/save`, {
      id
    })
      .then(function (response) {
        console.log(response);
      })
  }
  const listOfPets = petApi.map((petItem, index) => { console.log("🌻 ", petItem )
    return (
      <Card className="animalCard">
        <Fab onClick={() => 
          handleFavorite(petItem._id)} value={petItem} size="small" color="secondary" aria-label="like" className="saveButton">
          <FavoriteIcon />
        </Fab>
        <CardContent>
          <div key={index}>

            {petItem.photos[0] ? <img src={petItem.photos[0].medium} /> : <p><img src="https://res.cloudinary.com/dvzw25pxu/image/upload/v1615408620/iconfinder_pet-care-health-dog-cat_4929673-1_hbm19y.png" /></p>}

            <Typography variant="h5"><p className="petName"><u>Name</u>: {petItem.name}</p></Typography>

            {/* <img src={petItem.photos.medium} /> */}
            {/* <p>Type: {petItem.type}</p> */}
            <Typography variant="body2" color="textSecondary" component="p">
              <p><b><u>Species</u>:</b> {petItem.species}   <b><u>Gender</u>:</b> {petItem.gender}   <b><u>Age</u>:</b> {petItem.age}</p>
              <p><b><u>Email</u>:</b> {(petItem.contact[0].email)}</p>
              <p><b><u>Phone Number</u>:</b> {(petItem.contact[0].phone)}</p>
              <p><b><u>City</u>:</b> {(petItem.contact[0].address.city)}   <b><u>State</u>:</b> {(petItem.contact[0].address.state)}   <b><u>Zip Code</u>:</b> {(petItem.contact[0].address.postcode)}</p>
              <p><b><u>Country</u>:</b> {(petItem.contact[0].address.country)}</p>
            </Typography>
          </div>
        </CardContent>
      </Card>
    )
  })

  return (
    <div>
      {listOfPets}
    </div>
  );
}

export default PetApi

