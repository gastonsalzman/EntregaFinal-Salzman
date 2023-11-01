
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  

  return (
    <>
      <NavBar />
      <div>
      <ItemListContainer title={'Bienvenidos a ConcorCase'}/>
      <ItemCount initial={1} stock={12} onAdd={(quantity) => console.log('Cantidad Agregada ',quantity)}/>
      </div>
     
    </>
  );
}

export default App
