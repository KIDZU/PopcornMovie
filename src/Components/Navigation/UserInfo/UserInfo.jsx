import { Button } from 'antd'
import style from './UserInfo.module.css'
import ava from '../../../../public/ava.jpg'
import { NavLink } from 'react-router-dom'
export function UserInfo() {
  return (
    <div className={style.block}>
      <div className={style.block_info}>
        <p className={style.name}>Андрей</p>
        <NavLink to="/login">
        <Button className={style.button}>Кнопка</Button>
        </NavLink>
      </div>
      <img className={style.avatar} src={ava} alt="ava" />
    </div>
  )
}
