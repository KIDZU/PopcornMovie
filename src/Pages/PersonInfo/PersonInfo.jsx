import style from './PersonInfo.module.css'
import { Container } from '../../Components/Container/Container.jsx'
import { useParams } from 'react-router-dom'
import { getPersonData } from '../../api/getPersonData.js'
import { useEffect, useState } from 'react'
import { Empty, Image, Typography } from 'antd';
import { getMoviesDataById } from '../../api/getMoviesDataById.js'
import { MovieCard } from '../../Components/MovieCards/MovieCard/MovieCard.jsx'

const initState = {
  name: '',
  enName:"",
  photo: "",
  sex:"",
  age:'',
  death:'',
  birthday:'',
  movies:[]
}


export function PersonInfo()  {
  const [personData, setPersonData] = useState(initState)
  const [moviesData, setMoviesData] = useState([])
  const { id } = useParams()

  useEffect(() => {
      getPersonData(id).then((data)=>{
        
        setPersonData(data)
        return data.movies
      })
      .then((movies)=>{
const moviesId = movies.map((movie)=>movie.id)
getMoviesDataById(moviesId).then((data)=>{
  setMoviesData(data.docs)
  console.log( data.docs)
})      })}, [])
    const {
      name,
      enName,
      photo,
      sex,
      age,
      death,
      birthday,
    } = personData

    const personDate = new Date(birthday)

    const personDateDays = personDate.getDate()
    const personDateMount = personDate.getMonth() +1
    const personDateYear = personDate.getFullYear()

  return (
    <Container>
    <div className={style.person}>

    <div className={style.photo} >
    {photo ? <Image width={"100%"} src={photo}/> : <Empty    
    description={
      "Нет фотографии"
    }/>}
    </div>

    <div className={style.personBlock}>
      <h2 className={style.name}>{name ? name : enName}</h2>
  <div className={style.personInfoBlock}>
    <p> Возраст: {age ? age : <span>не указан</span>}</p>
    <p>Пол: {sex ? sex : <span>транс</span>}</p>
  </div>
  <div className={style.personInfoBlock}>
     <p> Смерть: {death ? death : <span>жив пока ещё</span> }</p>
      <p>День рождения: {`${personDateDays}.${personDateMount}.${personDateYear}г.`}</p>
  </div>
<div>
  

</div>

    </div>

    </div>
    <h2 className={style.moviesBlock}>
    Участвовал в таких фильмах как:

  </h2>

<div className={style.moviesContainerBlockInfo}>
  {moviesData.map((movie)=>{
    return (

<MovieCard className={style.movieCards} data={movie}/>

      )
  })}
</div>
    </Container>
  )
}
 {/* <div className={style.moviesBlockInfo}>
      {movie.poster.url ? <Image width={200} src={movie.poster.url}/> : <Empty    
    description={
      "Нет фотографии"
    }/>}
                  
          <div>
            <h3>ID: {movie.id}</h3>
            <h3>Название: {movie.name}</h3>
            <h3>Рейтинг: {movie.rating.imdb}</h3>
         </div>
      </div> */}