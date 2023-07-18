import { useLoaderData } from "react-router-dom";
import './logement.css';

export default function Logement(){
    const logements = useLoaderData();
    return (
        
        <div>
            <h1>{logements.title}</h1>
        </div>
    )
}

export async function loader({params}){
    const logements = (
        await import ("../../data/logements.json")
    ).default

    return(logements.find(logement => logement.id === params.id));
}
