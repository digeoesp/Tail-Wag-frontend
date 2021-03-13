import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Grid, InputLabel } from '@material-ui/core'
import { useHistory} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab'
import FavoriteIcon from '@material-ui/icons/Favorite'

const { REACT_APP_SERVER_URL } = process.env;

const About = (props) => {
    console.log(props, "this is my props")
    const [results, setResults] = useState([])
    useEffect(() => {
        const type = props.location.state.type
        const zip = props.location.state.zip
        const fetchPetApi = async () => {
            const response= await axios.post(`${REACT_APP_SERVER_URL}/search`, {
                type: type,
                postalcode: zip
              })
              .then(function (response) {
                  setResults(response.data)
                })
          }
          fetchPetApi();
        }, [])
               
    
    return (
        <div>
            <h1>About</h1>
            <p>This is about us...</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore dolorum excepturi, pariatur dolore fuga perferendis 
                mollitia deserunt a voluptas assumenda! Consequatur beatae qui 
                dolorem tempora possimus accusantium, fugit eius quidem?
                
                
            </p>
            {results.map((result, index) => {
    return (
        
              <Card className="animalCard">
                  <Fab onClick="savePet()" value={result} size="small" color="secondary" aria-label="like" className="saveButton">
                    <FavoriteIcon />
                  </Fab>
                <CardContent>
                  <div key={index}>
        
                    {result.photos[0] ? <img src={result.photos[0].medium} /> : <p><img src="https://res.cloudinary.com/dvzw25pxu/image/upload/v1615408620/iconfinder_pet-care-health-dog-cat_4929673-1_hbm19y.png" /></p>}
        
                    <Typography variant="h5"><p className="petName">Name: {result.name}</p></Typography>
        
                    {/* <img src={petItem.photos.medium} /> */}
                    {/* <p>Type: {petItem.type}</p> */}
                    <Typography variant="body2" color="textSecondary" component="p">
                      <p><b>Species:</b> {result.species}   <b>Gender:</b> {result.gender}   <b>Age:</b> {result.age}</p>
                      <p><b>Email:</b> {(result.contact[0].email)}</p>
                      <p><b>Phone Number:</b> {(result.contact[0].phone)}</p>
                      <p><b>City:</b> {(result.contact[0].address.city)}   <b>State:</b> {(result.contact[0].address.state)}   <b>Zip Code:</b> {(result.contact[0].address.postcode)}</p>
                      <p><b>Country:</b> {(result.contact[0].address.country)}</p>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
        
        
            )
        })
 }
        </div>
    )
}

export default About;