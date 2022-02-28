import { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'
import NavigationSearch from '../components/NavigationSearch'
import Loading from '../components/Loading'

const Pokemon = ({
  pokemon,
  setFilteredPokemon,
  filteredPokemon,
  isLoading,
}) => {
  return (
    <div className="pokemon-grid overview">
      <NavigationSearch
        pokemon={pokemon}
        setFilteredPokemon={setFilteredPokemon}
      />
      <div className="pokemon-grid__layout">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="pokemon-grid__inner">
            {filteredPokemon.map((poke) => (
              <PokemonCard key={poke.id} pokemon={poke} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Pokemon
