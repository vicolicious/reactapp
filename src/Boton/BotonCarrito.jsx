import React from "react";
import './BotonCarrito.css'

function BotonCarrito(){
    const [boton, setBoton] = React.useState ('agregar')

    function added(){
        setBoton('Agregado')
    }

    return(
        <div className="BotonCarrito">
                    <button onClick={added} >{boton}</button>

        </div>
    )
}

export default BotonCarrito;