import { Button } from 'antd'
import style from './MovieCard.module.css'
import { NavLink } from 'react-router-dom'

export function MovieCard({ data }) {
  const {
    name,
    rating: { imdb },
    poster: { url },
    id,
  } = data

  return (
    <div className={style.movieCard}>
      <img src={url} alt="preview" className={style.movieCardImg} />
      <h5>{name}</h5>
      <div className={style.movieCardInfo}>
        <p>15:00 - 17:00</p>
        <h5>imdb: {imdb}</h5>
      </div>
      <NavLink to={`/movie/${id}`}>
        <Button>Узнать больше</Button>
      </NavLink>
    </div>
  )
}
