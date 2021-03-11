import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, InputLabel } from '@material-ui/core'
import NativeSelect from '@material-ui/core/NativeSelect';


const SearchBar = () => {
    return (
        <div class="container text-center">
        <form className="card card-body" >
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField label="Zip Code" />
                </Grid>
                <Grid item xs={2}>
                    <InputLabel>Pet</InputLabel>
                    <NativeSelect>
                        <option value="" />
                        <option>Dog</option>
                        <option>Cat</option>
                    </NativeSelect>
                </Grid>
                <Grid item xs={2}>
                    <InputLabel>Miles</InputLabel>
                    <NativeSelect>
                        <option value="" />
                        <option>5</option>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                        <option>250</option>
                    </NativeSelect>
                </Grid>
                <Grid item xs={2}>
                    <button type="submit">Search</button>
                </Grid>
            </Grid>
        </form>
        </div>
    )
}


export default SearchBar