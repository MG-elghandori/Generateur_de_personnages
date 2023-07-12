import { configureStore } from "@reduxjs/toolkit"

import randomPersonSlice from './RandomSlice'
const store=configureStore({
    reducer:{
        PersonRandom:randomPersonSlice,
    }
})
export default store