import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div>
      < ItemListContainer title={'Bienvenidos a ConcorCase'}/>
      </div>
     
    </>
  )
}

export default App
