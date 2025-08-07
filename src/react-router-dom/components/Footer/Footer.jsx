import {NavLink} from "react-router-dom"
import {pages} from "../../utils/routes"
import styles from "./Footer.module.scss"
export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        {pages.map((route) => (
          <NavLink
            to={route.path}
            className={(val) => {
              const {isActive} = val
              return isActive ? styles.active : styles.link
            }}
          >
            {route.title}
          </NavLink>
        ))}
      </nav>
    </footer>
  )
}
