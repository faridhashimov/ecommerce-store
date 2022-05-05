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
    },
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer
