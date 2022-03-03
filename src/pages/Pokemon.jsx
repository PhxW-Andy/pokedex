import { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'
import Filter from '../components/Filter'
import Loading from '../components/Loading'

const Pokemon = ({
  pokemon,
  setFilteredPokemon,
  filteredPokemon,
  isLoading,
}) => {
  return (
    <div className="pokemon-grid overview">
      <Filter pokemon={pokemon} setFilteredPokemon={setFilteredPokemon} />
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
