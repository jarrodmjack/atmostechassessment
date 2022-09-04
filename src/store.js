import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './slices/modalSlice';

import homesReducer from './slices/homesSlice'
import lotsReducer from './slices/lotsSlice'


export const store = configureStore({
    reducer: {
        modal: modalReducer,

        homes: homesReducer,
        lots: lotsReducer,
    },
})