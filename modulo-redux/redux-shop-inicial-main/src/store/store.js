import { createStore, combaineReducers } from "redux";
import cartReduce from './reduces/cart'

const rootReducer = combaineReducers({
   cartProducts: cartReduce
})

const store = createStore(rootReducer)

export default store;