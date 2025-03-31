import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useParams,
} from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Main } from './Pages/Main/Main'
import { Movie } from './Pages/Movie/Movie'

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/:name?" element={<Main />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
