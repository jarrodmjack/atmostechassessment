import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    content: [
        {
            lotId: 1,
            address: "123 Example Ln, Charlotte, NC",
            acres: 1.6,
            description: "This sprawling lot is located on the outskirts of Charlotte, with nearby boat access to Example Lake and a straight shot to downtown Charlotte via Example Highway.",
            image: 'https://storage.googleapis.com/plot_images/1018314458',
            isSaved: false,
        },
        {
            lotId: 2,
            address: "123 Sample Ln, Raleigh, NC",
            acres: 0.7,
            description: "This spacious lot is in the gorgeous Example Neighborhood, surrounded by historic landmarks such as The Cool Things Museum and The Very Old House.",
            image: 'https://storage.googleapis.com/plot_images/1018937216',
            isSaved: false,
        },
        {
            lotId: 3,
            address: "123 Test Ct, Charlotte, NC",
            acres: 0.28,
            description: "This cozy lot is directly next to downtown Charlotte - from your front yard you can walk to uptown. Be sure to check out The Average Bowling Alley or one of the plenty of restaurants nearby!",
            image: 'https://storage.googleapis.com/plot_images/1043665691',
            isSaved: false,
        },
        {
            lotId: 4,
            address: "123 Far Far Away St, Nowhere, NC",
            acres: 9.15,
            description: "This gigantic lot is far from any major population center - in fact, you’ll probably never meet a single person out here! If you’re looking for solitude at a bargain, this is the perfect place for you. There’s absolutely nothing around except nature.",
            image: 'https://storage.googleapis.com/plot_images/1030870481',
            isSaved: false,
        },
    ],
}


export const lotsSlice = createSlice({
    name: 'lots',
    initialState,
    reducers: {
        saveLot: (state, action) => {
            state.content[action.payload - 1].isSaved = !state.content[action.payload - 1].isSaved
        },
    },
})


export const { saveLot } = lotsSlice.actions

export default lotsSlice.reducer 