import './Item.css'
import '../Boton/BotonCarrito.css'
import './../services/mockService.js'
import BotonCarrito from '../Boton/BotonCarrito'
export default function Item(props){
    const {titulo, precio, descripcion, img, id} = props.productos
    
    return(
        <div key={props.id} className='itemCss' >
            <h1>{titulo}</h1>
            <img src={img} alt={titulo} />
            <h3>{descripcion}</h3>
            <h6>{precio}</h6>
            <BotonCarrito/>
        </div>
    )
    }