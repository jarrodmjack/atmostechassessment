import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    content: [],
    open: false,
    heading: '',
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleOpen: (state) => {
            state.open = !state.open
        },
        updateHeading: (state, action) => {
            if(!state.open){
                state.heading = action.payload
            }else{
                return
            }
            
        }
    },
})

export const { toggleOpen, updateHeading} = modalSlice.actions
export default modalSlice.reducer