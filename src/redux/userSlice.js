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
        },
        loginSuccess: (state, action) => {
            state.pending = false
            state.user = action.payload
        },
        loginFailure: (state, action) => {
            state.pending = false
            state.user = action.payload
        },
    },
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer
