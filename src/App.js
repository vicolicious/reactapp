import logo from './logo.svg';
import './App.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import CartWidget from './cardWidget/CardWidget';
import Boton from './Boton/Boton';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='bienvenidos'/>
      <CartWidget/>
      <br></br>
      <br></br>
      <Boton/>


    </div>
  );
}

export default App;
