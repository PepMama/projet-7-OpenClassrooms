import './page-404.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import React from 'react'

export default function ErrorPage() {
    return (
      <>
      <Header/>
        <main className="app--error">
          <p className = "error-number">404</p>
          <p className = "error-txt">Oups! La page que vous demandez n'existe pas.</p>
            <a
              className="error-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Retourner sur la page d’accueil
            </a>
        </main>
        <Footer/>
      </>
    );
}

