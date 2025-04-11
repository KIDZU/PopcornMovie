import { NavLink } from 'react-router-dom'
import style from './PersonCard.module.css'
import { Image } from 'antd'
export function PersonCard({ personData }) {
  const { enName, name, photo, profession, enProfession, id } = personData

  return (
    <NavLink className={style.blockPerson} to={`/personInfo/${id}`}>
      <Image src={photo} alt="person photo" height={'100%'} width={100} />
      <div>
        <p className={style.personName}>{name ? name : enName}</p>
        <p>{profession ? profession : enProfession}</p>
      </div>
    </NavLink>
  )
}
