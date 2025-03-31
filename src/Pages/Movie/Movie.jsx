import style from './Movie.module.css'
import { Container } from '../../Components/Container/Container.jsx'
import { useParams } from 'react-router-dom'
import { createStringQuery } from '../../helpers/createStringQuery.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { X_API_KEY } from '../../constants.js'
import { Image } from 'antd'

const selectedFields = ['name', 'poster', 'rating', 'id', 'description']
const selectedFieldsString = createStringQuery(selectedFields, 'selectedFields')

const initState = {
  name: '',
  poster: { url: '' },
  rating: { imdb: 0 },
  id: 0,
  description: '',
}

export const Movie = () => {
  const [movieData, setMovieData] = useState(initState)
  const { id } = useParams()

  const getData = async () => {
    const { data } = await axios(
      `https://api.kinopoisk.dev/v1.4/movie/${id}?${selectedFieldsString}`,
      {
        headers: { 'X-API-KEY': X_API_KEY },
      },
    )
    setMovieData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const {
    name,
    rating: { imdb },
    poster: { url },
    description,
  } = movieData

  return (
    <Container>
      <div className={style.movieBlock}>
        <div className={style.movieBlockPrew}>
          <Image
            src={url}
            width={400}
            className={style.movieBlockIcon}
            alt="movieIcon"
          />
          <p>{name}</p>
        </div>
        <p className={style.movieBlockText}>{description}</p>
      </div>
    </Container>
  )
}
