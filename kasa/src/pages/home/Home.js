import { useLoaderData } from "react-router-dom";
import Thumb from '../../components/thumb/thumb';
import Banner from '../../components/banner/Banner.js'
import './home.css'


export default function Home(){
    const logements = useLoaderData();
    return (
        <>
        <Banner/>
        <div className="home" >
            {logements.map(logement => <Thumb logement={logement}/>)}
        </div>
        </>

    )
}

export async function loader(){
    return (
        await import ("../../data/logements.json")
    ).default
}

// {logements.map(logement => <img className="thumb__image" key={logement.id} src={logement.cover}></img>)}
