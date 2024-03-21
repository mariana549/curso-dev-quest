import { useState } from "react";

export function UseFormInput(InitialValue){
   const [value, setValue] = useState(InitialValue);

   function handleChange(event) {
      setValue(event.target.value);
   }

   const inputProps = {
      value: value,
      onChange: handleChange
   }

   return inputProps
}