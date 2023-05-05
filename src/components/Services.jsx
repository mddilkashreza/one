import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/3.png";
import img2 from "../assests/4.png";


const Services = () => {
  return (
    <div className='services'>
      <Carousel
       infiniteLoop
        autoPlay 
        showStatus={false}
         showArrows={false}
         showThumbs={true}
         interval={1500}>
        <div>
        <img src={img1} alt="Item1" />
        <p className='legend'>Fronted Developer</p>
        </div>
        <div>
        <img src={img2} alt="Item1" />
        <p className='legend'>Currently, I am learning Django</p>
        </div>
      </Carousel>

    </div>
  )
}

export default Services;