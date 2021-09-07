import React from 'react';
import {Carousel} from '3d-react-carousal';

function Slider() {
    const slides=[
        <img  src="https://lebonheurthebliss.com/wp-content/uploads/banner1-1-1.jpg" alt="1" />,
    <img  src="https://lebonheurthebliss.com/wp-content/uploads/banner2-3-1.jpg" alt="2" />  ,
    <img  src="https://lebonheurthebliss.com/wp-content/uploads/banner5-3.jpg" alt="3" />  ,
    <img  src="https://lebonheurthebliss.com/wp-content/uploads/banner3-4-1.jpg" alt="4" />  ,
    ]
    return (
        <div style={{marginTop:"30px"}}>
        <Carousel slides={slides} height={400}/>
        </div>
    )
}

export default Slider
