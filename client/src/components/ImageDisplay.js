import React from 'react';
import { Carousel } from "react-bootstrap";
import main_fire_icon from '../images/main_fire_icon.png';
import about_fire_icon from '../images/about_fire_icon.png';

const ImageDisplay = () => {

    //removes next and prev 'carrot' pointers from carousel
    let nextIcon = '';
    let prevIcon = '';

    return (

        <Carousel
            className='carousel'
            indicators={false}
            nextIcon={nextIcon}
            prevIcon={prevIcon}
        >

            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={main_fire_icon}
                    alt="first_slide"
                />
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={about_fire_icon}
                    alt="second_slide"
                />
            </Carousel.Item>
        </Carousel>

    )
}

export default ImageDisplay
