import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
    },
    reducers: {
        addToCart: (state, { payload }) => {
            if (
                state.products.some(
                    (product) =>
                        product.id === payload.id &&
                        product.productColor === payload.productColor &&
                        product.productSize === payload.productSize
                )
            ) {
                state.products.map((product) =>
                    product.id === payload.id &&
                    product.productColor === payload.productColor &&
                    product.productSize === payload.productSize
                        ? ((product.quantity += payload.quantity),
                          (product.total = product.quantity * product.price))
                        : product
                )
            } else {
                state.products.push(payload)
            }
        },
        deleteFromCart: (
            state,
            { payload: { id, productColor, productSize } }
        ) => {
            state.products = state.products.filter(
                (product) =>
                    product.id !== id ||
                    product.productColor !== productColor ||
                    product.productSize !== productSize
            )
        },
        increaseQt: (state, { payload: { id, productColor, productSize } }) => {
            state.products.forEach((product) =>
                product.id === id &&
                product.productColor === productColor &&
                product.productSize === productSize
                    ? ((product.quantity += 1),
                      (product.total = product.quantity * product.price))
                    : product
            )
        },
        decreaseQt: (state, { payload: { id, productColor, productSize } }) => {
            state.products.forEach((product) =>
                product.id === id &&
                product.productColor === productColor &&
                product.productSize === productSize
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
