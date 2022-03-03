import { useState, useEffect } from 'react'

const Filter = ({ setFilteredPokemon, pokemon }) => {
  const [value, setValue] = useState('')

  //set value from input field
  const onChange = (e) => {
    let value = e.target.value
    setValue(value.toLowerCase())

    if (value == '') {
      setFilteredPokemon(pokemon)
    }
  }

  //filter pokemon
  useEffect(() => {
    const filtered = pokemon.filter((poke) => poke.name.startsWith(value))
    setFilteredPokemon(filtered)
  }, [value])

  return (
    <div className="navigation-search">
      <div className="search-input">
        <label htmlFor="name">Search:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={onChange}
          autoComplete="off"
        />
      </div>
    </div>
  )
}

export default Filter
