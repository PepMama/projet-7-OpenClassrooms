import { useLoaderData } from "react-router-dom";
import Tags from '../../components/tags/Tags'
import './logement.css';

export default function Logement(){
    const logements = useLoaderData();
    return (
        <div>
            <img className="logement__image" src={logements.cover} alt={logements.title}></img>
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
                    <p className="logement__hostName">{logements.host.name}</p>
                    <img className="logement__hostPicture" src={logements.host.picture} alt={logements.host.name}></img>
                </div>
            </div>
        </div>
    )
}

export async function loader({params}){
    const logements = (
        await import ("../../data/logements.json")
    ).default

    return(logements.find(logement => logement.id === params.id));
}
