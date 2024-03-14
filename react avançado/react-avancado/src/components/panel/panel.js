import  { Component } from "react"
import "../panel/panel.css"

class Panel extends Component{
   constructor(){
      super()
      this.state = {
         title: "Titulo do painel",
      }
   }

   render() {
      return (
         <section className="panel" onClick={() => this.setState({title: "Titulo novo"})}>
            <h2>{this.state.title}</h2>
         </section>
      )
   }
}

export default Panel