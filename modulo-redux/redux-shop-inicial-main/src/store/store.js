import { configureStore } from '@reduxjs/toolkit';
import cartReduce from './reduces/cart'

const store = configureStore({
   reducer:{
      cartProducts: cartReduce
   }
})

export default store;