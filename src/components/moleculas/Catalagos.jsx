import React from "react";

function Catalogo(){ //Catalogos y contenido para planes
    return(
        <div className="container2 mt-4">
        <h2>Catálogos y contenido</h2>
        <p>Cada plataforma de streaming tiene su propio catálogo y tipos de contenido. Aquí hay un resumen de lo que puedes esperar de cada una:</p>
    
        <div className="content-section platform">
            <h3>Netflix</h3>
            <p>Netflix es conocido por su gran variedad de series y películas originales, como Stranger Things y The Crown. Además, tiene una amplia colección de contenido licenciado.</p>
        </div>
    
        <div className="content-section platform">
            <h3>Amazon Prime Video</h3>
            <p>Amazon Prime Video ofrece contenido original como The Marvelous Mrs. Maisel y The Boys, además de una selección de películas y series populares.</p>
        </div>
    
        <div className="content-section platform">
            <h3>Disney+</h3>
            <p>Disney+ es el hogar de las franquicias de Disney, Pixar, Marvel, Star Wars y National Geographic. Ideal para familias y fanáticos de estas marcas.</p>
        </div>
    
        <div className="content-section platform">
            <h3>HBO Max</h3>
            <p>HBO Max incluye todas las series de HBO, como Game of Thrones y Westworld, además de contenido adicional de WarnerMedia.</p>
        </div>
    
        <h2>Conclusión</h2>
        <p>La elección de la mejor plataforma de streaming depende de tus preferencias de contenido y presupuesto. Netflix y HBO Max son excelentes para series originales, Disney+ es ideal para familias, y Amazon Prime Video ofrece una buena combinación de contenido original y licenciado.</p>
    
        </div>
    
    )
}

export default Catalogo;