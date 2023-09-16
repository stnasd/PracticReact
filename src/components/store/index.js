import { configureStore } from '@reduxjs/toolkit'
import characters from '../pages/MainPage/MainPageSlice'
import filterLoggerUser from '../header/AppHeaderSlice'
import { apiFireBaseSlice } from '../../apiFirebase/apiFireBaseSlice';

const store = configureStore({
    reducer: { characters, filterLoggerUser, [apiFireBaseSlice.reducerPath]: apiFireBaseSlice.reducer },
    middleware: getDefaultMidleWare => getDefaultMidleWare().concat(apiFireBaseSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;