import { Component } from 'react'

async function createDeck(){
   const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
   const deck = await response.json()
   return deck.deck_id
}

async function getCards(deckId){
   const response = await fetch(`https://deckofcardsapi.com/api/${deckId}/draw/?count=52`)
   return await response.json()
}

class DeckOfCards extends Component {
   constructor () {
      super()
      this.state = {}
   }

   render() {
      return (
         <section>
            <ul></ul>
         </section>
      )
   }
}

export default DeckOfCards 