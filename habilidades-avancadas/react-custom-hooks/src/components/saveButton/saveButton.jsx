import { useEffect } from "react"
import { useState } from "react"

function SaveButton(){
   const {isOnline, setIsOnline} = useState(true)

   useEffect(() => {
      function handleOnline(){
         setIsOnline(true)
      }
      
      function handleOffine(){
         setIsOnline(false)
      }

      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffine)
      return () => {
         window.removeEventListener('online', handleOnline)
         window.removeEventListener('offline', handleOffine)
      }
   }, [])

   function handleSaveClick(){
      console.log("save clicked!")
   }
   return (
      <>
      <button disabled={!isOnline} onClick={handleSaveClick}>
         { isOnline ? "save progress" : "reconnecting ...."}
      </button>
      </>
   )
}