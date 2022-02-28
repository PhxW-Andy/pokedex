import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const [detail, setDetail] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { name } = useParams()
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${name}`

  const getDetails = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()

    setDetail({
      name: data.name,
      id: data.id,
      img: data.sprites.other['official-artwork'].front_default,
      types: data.types,
      abilities: data.abilities,
      base_experience: data.base_experience,
      stats: data.stats,
    })

    setIsLoading(false)
  }
  setTimeout(() => {
    console.log(detail)
  }, 5000)
  useEffect(() => {
    getDetails()
  }, [])

  return (
    <>
      {!isLoading && (
        <div className="pokemon-grid">
          <div className="pokemon-grid__detail">
            <div className="detail__header">
              <h1>
                <span>
                  #
                  {detail.id < 10
                    ? `00${detail.id}`
                    : detail.id < 100
                    ? `0${detail.id}`
                    : `${detail.id}`}
                </span>
                {detail.name}
              </h1>
              <div className="types">
                {detail.types.map((t) => (
                  <span key={t.type.name} className={t.type.name}>
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="detail__image">
              <img src={detail.img} alt={detail.name} />
            </div>
            <div className="detail__stats">
              <div className="stats-info">
                <h2>Base stats:</h2>
                {detail.stats.map((t) => (
                  <div key={t.stat.name} className={t.stat.name}>
                    <span>{t.stat.name}</span>
                    <span className="max-value">
                      <span
                        className="basestat"
                        style={{
                          width: `calc((${t.base_stat} / 170) * 100%)`,
                        }}
                      >
                        {t.base_stat}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PokemonDetail
