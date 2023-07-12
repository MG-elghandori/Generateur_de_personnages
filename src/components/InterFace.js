import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

export default function InterFace() {
  return (
    <div className="container card shadow-lg mt-3 p-3">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column gap-3">
            <h1>Générateur de personnages aléatoires</h1>
            <div className="fs-5 mt-4">
              Choisissez vos amis pour <br /> jouer ensemble et observez qui parmi vous <br />
              a le plus de chance.
            </div>
            <Link to="/startJeux" target="_blank" className="btn btn-primary col-8">
              Commencer le Jeu
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img src="./coverGame.png" alt="" id="img" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
