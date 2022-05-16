import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        pending: null,
        user: null,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.pending = true
            state.error = false
        },
        loginSuccess: (state, action) => {
            state.pending = false
            state.user = action.payload
            state.error = false
        },
        loginFailure: (state) => {
            state.pending = false
            state.error = true // state.error = action.payload
        },
        logOut: (state) => {
            state.pending = false
            state.user = null
            state.error = false
        }
    },
})

export const { loginStart, loginSuccess, loginFailure, logOut } = userSlice.actions
export default userSlice.reducer
