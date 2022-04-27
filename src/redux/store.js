import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import modalReducer from './modalSlice'
import wishlistReducer from './wishlistSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalReducer,
        wishlist: wishlistReducer,
    },
})
