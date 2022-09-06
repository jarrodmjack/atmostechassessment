import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    content: [
        {
            homePlanId: 1,
            name: "The Medita",
            numBeds: 4,
            numBaths: 4,
            sqft: 4300,
            tags: ['master on main', 'patio'],
            description: "The Medita is a spacious model featuring an open floor plan and spacious foyer. You’ll feel like you blend in with your surroundings when you’re at home.\n\nThe plan comes with 3 different layout options on the first floor, and an optional patio addition.",
            image: 'https://storage.googleapis.com/home_plan_images/70660mk_0.jpg',
            isSaved: false,
        },
        {
            homePlanId: 2,
            name: "The Modesto",
            numBeds: 2,
            numBaths: 1,
            sqft: 1800,
            tags: ['cozy space', 'patio'],
            description: "The Modesto is a cozy bungalow model guaranteed to be your happy place.\n\nThe plan comes with 2 different layout options on the first floor, and an optional patio addition.",
            image: 'https://storage.googleapis.com/home_plan_images/28935jj_0.jpg',
            isSaved: false,
        },
        {
            homePlanId: 3,
            name: "The Gallago",
            numBeds: 4,
            numBaths: 3,
            sqft: 2100,
            tags: ['low noise', 'urban'],
            description: "The Gallago is a space crafted to blend perfectly into an urban setting, with noise-reduction walls and modern touches that make city life a joy.\n\nThe plan comes with 3 different layout options on the first floor.",
            image: 'https://storage.googleapis.com/home_plan_images/90304pd_0.jpg',
            isSaved: false,
        },
        {
            homePlanId: 4,
            name: "The Altastone",
            numBeds: 3,
            numBaths: 2,
            sqft: 2300,
            tags: [], // Intentionally left empty :)
            description: "The Altastone is an adobe-inspired home designed with the dry desert in mind. Its unique architecture will keep the home cool during the day while providing plenty of natural light.\n\nThe plan comes with a single layout with an optional patio.",
            image: 'https://storage.googleapis.com/home_plan_images/0837w_0.jpg',
            isSaved: false,
        },
    ],
}


export const homesSlice = createSlice({
    name: 'homes',
    initialState,
    reducers: {
        saveHome: (state, action) => {
            state.content[action.payload - 1].isSaved = !state.content[action.payload - 1].isSaved
        },
    },
})


export const { saveHome } = homesSlice.actions

export default homesSlice.reducer 