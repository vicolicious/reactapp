import logo from './logo.svg';
import './App.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Nav from './Componentes/NavBar/NavBar';
import BotonCarrito from './Boton/BotonCarrito';

function App() {
  return (
    <div>
      <Nav/>
      <ItemListContainer />
    <BotonCarrito/>
    </div>
  );
}

export default App;
