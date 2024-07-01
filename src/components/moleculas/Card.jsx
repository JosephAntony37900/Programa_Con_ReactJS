import React from "react";
import disney from '/src/assets/images/mas.jpg';
import netflix from "/src/assets/images/Netflix.png";
import HBO from "/src/assets/images/R.png";
import prime from "/src/assets/images/video.jpg"

function Cards(){ //Este es de las tarjetas para el inicio
    return(
        <> 

        <div className="card">
            <img src={netflix} className="card-image"/>
        <div className="content">
            <h2>Netflix</h2>
            <a>Ver Planes</a>
        </div>
    </div>
    <div className="card">
        <img src={prime} className="card-image"/>
        <div className="content">
            <h2>Prime Video</h2>
            <a>Ver Planes</a>
        </div>
    </div>
    <div className="card">
        <img src={disney} className="card-image"/>
        <div className="content">
            <h2>Disney+</h2>
            <a>Ver Planes</a>
        </div>
    </div>
    <div className="card">
        <img src={HBO} className="card-image"/>
        <div className="content">
            <h2>HBO MAX</h2>
            <a>Ver Planes</a>
        </div>
    </div>
  
    </>
    )
}

export default Cards;