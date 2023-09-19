import { configureStore } from '@reduxjs/toolkit'
import characters from '../pages/MainPage/MainPageSlice'
import login from '../pages/LoginPage/LoginPageSlice'
import form from '../Form/FormSlice'
import { apiFireBaseSlice } from '../../apiFirebase/apiFireBaseSlice';

const store = configureStore({
    reducer: { characters, login, form, [apiFireBaseSlice.reducerPath]: apiFireBaseSlice.reducer },
    middleware: getDefaultMidleWare => getDefaultMidleWare().concat(apiFireBaseSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;