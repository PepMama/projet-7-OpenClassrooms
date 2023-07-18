import logo from '../../assets/logo-white.svg';
import './footer.css';

export default function Footer(){
    return(
        <footer className='footer'>
            <img src={logo} alt='Logo footer kasa'></img>
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}