import { createContext, useState } from "react";

export const themes = {
   ligth: {
      color: '#000000',
      background: '#ffff'
   },
   dark: {
      color: '#fff',
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