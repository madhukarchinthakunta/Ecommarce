import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice=createSlice({
    name:"product",
    initialState:{data:[],},
    reducers:{
        fetchProducts(state,action){
            state.data=action.payload
        }
    }
})

export const{fetchProducts}=productSlice.actions

export default productSlice.reducer

export function getProducts(){
    return async function getProductsThunk(dispatch,getState) {
        const result= await axios.get('https://fakestoreapi.com/products')
        dispatch(fetchProducts(result.data))
    }
}