import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(localStorage.getItem('userData')) || {},
    },
    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = null
        },
    },
})

export const { userLogin, logOut } = userSlice.actions
export default userSlice.reducer
