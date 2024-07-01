import React from 'react';
//import '../App.css'
import Menu from '../organisms/Menu';
import Bienvenidos from '../atoms/Bienvenida';
import Cards from '../moleculas/Card';

function Inicio() { //Pagina Inicio

  return (
    <>
      <Menu />
            <div className="main-container">
                <Bienvenidos />
                <div className="cards-container">
                    <Cards />
                </div>
            </div>
    </>
  )
}

export default Inicio;