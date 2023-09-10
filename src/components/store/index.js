import { configureStore } from '@reduxjs/toolkit'
import characters from '../pages/CharInfoPage/CharInfoSlice'





const stringMidleWare = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}


const store = configureStore({
    reducer: { characters, },
    middleware: getDefaultMidleWare => getDefaultMidleWare().concat(stringMidleWare),
    devTools: process.env.NODE_ENV !== 'production'
})


export default store;