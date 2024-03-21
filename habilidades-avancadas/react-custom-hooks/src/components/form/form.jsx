export default function Form(){


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