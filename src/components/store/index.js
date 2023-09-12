import { configureStore } from '@reduxjs/toolkit'
import characters from '../pages/MainPage/MainPageSlice'

const store = configureStore({
    reducer: { characters: characters },
    middleware: getDefaultMidleWare => getDefaultMidleWare(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;