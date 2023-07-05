import React from "react";
import { Link } from "react-router-dom";


const Error = () => {
  return (
    
    <main className="error container">
      <span className="font-family">
      <h1>404</h1>
      </span>
      
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <div className="link">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </main>
  );
};

export default Error;