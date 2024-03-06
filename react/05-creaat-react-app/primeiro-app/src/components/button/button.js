 import "./button.css"
 import React, {Component} from "react"

//  const Button = (props) => {
//    return <button className="btn">{props.label}</button>
// }

class Button extends Component {
  render(){
    return <button className="btn">{this.props.label}</button>
  }
}

Button.defaultProps = {
  label: 'clique aqui com class'
}

export default Button 