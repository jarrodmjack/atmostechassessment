import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    content: [],
}


export const savedHomesSlice = createSlice({
    name: 'savedHomes',
    initialState,
    reducers: {
        addContent: (state, action) => {
            state.content = [...state.content, action.payload]
        },
    },
})


export const { addContent } = savedHomesSlice.actions

export default savedHomesSlice.reducer 