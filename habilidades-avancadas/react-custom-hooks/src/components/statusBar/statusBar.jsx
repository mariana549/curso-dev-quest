import useOnlineStatus from "../hooks/useOnlineStatus"

export default function StatusBar() {
   const isOnline = useOnlineStatus();

   return (
      <>
         <h1>{isOnline ? "✅ online" : "❌ Disconnected!"}</h1>
      </>
   )
}
