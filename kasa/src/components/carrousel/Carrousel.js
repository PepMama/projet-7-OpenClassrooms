import "./carrousel.css";
// import { userState } from 'react';

export default function Carrousel({ images }){

    const sliderStyles = {
        height: '100%',
        position: 'relative'
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundImage: 'url({image})'
    }

    return(
        <div style={sliderStyles}>
            {images.map((image, index) => (
                // <img key={index} src={image} alt={images.title} />
                <div key={index} style={slideStyles}></div>
            ))}
        </div>
    )
}