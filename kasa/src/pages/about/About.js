import { useLoaderData } from "react-router-dom";
import bannerAbout from "../../assets/background-about.svg"
import Banner from '../../components/banner/Banner.js';
import './about.css';
import Dropdown from "../../components/dropdown/Dropdown";

export default function About(){
    const about = useLoaderData();
    return(
        <div className="about">
            <Banner img={bannerAbout} text={""}/>
            <div className="about__dropdown">
                <div className="dropdown__taille">{about.map((propos,index) => <Dropdown key={index} title={propos.title} contenu={propos.content}/> )}</div>
            </div>
        </div>
        
    )
}
export async function loader(){
    return (
        await import ("../../data/about.json")
    ).default
}
