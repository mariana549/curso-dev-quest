 import "./button.css"
//  import React, {Component} from "react"

 const sayHello = () => {
     console.log("ola mundo!")
 }

 const Button = (props) => {
   return <button className="btn" onClick={sayHello}>{props.label}</button>
}

Button.defaultProps = {
  label: 'clique aqui'
}

export default Button 