import React from "react";

function Tabla(){ //Tabla de la pagina de los planes
    return(
        <div className="container mt-4">
        
        <ul className="platform">
            <li><strong>Netflix</strong>: Gran variedad de series y películas originales.</li>
            <li><strong>Amazon Prime Video</strong>: Incluido con la suscripción Prime, también ofrece contenido original.</li>
            <li><strong>Disney+</strong>: Extenso catálogo de Disney, Pixar, Marvel, Star Wars y National Geographic.</li>
            <li><strong>HBO Max</strong>: Acceso a las producciones de HBO y contenido adicional.</li>
        </ul>
        
        <h2>Comparativa de precios</h2>
        
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Plataforma</th>
                    <th>Plan</th>
                    <th>Precio</th>
                    <th>Simultáneas</th>
                    <th>Calidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Netflix</td>
                    <td>Básico</td>
                    <td>$99</td>
                    <td>1</td>
                    <td>SD</td>
                </tr>
                <tr>
                    <td>Netflix</td>
                    <td>Estándar</td>
                    <td>$199</td>
                    <td>2</td>
                    <td>HD</td>
                </tr>
                <tr>
                    <td>Netflix</td>
                    <td>Premium</td>
                    <td>$299</td>
                    <td>4</td>
                    <td>Ultra HD</td>
                </tr>
                <tr>
                    <td>Amazon Prime Video</td>
                    <td>Único</td>
                    <td>$899 al año</td>
                    <td>4</td>
                    <td>4K</td>
                </tr>
                <tr>
                    <td>Disney+</td>
                    <td>Basic</td>
                    <td>$133</td>
                    <td>4</td>
                    <td>4K</td>
                </tr>
                <tr>
                    <td>HBO Max</td>
                    <td>Basic</td>
                    <td>$149</td>
                    <td>2</td>
                    <td>HD</td>
                </tr>
            </tbody>
        </table>
    
        </div>
    )
}

export default Tabla;