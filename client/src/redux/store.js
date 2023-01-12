import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import wishlistReducer from './wishlistSlice'
import cartReducer from './cartSlice'
import resetReducer from './resetSlice'

import { ecommerceApi } from './ecommerceApi/ecommerceApi'

export const store = configureStore({
    reducer: {
        user: userReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
        reset: resetReducer,
        [ecommerceApi.reducerPath]: ecommerceApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ecommerceApi.middleware),
})
