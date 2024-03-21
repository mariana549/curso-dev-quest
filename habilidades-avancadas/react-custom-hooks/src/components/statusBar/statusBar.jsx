import { useState, useEffect } from "react"

export default function StatusBar() {
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


   return (
      <>
         <h1>{isOnline ? "✅ online" : "❌ Disconnected!" }</h1>
      </>
   )
};
