import { createStore, combineReducers } from "redux";
import cartReduce from './reduces/cart'

const rootReducer = combineReducers({
   cartProducts: cartReduce
})

const store = createStore(rootReducer)

export default store;