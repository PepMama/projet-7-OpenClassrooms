import './thumb.css';
import { Link } from 'react-router-dom';

export default function Thumb({logement}){

    const styleImage = {
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%),  url(${logement.cover}` 
    }
    return (
        <Link to={"/logement/" + logement.id}>
            <article key={logement.id} className="thumb" style={styleImage}>
                {/* <img className="thumb__image" src={logement.cover} alt={logement.title}></img> */}
                <p className="thumb__title">{logement.title}</p>
            </article>
        </Link>
    );
}