import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import wishlistReducer from './wishlistSlice'
import cartReducer from './cartSlice'
import resetReducer from './resetSlice'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    user: userReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    reset: resetReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

export let persistor = persistStore(store)
