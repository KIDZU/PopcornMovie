import { MovieCard } from './MovieCard/MovieCard.jsx'
import style from './MovieCards.module.css'
import { useEffect, useState } from 'react'
import { Spin } from 'antd'


export function MovieCards({getData}) {
  const [isLoading, setIsLoading] = useState(true)
  const [moviesData, setMoviesData] = useState([])


  useEffect(() => {
    getData().then((data)=>{
      setMoviesData(data.docs)
      setIsLoading(false)
    })
  }, [])

  const moviesCards = moviesData.map((data) => (
    <MovieCard key={data.name} data={data} />
  ))
  return (
    <div className={style.movieCards}>{isLoading ? <Spin /> : moviesCards}</div>
  )
}
