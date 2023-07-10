import { useLoaderData } from "react-router-dom"

export default function App(){
    const logements = useLoaderData();
    return (
        <div>
            {logements.map(logement => <p key={logement.id}>{logement.title}</p>)}
        </div>
    )
}

export async function loader(){
    return (
        await import ("../data/logements.json")
    ).default
}