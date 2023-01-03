import './Item.css'
export default function Item(props){
    const {titulo, precio, descripcion, img} = props.productos
    
    return(
        <div className='itemCss'>
            <h1>{titulo}</h1>
            <img src={img} alt={titulo} />
            <h3>{descripcion}</h3>
            <h6>{precio}</h6>
            
        </div>
    )
    }