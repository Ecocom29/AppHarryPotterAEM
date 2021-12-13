import React from 'react';


const Mensaje = ({msg}) => {
   
    return (
        <div className="mensajeError">
            <h2>{`Error: ${msg.status} ${msg.statusText}`}</h2>
        </div>
    )
}

export default Mensaje;