import { useLoaderData } from "react-router-dom";
import bannerAbout from "../../assets/background-about.svg"
import Banner from '../../components/banner/Banner.js';
import './about.css';
import Dropdown from "../../components/dropdown/Dropdown";

export default function About(){
    const about = useLoaderData();
    return(
        <>
            <Banner img={bannerAbout} text={""}/>
            <div className="about__dropdown">
                {about.map((propos,index) => <Dropdown key={index} title={propos.title} contenu={propos.content}/> )}
            </div>
        </>
        
    )
}
export async function loader(){
    return (
        await import ("../../data/about.json")
    ).default
}
