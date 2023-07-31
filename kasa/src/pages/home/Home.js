import { useLoaderData } from "react-router-dom";
import Thumb from '../../components/thumb/thumb';
import Banner from '../../components/banner/Banner.js';
import homeBanner from '../../assets/background-home.svg'
import './home.css';


export default function Home(){
    const logements = useLoaderData();
    return (
        <>
        <Banner img={homeBanner} text={"Chez vous, partout et ailleurs"}/>
        <div className="home" >
            {logements.map(logement => <Thumb logement={logement} key={logement.id}/>)}
        </div>
        </>
    )
}

export async function loader(){
    return (
        await import ("../../data/logements.json")
    ).default
}

