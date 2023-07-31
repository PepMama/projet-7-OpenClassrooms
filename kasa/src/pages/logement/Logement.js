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
                        {[...Array(5)].map((_, index) => (
                        <svg key={index} className="logement__star" viewBox="0 0 36 36" fill={index < logements.rating ? '#FF6060' : '#E3E3E3'} xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z"/>
                        </svg>
                        ))}
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
