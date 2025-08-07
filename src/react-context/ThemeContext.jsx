import {createContext, useContext, useState} from "react"

const ThemeContext = createContext(null)

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light")

  const toggleThem = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleThem}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
