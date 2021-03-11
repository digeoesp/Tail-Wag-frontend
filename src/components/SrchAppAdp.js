import React from 'react';
import dogCatSearch from "./../Images/dogCatSearch.png"
import {  Link } from "react-router-dom";



const SrchAppAdp = () => {
    return (
        <div className="longBox">
            <div class="container text-center">
                <div>
                    <p className="headerSrchAdpt">Bring your new best friend home today!</p>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <Link to="/About">
                            <div style={{ image: `url(${dogCatSearch})` }} className="imageLink" />
                        </Link>
                        <p className="srchAdptTxt">Search</p>
                        <p className="description">Search for your new cat or dog best friend near you.</p>
                    </div>

                    <div class="col-sm-6">
                        <p className="srchAdptTxt">Adopt</p>
                        <p className="description">Adopting has never been easier. Just search and apply!</p>
                    </div>

                </div>
                <br></br>
        </div>
            </div>
    

    );
}

export default SrchAppAdp;
