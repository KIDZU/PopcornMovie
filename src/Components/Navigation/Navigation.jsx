import style from './Navigation.module.css'
import { Container } from '../Container/Container.jsx'
import { Button } from 'antd'
import logo from '../../../public/icon.png'
import { UserInfo } from './UserInfo/UserInfo.jsx'
import { NavLink } from 'react-router-dom'
export const Navigation = () => {
  return (
    <Container>
      <div className={style.navigation}>
        <NavLink to="/">
          {' '}
          <img className={style.logo} src={logo} alt="logo" />
        </NavLink>
        <ul className={style.nav_list}>
          <li>
            <NavLink to="/"> Главная</NavLink>
          </li>
          <li>
            <NavLink to="/"> Авиша</NavLink>
          </li>
          <li>
            <NavLink to="/contacs"> Контакты</NavLink>
          </li>
          <li>
            <NavLink to="/"> Категории</NavLink>
          </li>
        </ul>
        <UserInfo />
      </div>
    </Container>
  )
}
