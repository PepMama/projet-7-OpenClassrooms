import { useLoaderData } from "react-router-dom";
import './logement.css';
import Dropdown from "../../components/dropdown/Dropdown";
import Tags from '../../components/tags/Tags'
import Carrousel  from "../../components/carrousel/Carrousel";

import stars from '../../assets/star.svg'

export default function Logement(){
    const logements = useLoaderData();
    return (
        <>
            <div>
                <Carrousel images={logements.pictures} />
            </div>
            <div className="logement">
                <div className="logement__container--description">
                    <h1 className="logement__title">{logements.title}</h1>
                    <p className="logement__location">{logements.location}</p>
                    <div className="logement__tags">
                    {logements.tags.map((tag, index) => (
                        <Tags key={index} logementTag={tag} />
                    ))}
                    </div>
                </div>
                <div className="logement__container--host">
                    <div className="host">
                        <p className="logement__hostName">{logements.host.name}</p>
                        <img className="logement__hostPicture" src={logements.host.picture} alt={logements.host.name}></img>
                    </div>
                    <div className="container__stars">
                        {/* {[...Array(5)].map((_, index) => (
                        <svg key={index} className="logement__star" viewBox="0 0 196 36" fill={index < logements.rating ? '#FF6060' : '#E3E3E3'} xmlns="http://www.w3.org/2000/svg">
                            <path d="M179.721 6.84366C179.473 6.32809 178.948 6 178.371 6C177.795 6 177.275 6.32809 177.022 6.84366L174.008 13.0445L167.277 14.0382C166.715 14.1225 166.246 14.5162 166.073 15.0552C165.9 15.5942 166.04 16.1895 166.443 16.5879L171.327 21.4201L170.174 28.2491C170.08 28.8115 170.315 29.3833 170.779 29.7161C171.243 30.0489 171.857 30.0911 172.363 29.8239L178.376 26.6133L184.389 29.8239C184.896 30.0911 185.51 30.0536 185.974 29.7161C186.438 29.3786 186.672 28.8115 186.578 28.2491L185.421 21.4201L190.304 16.5879C190.707 16.1895 190.853 15.5942 190.675 15.0552C190.496 14.5162 190.032 14.1225 189.47 14.0382L182.735 13.0445L179.721 6.84366Z" />
                        </svg>
                        ))} */}
                    </div>
                </div>
            </div>
            <div className="logement__dropdown">
                <div className="logement__dropdown--taille">
                    <Dropdown contenu={logements.description} title={"Description"} />
                </div>
                <div className="logement__dropdown--taille"> 
                    <Dropdown contenu={logements.equipments} title={"Equipements"} />
                </div>
            </div>
        </>
    )
}

export async function loader({params}){
    const logements = (
        await import ("../../data/logements.json")
    ).default

    return(logements.find(logement => logement.id === params.id));
}
