import useOnlineStatus from "../hooks/useOnlineStatus"

export  default function SaveButton(){
   const isOnline = useOnlineStatus();

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