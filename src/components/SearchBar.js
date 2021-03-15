import React, { useState } from 'react';
import axios from "axios"
import TextField from '@material-ui/core/TextField';
import { Grid, InputLabel } from '@material-ui/core'
import { useHistory} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab'
import FavoriteIcon from '@material-ui/icons/Favorite'

const { REACT_APP_SERVER_URL } = process.env;


const SearchBar = () => {
    const history = useHistory()
    const [pet, setPets] = useState()
    const [zip, setZip] = useState()
    const [results, setResults] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault()
        history.push({
            pathname: '/about',
            
            state: { type: pet,
            zip: zip}
          })
      
    }
    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        setPets(value)
        console.log('working as well')
    }
    const handleChangeZip = (e) => {
        e.preventDefault()
        const value = e.target.value
        setZip(value)
        console.log('working as well')
    }

    return (
<div className="searchBarAll">
        <div class="container text-center">
           
            <form onSubmit={ handleSubmit } className="card card-body" >
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TextField onChange={(e) => handleChangeZip(e)}label="Zip Code" />

                    </Grid>
                    <Grid item xs={3}>
                        <InputLabel>Pet</InputLabel>
                        <select onChange= { (e) => handleChange(e)}>
                            <option value="" />
                            <option>Dog</option>
                            <option>Cat</option>

                        </select>
                    </Grid>
                    <Grid item xs={3}>
                        <button type="submit" className="btn btn-primary float-right">Search</button>

                    </Grid>
                </Grid>
            </form>
            </div>
        </div>
    )
}


export default SearchBar