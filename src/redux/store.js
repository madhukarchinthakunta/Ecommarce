import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import productSlice from './productSlice';


const store =configureStore({
    reducer:{
        cart:cartSlice,
        Products:productSlice
    }
})

export default store;
