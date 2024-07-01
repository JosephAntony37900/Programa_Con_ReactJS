import React from 'react';
//import '../App.css'
import Menu from '../organisms/Menu';
import Tabla from '../moleculas/TablePlanes';
import Catalogo from '../moleculas/Catalagos';
import Comparativa from '../atoms/Comparacion';
function Planes() { //Pagina de los planes y ya

  return (
    <>
    <Menu/>
    <Comparativa/>
      <Tabla/>
      <Catalogo/>
    </>
  )
}

export default Planes;