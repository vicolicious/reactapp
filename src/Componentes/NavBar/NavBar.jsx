import './NavBar.css'


export default function Nav(){
    const links = [{id: 1, nombre:'Remeras', url:'/'}, {id: 2, nombre:'Pantalones', url:'/'},
    {id: 3, nombre:'Buzos', url:'/'},]

    return(
        <header>
            <ul className='contenedorNav'>
                <li className='listaNav'>
                    <a href="/"></a>
                    <h4>logo mi tienda</h4>
                </li>
                {links.map((item)=>{
                    return <li key={item.id} className='listaNav'>
                    <a  className='li' href={item.url} >{item.nombre}</a></li>
                })}
                <li className='listaNav'>
                <span class="jam jam-shopping-cart"></span>
                </li>
            </ul>
        </header>
       
    )

}