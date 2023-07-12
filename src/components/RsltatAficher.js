import React, {useState } from 'react';
import '../style.css';
export default function RsltatAficher({randomPerson,setRslt,Delet}) {
    const[afficher,setAfficher]=useState();
    
     setTimeout(() => {
        setAfficher(randomPerson)
      }, 3000);

     

function rtur(){
    setRslt(true);
}

      function Delete(elm) {
        setRslt(true);
        Delet(elm);
      }
      
  return (
      <div className="container col-10 card shadow-lg mt-2 p-5">
      <div className="d-flex justify-content-center">
        {afficher ? (
          <div className='text-center col-8'>
            <h3  id='personChoisie'>la personne choisie : <b className='text-primary'>{afficher}</b></h3>
                  <hr/>
            <div className='d-flex justify-content-center gap-3 mt-4'>
        
            <button className="btn btn-warning col-4 btnRslt" onClick={rtur}><i class="bi bi-arrow-left"></i></button>
            <button className="btn btn-danger col-4 btnRslt" onClick={()=>Delete(randomPerson)}><i class="bi bi-trash"></i></button>
            </div>
           
          </div>
        ) : (
          <div className="spinner"></div>
        )}
      </div>
    </div>
     
  )
}
