import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar';
import Formulario from './components/Formulario/Formulario';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <h1>Bienvenidos a ConcorCase</h1>
          <div className='separador'>Productos Destacados:</div>
          <Routes>

            <Route path='/' element= {<ItemListContainer/>} />
            <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
            <Route path='/item/:itemId' element= {<ItemDetailContainer/>}/>
            <Route path='/formulario' element={<Formulario />} />
            <Route path='*' element= {<h1> 404 NOT FOUND </h1>} />

          </Routes>
        </BrowserRouter>
      </div>
     
    </>
  );
}

export default App


//<ItemListContainer greeting={'Bienvenidos a ConcorCase'}/>
//<ItemDetailContainer />