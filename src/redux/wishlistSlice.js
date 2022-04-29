import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        added: false,
        product: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            state.added = true
            state.product = [...state.product, action.payload]
        },
        deleteFromWishlist: (state, action) => {
            state.added = false
            state.product = state.product.filter(
                (item) => item._id !== action.payload
            )
        },
    },
})

export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
