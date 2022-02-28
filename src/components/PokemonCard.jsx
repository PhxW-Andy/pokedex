import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({ pokemon }) => {
  const data = {
    name: pokemon.name,
    id: pokemon.id,
    img: pokemon.sprites.other['official-artwork'].front_default,
    types: pokemon.types,
  }

  return (
    <Link to={`/pokemon/${data.name}`}>
      <div
        key={data.name}
        className={`pokemon-grid__item ${data.types[0].type.name}`}
      >
        <div className="title">
          <h3>
            <span>
              #
              {data.id < 10
                ? `00${data.id}`
                : data.id < 100
                ? `0${data.id}`
                : `${data.id}`}
            </span>
            {data.name}
          </h3>
        </div>
        <div className="image">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="types">
          {data.types.map((t) => (
            <span key={t.type.name} className={t.type.name}>
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard
