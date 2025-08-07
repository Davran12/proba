import React from "react"
import styles from "./Header.module.scss"
import {useNavigate, useLocation} from "react-router-dom"
import { pages } from "../../utils/routes"

export const Header = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()

  return (
    <div className={styles.wrapper}>
      <nav>
        {pages.map((item, index) => (
          <span
            className={pathname === item.path ? styles.activePath : ""}
            key={index}
            onClick={() => navigate(item.path)}
          >
            {item.title}
          </span>
        ))}
      </nav>
    </div>
  )
}
