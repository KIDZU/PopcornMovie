import { NavLink } from 'react-router-dom'
import style from './PersonCard.module.css'
export function PersonCard({ personData }) {
  const { enName, name, photo, profession, enProfession, id } = personData

  return (
    <NavLink className={style.blockPerson} to={`/personInfo/${id}`}>
      <img src={photo} alt="photoPerson" />
      <div>
        <p className={style.personName}>{name ? name : enName}</p>
        <p>{profession ? profession : enProfession}</p>
      </div>
    </NavLink>
  )
}
