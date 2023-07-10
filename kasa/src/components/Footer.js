import logoWhite from '../assets/logo-white.svg';
import '../styles/App.css';
import React from 'react'

function Footer(){
    return(
        <footer className='footer'>
            <img src={logoWhite} alt='Logo footer kasa'></img>
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}
export default Footer;