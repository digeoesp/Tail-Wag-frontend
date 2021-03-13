import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, InputLabel } from '@material-ui/core'
import NativeSelect from '@material-ui/core/NativeSelect';


const SearchBar = () => {
    return (
        <div class="searchBar">
            <form className="card card-body" >
                <Grid container >
                    <Grid item xs={5}>
                        <TextField label="Zip Code" />
                    </Grid>
                    <Grid item xs={1}>
                        <InputLabel>Pet</InputLabel>
                        <NativeSelect>
                            <option value="" />
                            <option>Dog</option>
                            <option>Cat</option>
                        </NativeSelect>
                    </Grid>
                    <Grid item xs={4}>
                        <button className="searchBtn btn-primary float-right" type="submit">Search</button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}


export default SearchBar