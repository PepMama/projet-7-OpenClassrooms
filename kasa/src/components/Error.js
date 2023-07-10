import '../styles/App.css';
import React from 'react'

function ErrorPage() {
    return (
      <div className="app">
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
      </div>
    );
}

export default ErrorPage;

