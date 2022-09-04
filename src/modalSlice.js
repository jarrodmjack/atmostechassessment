import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    content: [],
    open: false,
}


export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleOpen: (state) => {
            console.log('toggleOpen running')
            state.open = !state.open
        },
        addContent: (state, action) => {
            state.content = [action.payload]
        },
    },
})


export const { toggleOpen, addContent } = modalSlice.actions

export default modalSlice.reducer