import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './../Images/1.jpeg';
import image2 from './../Images/2.jpeg';
import image3 from './../Images/3.jpeg';
import image4 from './../Images/4.jpeg';
import image5 from './../Images/5.jpeg';
import image6 from './../Images/6.jpeg';

const CarouselHomePage = () => {
    return (
        <Carousel pause={false} controls={false}>
            <Carousel.Item interval={3000}>
                <img
                    className="carouselImage"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>“At your service! Samuel is just too proud to be homeless.”</h3>
                    <br></br>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="carouselImage"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>''Oliver is always up for kisses & cuddles!''</h3>
                    <br></br>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="carouselImage"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>“Amber loves you already — and you’ve only just met through a picture.”</h3>
                    <br></br>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="carouselImage"
                    src={image4}
                    alt="Fourth slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>"I will always be there to brighten up your day!"</h3>
                    <br></br>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="carouselImage"
                    src={image5}
                    alt="Fifth slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>"A bundle of joy, a search away!"</h3>
                    <br></br>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="carouselImage"
                    src={image6}
                    alt="Sixth slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>"I get along well with others."</h3>
                    <br></br>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        
    )
    
}

export default CarouselHomePage;