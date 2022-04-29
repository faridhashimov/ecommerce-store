import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.products = [...state.products, action.payload]
        },
        deleteFromoCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product._id !== action.payload
            )
        },
    },
})

export const { addToCart, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer
