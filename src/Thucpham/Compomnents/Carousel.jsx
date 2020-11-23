import React from 'react'
import Banner from '../images/3.jpg'

import {Carousel} from 'react-bootstrap'
const CarouselComponent = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={Banner} alt="Third slide"/>
                <Carousel.Caption>
                    <h3 className="pb-2">Second slide label</h3>
                    <button className="button" type="button" data-hover="Show Now" data-active="I'M ACTIVE"><span>Show Now </span></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Banner} alt="Third slide"/>
                <Carousel.Caption>
                    <h3 className="pb-2">Second slide label</h3>
                    <button className="button" type="button" data-hover="Show Now" data-active="I'M ACTIVE"><span>Show Now </span></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Banner} alt="Third slide"/>
                <Carousel.Caption>
                    <h3 className="pb-2">Second slide label</h3>
                    <button className="button" type="button" data-hover="Show Now" data-active="I'M ACTIVE"><span>Show Now </span></button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default React.memo(CarouselComponent)