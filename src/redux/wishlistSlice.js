import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        added: false,
        product: []
    },
    reducers: {
        addToWishlist: (state, action) => {
            state.added = true
            // state.product((prev) => [...prev, action.payload])

        },
        deleteFromWishlist: (state) => {
            state.added = false
            state.product = null
        },
    },
})

export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
