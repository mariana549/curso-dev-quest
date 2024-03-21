import { createContext, useState } from "react";

export const themes = {
   ligth: {
      color: '#dc143c',
      background: '#fff'
   },
   dark: {
      color: '#dc110c',
      background: "#000"
   }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
   const [ theme, setTheme ] = useState(themes.ligth)

   return (
      <ThemeContext.Provider value={{theme, setTheme}}>
         {props.children}
      </ThemeContext.Provider>
   )
}