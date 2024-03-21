import { useState } from "react";

export default function Form(){
   const [firstName, setFirstName] = useState("Mariana");
   const [lastName, setLastName] = useState("Antonia");

   function handleFirstNameChange(event) {
      setFirstName(event.target.value);
   }

   function handleLastNameChange(event) {
      setLastName(event.target.value);
   }

   return(
      <>
      <label>
         First name: 

         <input value={firstName} onChange={handleFirstNameChange}></input>
      </label>

      <label>
         Last name: 

         <input value={lastName} onChange={handleLastNameChange}></input>
      </label>

      <p>Bom dia, {firstName} {lastName}!</p>
      </>
   )
}