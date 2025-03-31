import style from './Contaner.module.css'
export function Container({ children }) {
  return <div className={style.container}>{children}</div>
}
