import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './slices/modalSlice';
import savedHomesReducer from './slices/savedHomesSlice'
import homesReducer from './slices/homesSlice'
import lotsReducer from './slices/lotsSlice'


export const store = configureStore({
    reducer: {
        modal: modalReducer,
        savedHomes: savedHomesReducer,
        homes: homesReducer,
        lots: lotsReducer,
    },
})