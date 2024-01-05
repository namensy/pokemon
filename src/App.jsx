import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const getMovies = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/1/')
    const pokedex = res.data
    console.log(pokedex);
  }

  getMovies()
  return (
    <>
      
    </>
  )
}

export default App
