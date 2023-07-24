import { useLoaderData } from "react-router-dom";
import './logement.css';
import Dropdown from "../../components/dropdown/Dropdown";
import Tags from '../../components/tags/Tags'
import Carrousel  from "../../components/carrousel/Carrousel";

export default function Logement(){
    const logements = useLoaderData();

    const containerStyles = {
        width: '100%',
        height: '415px',
        margin: '0 auto'
    }
    
    return (
        <>
            <div style={containerStyles}>
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
                    <p className="logement__hostName">{logements.host.name}</p>
                    <img className="logement__hostPicture" src={logements.host.picture} alt={logements.host.name}></img>
                </div>
            </div>
            <div className="logement__dropdown">
                <Dropdown contenu={logements.description} title={"Description"} />
                <Dropdown contenu={logements.equipments} title={"Equipements"} />
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
