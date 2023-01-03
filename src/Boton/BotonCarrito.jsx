import React from "react";

function BotonCarrito(){
    const [boton, setBoton] = React.useState ['Agregar']

    function added(){
        setBoton('Agregado')
    }

    return(
        <button onClick={added}>{boton}</button>
    )
}

export default BotonCarrito;