import React, { useState } from "react";
import Swal from 'sweetalert';

import "../style.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { Ajouter, Supremier } from "../RandomSlice";
import RsltaAficher from './RsltatAficher';

export default function Dashboard() {
  const [personEntre, setPersonEntre] = useState('');
  const [ligntPerson, setLigntPerson] = useState(0);
  const [rslt, setRslt] = useState(true);

  const [randomPerson, setRandomPerson] = useState('');
  const dispatch = useDispatch();

  let infos = useSelector((data) => data.PersonRandom.memebres);

  function AjouterPerson() {
    if (personEntre.trim() === '') {
      Swal('Erreur', 'Veuillez entrer une personne.', 'error');
    } else if (infos.some((p) => p.personEn === personEntre)) {
      Swal('Erreur', 'Vous avez déjà ajouté cette personne.', 'error');
    } else {
      if (infos.length < 6) {
        dispatch(
          Ajouter({
            id: infos.length + 1,
            personEn: personEntre,
          })
        );
        setPersonEntre('');
        setLigntPerson(infos.length + 1);
      } else {
        Swal('Limite atteinte', 'Vous avez atteint le nombre maximum de personnes (6).', 'error');
      }
    }
  }

  function Delet(elm) {
    dispatch(Supremier(elm));
    setLigntPerson(infos.length - 1);
  }

  function startJeux() {
    if (infos.length > 0) {
      const index = Math.floor(Math.random() * infos.length);
      setRandomPerson(infos[index].personEn);
      setRslt(false);
    }
  }

  return (
    <div className="container col-10 card shadow-lg mt-2 p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-primary" id="titreDashbord">Découvrez des personnages inédits</h3>
        <Link to="/" target="_self" id="pageAccueilDashbord"><b >Page d'accueil</b></Link>
      </div>

      <div className="d-flex justify-content-center mt-2" >
        {rslt ? (
        <div className="card shadow-sm col-sm-10 col-md-8 col-lg-10 p-2 m-2">

            <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
              <div className='col-8'>
                <input type="text" id="inputpersonEntre" value={personEntre} onChange={(e) => setPersonEntre(e.target.value)}
                  className="form-control" placeholder='Entrez les personnes que vous voulez' />
              </div>
              <div className='col-4'>
                <button className="btn btn-primary col-10" id="AjoPersonbtn" onClick={AjouterPerson}>Ajouter</button>
              </div>
            </div>

            <div className="mt-3" id="nbrPerson"><span>Nombre de participants : </span><b id="nbrPerson">{ligntPerson}</b> </div>
            <div>
              {infos.length > 0 ? (
                <div>
                  <table className="mt-3 table table-striped table-hover text-center border" >
                    <thead>
                      <tr>
                        <th> nom de personne </th>
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {infos.map((p, i) => (
                        <tr key={i}>
                          <td>{p.personEn}</td>
                          <td>
                            <button className="btn btn-danger" id="btnSup" onClick={() => Delet(p.personEn)}><i className="bi bi-trash"></i></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="col-12 d-flex justify-content-center">
                    <button id="comancerEntrePer" className="btn btn-success col-6" onClick={startJeux}>Commencer</button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-success mt-3">Aucune personne entrée</div>
              )}
            </div>
          </div>
        ) : (
          <RsltaAficher randomPerson={randomPerson} setRslt={setRslt} Delet={Delet} />
        )}
        <div>
        </div>
      </div>
    </div>
  );
}
