import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) =>
                    product.id !== action.payload.id ||
                    product.productColor !== action.payload.productColor ||
                    product.productSize !== action.payload.productSize
            )
        },
        increaseQt: (state, action) => {
            state.products.forEach((product) =>
                ( product.id === action.payload.id &&
                    product.productColor === action.payload.productColor &&
                    product.productSize === action.payload.productSize) ? (product.quantity += 1) : product
            )
        },
        decreaseQt: (state, action) => {
            state.products.forEach((product) =>
            ( product.id === action.payload.id &&
                product.productColor === action.payload.productColor &&
                product.productSize === action.payload.productSize) ? (product.quantity -= 1) : product
            )
        },
    },
})

export const { addToCart, deleteFromCart, increaseQt, decreaseQt } =
    cartSlice.actions
export default cartSlice.reducer
