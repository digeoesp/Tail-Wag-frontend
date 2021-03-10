import React from 'react';
import CarouselHomePage from './CrouselHomePage';
import SearchBar from './SearchBar';


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
        </>
    )

}

export default Welcome;