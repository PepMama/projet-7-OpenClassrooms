import './thumb.css';
import { Link } from 'react-router-dom';

export default function Thumb({logement}){
    return (
        <Link to={"/logement/" + logement.id}>
            <article key={logement.id} className="thumb">
                <img className="thumb__image" src={logement.cover} alt={logement.title}></img>
                <p className="thumb__title">{logement.title}</p>
            </article>
        </Link>
    );
}