import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './assets/scss/main.css'
import Layout from './components/Layout'
import Pokemon from './pages/Pokemon'
import PokemonDetail from './pages/PokemonDetail'

const App = () => {
  const [pokemon, setPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const limit = '151'
  const API_URL = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`

  const getPokemon = async () => {
    const response = await fetch(API_URL)
    const { results: data } = await response.json()

    data.map(async (e) => {
      const res = await fetch(`${e.url}`)
      const d = await res.json()

      setPokemon((pokemon) => [...pokemon, d])
      setFilteredPokemon((pokemon) => [...pokemon, d])

      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    })
  }

  //sort pokemon list
  filteredPokemon.sort((a, b) => {
    return a.id - b.id
  })

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Navigate to="/pokemon" />} />
        <Route
          path="/pokemon"
          element={
            <Pokemon
              pokemon={pokemon}
              filteredPokemon={filteredPokemon}
              setFilteredPokemon={setFilteredPokemon}
              isLoading={isLoading}
            />
          }
        />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Route>
    </Routes>
  )
}

export default App
