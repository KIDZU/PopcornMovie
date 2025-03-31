import React from 'react'
import { MovieCards } from '../../Components/MovieCards/MovieCards.jsx'
import { Container } from '../../Components/Container/Container.jsx'

export function Main() {
  return (
    <Container>
      <h4>Новинки</h4>
      <MovieCards />
    </Container>
  )
}
