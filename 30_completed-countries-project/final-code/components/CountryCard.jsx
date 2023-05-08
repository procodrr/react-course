import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
  data,
}) {
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
      <div className='flag-container'>
        <img src={flag} alt={name + ' Flag'} />
      </div>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  )
}
