import style from './Movie.module.css'
import { Container } from '../../Components/Container/Container.jsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Image } from 'antd'
import { getMovieData } from '../../api/getMovieData.js'
import { PersonCard } from '../../Components/PersonCard/PersonCard.jsx'



const initState = {
  name: '',
  poster: { url: '' },
  rating: { imdb: 0 },
  id: 0,
  description: '',
  persons:[]
}

export const Movie = () => {
  const [movieData, setMovieData] = useState(initState)
  const { id } = useParams()



  useEffect(() => {
    getMovieData(id).then((data)=>{
      setMovieData(data)
    })
  }, [])

  const {
    name,
    rating: { imdb },
    poster: { url },
    description,
    persons
  } = movieData

  const personsByProf = {}
persons.forEach((person)=>{
  const key = person.enProfession
if (personsByProf[key]){
  personsByProf[key].push(person)
}
else{
  personsByProf[key] = [person]
}
})

function getRenderPersonsByProf(){
  return Object.keys(personsByProf).map((key)=>{
    const {profession, enProfession} = personsByProf[key][0]
    const title = profession ?? enProfession
    return (
      <div>
        <h4>
          {title}
        </h4>
        <div>
          {personsByProf[key].map((personData)=>( 
          <PersonCard personData={personData} key={personData.id} />
  ))}
        </div>
      </div>
    )
  })
}

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
        </div>
        <div className={style.movieBlockText}>

          <p className={style.movieTitle}>{name}</p>
        <div className={style.tableInfoMovie}>
              <p>Рейтинг: {imdb ? imdb : "недостаточно оценок"}</p>
        </div>
          <p>{description}</p>
        </div>
      </div>
      
      <div className={style.personsListContainer}>
      <h3>Актёрский состав</h3>
     <div className={style.personsList}>{getRenderPersonsByProf()}</div>
     </div>
    </Container>
  )
}
