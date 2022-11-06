import { createSlice } from '@reduxjs/toolkit'

const resetSlice = createSlice({
    name: 'reset',
    initialState: {
        clicked: null,
    },
    reducers: {
        add: (state) => {
            state.clicked = 'clicked'
        },
        reset: (state) => {
            state.clicked = null
        },
    },
})

export const { add, reset } = resetSlice.actions
export default resetSlice.reducer
