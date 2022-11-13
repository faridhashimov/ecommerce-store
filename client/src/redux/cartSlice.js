import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload)
            state.totalSum = action.payload.price * action.payload.quantity
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
                product.id === action.payload.id &&
                product.productColor === action.payload.productColor &&
                product.productSize === action.payload.productSize
                    ? ((product.quantity += 1),
                      (product.total = product.quantity * product.price))
                    : product
            )
        },
        decreaseQt: (state, action) => {
            state.products.forEach((product) =>
                product.id === action.payload.id &&
                product.productColor === action.payload.productColor &&
                product.productSize === action.payload.productSize
                    ? ((product.quantity -= 1),
                      (product.total = product.total - product.price))
                    : product
            )
        },
        resetCart: (state) => {
            state.products = []
        },
    },
})

export const { addToCart, deleteFromCart, increaseQt, decreaseQt, resetCart } =
    cartSlice.actions
export default cartSlice.reducer
