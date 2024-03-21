import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const ThemeTogglerButton = () => {
   const { themes } = useContext(ThemeContext)
   console.log('themesToggleButton', themes)
   return (
      <div>
         
      </div>
   )
}