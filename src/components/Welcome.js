import React from 'react';
import CarouselHomePage from './CrouselHomePage';
import SearchBar from './SearchBar';
import SrchAppAdp from './SrchAppAdp'


const Welcome = () => {
    return (
        <>
            <div>
                <CarouselHomePage />
            </div>
            <br></br>
            <div>
                <SearchBar />
            </div>
            <br></br>
            <div>
                <SrchAppAdp />
            </div>
            <br></br>
            <br></br>
            <br></br>
        </>
    )

}

export default Welcome;