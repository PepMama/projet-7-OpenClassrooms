import { useLoaderData } from "react-router-dom";
import './logement.css';

export default function Logement(){
    const logement = useLoaderData();
    return(
        <div>
            <h1>{logement.title}</h1>
        </div>
    )
}

export async function loader({params}){
    const logements = (
        await import ("../../data/logements.json")
    ).default

    return logements.find(logement => logement.id === params.id);
} 