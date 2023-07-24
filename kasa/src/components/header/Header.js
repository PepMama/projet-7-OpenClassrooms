import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header(){
    return(
        <header className='header'>
          <img src={logo} alt='Logo kasa'></img>
          <ul className='header__links'>
            <li>
                <Link className='header__link' to={"/"}>Accueil</Link>
            </li>
            <li>
                <Link className='header__link' to={"about"}>A Propos</Link>
            </li>
          </ul>
        </header>
    )
}
