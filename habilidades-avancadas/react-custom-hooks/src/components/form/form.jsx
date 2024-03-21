import { UseFormInput } from "../hooks/useFormInput"

export default function Form(){
   const FirstNameProps = UseFormInput("mariana")
   const lastNameProps = UseFormInput("Antonia")

   return(
      <>
      <label>
         First name: 

         <input {...FirstNameProps}/>
      </label>

      <label>
         Last name: 

         <input {...lastNameProps}/>
      </label>

      <p>Bom dia, {FirstNameProps.value} {lastNameProps.value}!</p>
      </>
   )
}