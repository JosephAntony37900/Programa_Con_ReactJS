import React from "react";
//import '/src/App.css'
function Menu(){ //Este es el menu "navbar" para todas las pages (menos NotFound)
    return(
        <div className="contenedor-header">
        <header> 
       <div className="logo">
            <a href={'/inicio'}>Servicios Streaming</a>
        </div>
    <nav className="" id="nav">
        <ul> 
             <li><a href={'/planes'}>Mejores Planes</a></li>
             <li><a>Mejores Precios</a></li>
             <li><a>Estrenos</a></li>
             <li><a>Contactanos</a></li>
             <li><a>Login</a></li>
        </ul> 
    </nav>
    </header>
    </div>
    )
}

export default Menu;