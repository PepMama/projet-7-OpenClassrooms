import "./carrousel.css";
import { useState } from 'react';
import backArrow from "../../assets/back-arrow.svg";
import nextArrow from "../../assets/next-arrow.svg";

export default function Carrousel({ images }){
    const [imageIndex, setImageIndex ] = useState(0);

    function changeImage(signe){
        setImageIndex(index=>(index + signe + images.length) % images.length);
    }

    return(
        <div className="carrousel">
            <img src={backArrow} className="back" onClick={()=>changeImage(- 1)} alt="Retour en arrière"></img>
            <img className="carrousel__image" src={images[imageIndex]} alt="" />
            <img src={nextArrow} className="next" onClick={()=>changeImage(1)} alt=""></img>
            <p className="carrousel__compteur">{imageIndex + 1}/{images.length}</p>
        </div>
    )
}