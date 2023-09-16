import { configureStore } from '@reduxjs/toolkit'
import characters from '../pages/MainPage/MainPageSlice'
<<<<<<< HEAD
import filterLoggerUser from '../header/AppHeaderSlice'
import { apiFireBaseSlice } from '../../apiFirebase/apiFireBaseSlice';

const store = configureStore({
    reducer: { characters, filterLoggerUser, [apiFireBaseSlice.reducerPath]: apiFireBaseSlice.reducer },
    middleware: getDefaultMidleWare => getDefaultMidleWare().concat(apiFireBaseSlice.middleware),
=======

const store = configureStore({
    reducer: { characters: characters },
    middleware: getDefaultMidleWare => getDefaultMidleWare(),
>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;