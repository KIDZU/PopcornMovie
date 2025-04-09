import React from 'react'
import { MovieCards } from '../../Components/MovieCards/MovieCards.jsx'
import { Container } from '../../Components/Container/Container.jsx'
import { getMoviesDataNew } from '../../api/getMoviesDataNew.js'
import { getMoviesDataPopular } from '../../api/getMoviesDataPopular.js'

export function Main() {
  return (
    <Container>
      <h4>Новинки</h4>
      <MovieCards getData={getMoviesDataNew} />
      <h4>Популярное</h4>
      <MovieCards getData={getMoviesDataPopular}  />
    </Container>
  )
}
