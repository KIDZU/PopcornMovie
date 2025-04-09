import React from 'react'
import { Container } from '../../Components/Container/Container'
import style from "./Contacs.module.css"

export function Contacs() {
  return (
    <Container>
  <div className={style.contactsBlock}>
Контакты для связи с нами
    <ul> 
    <li>
    Номер телефона службы поддрежки:  <a  href="tel:+79999999999">+79999999999</a> 
    </li>
    <li>
        Адрес электронной почты: <a  href="mailto:nevashno@mail.ru">nevashno@mail.ru</a> 
    </li>
    </ul>
  </div>
    </Container>
  )
}
