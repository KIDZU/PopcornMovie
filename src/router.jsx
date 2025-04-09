import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Main } from './Pages/Main/Main'
import { Movie } from './Pages/Movie/Movie'
import { Contacs } from './Pages/Contacs/Contacs'
import { Login } from './Pages/Login/Login'
import { PersonInfo } from './Pages/PersonInfo/PersonInfo'



export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/:name?" element={<Main />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/contacs/" element={<Contacs />} />
          <Route path="/personInfo/:id" element={<PersonInfo />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  )
}
