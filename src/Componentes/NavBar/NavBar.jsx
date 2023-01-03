import './NavBar.css'


export default function Nav(){
    const links = [{nombre:'Remeras', url:'/'}, {nombre:'Pantalones', url:'/'},
    {nombre:'Buzos', url:'/'},]

    return(
        <header>
            <ul className='contenedorNav'>
                <li className='listaNav'>
                    <a href="/"></a>
                    <h4>logo mi tienda</h4>
                </li>
                {links.map((item)=>{
                    return <li className='listaNav'>
                    <a  className='li' href={item.url} key={item.nombre} >{item.nombre}</a></li>
                })}
                <li className='listaNav'>
                <span class="jam jam-shopping-cart"></span>
                </li>
            </ul>
        </header>
       
    )

}