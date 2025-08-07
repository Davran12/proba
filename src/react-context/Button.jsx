import {useTheme} from "./ThemeContext"

export function Button() {
  const {theme, toggleThem} = useTheme()

  return <button onClick={toggleThem}>Текущая тема: {theme}</button>
}
