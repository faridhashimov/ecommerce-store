import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
        // totalSum: 0,
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
        //     state.totalSum = state.products
        //         .reduce((sum, prevValue) => sum + prevValue.total, 0)
        //         .toFixed(2)
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
            // state.totalSum = state.products
            //     .reduce((sum, prevValue) => sum + prevValue.total, 0)
            //     .toFixed(2)
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
            // state.totalSum = state.products
            //     .reduce((sum, prevValue) => sum + prevValue.total, 0)
            //     .toFixed(2)
        }
    },
})

export const { addToCart, deleteFromCart, increaseQt, decreaseQt } =
    cartSlice.actions
export default cartSlice.reducer
