import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        active: false,
        product: null
    },
    reducers: {
        openModal: (state, action) => {
            state.active = true
            state.product = action.payload
        },
        closeModal: (state) => {
            state.active = false
            state.product = null
        },
    },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
