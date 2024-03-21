import { createContext } from "react";

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
   return (
      <ThemeContext.Provider value={{themes}}>
         {props.children}
      </ThemeContext.Provider>
   )
}