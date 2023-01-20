import {
    configureStore,
    createListenerMiddleware,
    isAnyOf,
} from '@reduxjs/toolkit'
import userReducer, { logOut, userLogin } from './userSlice'
import wishlistReducer, {
    addToWishlist,
    deleteFromWishlist,
} from './wishlistSlice'
import cartReducer, {
    addToCart,
    deleteFromCart,
    increaseQt,
    decreaseQt,
    resetCart,
} from './cartSlice'
import resetReducer from './resetSlice'

import { ecommerceApi } from './ecommerceApi/ecommerceApi'

const cartListenerMiddleware = createListenerMiddleware()
cartListenerMiddleware.startListening({
    matcher: isAnyOf(
        addToCart,
        deleteFromCart,
        increaseQt,
        decreaseQt,
        resetCart
    ),
    effect: (action, listenerApi) => {
        localStorage.setItem(
            'products',
            JSON.stringify(listenerApi.getState().cart)
        )
    },
})

const wishlistListenerMiddleware = createListenerMiddleware()
wishlistListenerMiddleware.startListening({
    matcher: isAnyOf(addToWishlist, deleteFromWishlist),
    effect: (action, listenerApi) => {
        localStorage.setItem(
            'wishlist',
            JSON.stringify(listenerApi.getState().wishlist)
        )
    },
})

const userListenerMiddleware = createListenerMiddleware()
userListenerMiddleware.startListening({
    matcher: isAnyOf(logOut, userLogin),
    effect: (action, listenerApi) => {
        localStorage.setItem(
            'userData',
            JSON.stringify(listenerApi.getState().user)
        )
    },
})


const cartState = JSON.parse(localStorage.getItem('products') || '[]')
const wishlistState = JSON.parse(localStorage.getItem('wishlist') || '[]')
const userState = JSON.parse(localStorage.getItem('userData') || '{}')

export const store = configureStore({
    preloadedState: {
        user: userState,
        wishlist: wishlistState,
        cart: cartState,
    },
    reducer: {
        user: userReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
        reset: resetReducer,
        [ecommerceApi.reducerPath]: ecommerceApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            ecommerceApi.middleware,
            cartListenerMiddleware.middleware,
            wishlistListenerMiddleware.middleware,
            userListenerMiddleware.middleware
        ),
})
