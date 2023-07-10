import logo from '../assets/logo.svg';
import '../styles/App.css';
import React from 'react'

function Header(){
    return(
        <header className='header'>
          <img src={logo} alt='Logo kasa'></img>
          <ul className='header-links'>
            <li>
                <a className='header-link' href='#'>Accueil</a>
            </li>
            <li>
                <a className='header-link' href='#'>A Propos</a>
            </li>
          </ul>
        </header>
    )
}

export default Header;