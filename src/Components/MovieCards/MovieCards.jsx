import axios from 'axios'
import { MovieCard } from './MovieCard/MovieCard.jsx'
import style from './MovieCards.module.css'
import { useEffect, useState } from 'react'
import { createStringQuery } from '../../helpers/createStringQuery.js'
import { X_API_KEY } from '../../constants.js'
import { Spin } from 'antd'

const selectedFields = ['name', 'poster', 'rating', 'id']
const selectedFieldsString = createStringQuery(selectedFields, 'selectedFields')

const notNullFields = ['name', 'poster.url', 'rating.imdb', 'id', 'description']
const notNullFieldsString = createStringQuery(notNullFields, 'notNullFields')

export function MovieCards() {
  const [isLoading, setIsLoading] = useState(true)
  const [moviesData, setMoviesData] = useState([])

  const getData = async () => {
    const { data } = await axios(
      `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=4&${selectedFieldsString}&${notNullFieldsString}`,
      {
        headers: { 'X-API-KEY': X_API_KEY },
      },
    )
    setMoviesData(data.docs)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const moviesCards = moviesData.map((data) => (
    <MovieCard key={data.name} data={data} />
  ))

  return (
    <div className={style.movieCards}>{isLoading ? <Spin /> : moviesCards}</div>
  )
}
